import type { Student } from "@/types/student";

const API_URL = "http://localhost:8080/api/students";

export async function getAllStudents(): Promise<Student[]> {


  try {      
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch students");
  }
  return response.json();
  } catch (error) {
    console.error("Error fetching students:", error);
    throw error; // Re-throw the error for further handling
  } 
};   


export async function createStudent(student: Omit<Student, 'id'>): Promise<Student> {
  try {
    const response = await fetch(API_URL, {
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
  } catch (error) {
    console.error("Error creating student:", error);
    throw error; // Re-throw the error for further handling
  }
}