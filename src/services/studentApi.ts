import { type Student } from "../types/student";

const API_BASE_URL = "http://localhost:8080/api/students";

export async function getAllStudents(): Promise<Student[]> {

   try 
   {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) {
    throw new Error("Failed to fetch students");
    }
    return response.json();
    } catch (error) {

    console.error("Error fetching students:", error);
    throw error;
    }
}

export async function getStudentById(id: number): Promise<Student> {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch student with ID ${id}`);
  }
  return response.json();
}

export async function createStudent(student: Student): Promise<Student> {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
  if (!response.ok) {
    throw new Error("Failed to create student");
  }
  return response.json();
}


