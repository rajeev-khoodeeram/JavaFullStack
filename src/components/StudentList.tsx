// src/components/StudentList.tsx
import React, { useEffect, useState } from 'react';
import { type Student } from '../types/student'; // Import the Student interface
import { getAllStudents } from '../services/studentApi'; // Import the API utility function
import './StudentList.css'; // Import styles for the StudentList component

const StudentList: React.FC = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        setLoading(true);
        setError(null);
        // Fetch students from the API
        const data = await getAllStudents();
        setStudents(data);
      } catch (err) {
        setError('Failed to load students');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="student-list">

      {students.length === 0 ? (
        <p>No students found.</p>
      ) : (
        //<ul className="student-items">
         <table className="student-table"> 
         <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
          </tr>
         </thead>
         <tbody>
          {students.map((student) => (
            //<li key={student.id} className="student-item">
            //  <strong>{student.name} {student.age}</strong>
            //</li>

            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.age}</td>
            </tr>
          ))}
        </tbody>
        </table>
      )}
    </div>
  );
};

export default StudentList;