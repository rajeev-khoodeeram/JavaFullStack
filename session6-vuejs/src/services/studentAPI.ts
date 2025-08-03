import type { Student } from "@/types/student";

const API_URL = 'http://localhost:8080/api/students';


export const getAllStudents = async (): Promise<Student[]> => {
    
    try {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data: Student[] = await response.json();
    return data;
    } catch (error) {
        console.error('Error fetching students:', error);
        throw error; // Re-throw the error for further handling
    }
};


export const getStudentById = async (id: number): Promise<Student> => {
    const response = await fetch(`${API_URL}/${id}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

// Create a new student
// This function sends a POST request to the API to create a new student
// It takes a Student object as an argument and returns the created Student object
// If the request fails, it throws an error
export const createStudent = async (student: Omit<Student, 'id'>): Promise<Student> => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};


export const updateStudent = async (student: Student): Promise<Student> => {
    const response = await fetch(`${API_URL}/${student.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(student),
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
};


