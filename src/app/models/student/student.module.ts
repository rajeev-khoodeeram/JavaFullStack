// src/app/models/student.model.ts

/**
 * Represents the data structure for a student fetched from the API.
 */
export interface Student {
  id: number; // The unique ID from the database (e.g., MongoDB ObjectId)
  name: string;
  age : number;
}