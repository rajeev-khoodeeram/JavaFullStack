import React, { type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { createStudent } from "../services/studentApi";
import './StudentForm.css'; 



const StudentForm : React.FC = () => {

    const [name, setName] = React.useState("");
    const [age, setAge] = React.useState<number | ''>('');
    
    const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
    const [successMessage, setSuccessMessage] = React.useState<string | null>(null);

    const navigate  = useNavigate(); // Use the useNavigate hook from react-router-dom


    // This component will handle the form for adding a new student
    // For now, we'll just return a simple form structure
    //const  handleSubmit = async (event: React.FormEvent) => {
     const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {    
        event.preventDefault();
        // Handle form submission logic here

        if (!name || !age) {
            setErrorMessage("Name and age are required");
            return;
        }

        if (typeof age !== "number" || age <= 17) {
            setErrorMessage("Age must be a positive number and greater than 17");
            return;
        }

    
        setErrorMessage(null); // Reset error state
        setSuccessMessage(null); // Reset success state    

        const newStudent = {
         
            name,
            age
        };

        // Here you would typically call an API to create the student
        try {
            const response = await createStudent(newStudent); // Assuming createStudent is defined in your API service
            console.log("Student created:", response);
            setSuccessMessage("Student created successfully");
            setName(""); // Reset form fields
            setAge("");

            setTimeout(() => {
                navigate("/students"); // Redirect to the student list after successful creation 
            }, 3000);
            
            
        }
        catch (error) {
            console.error("Error creating student:", error);
            setErrorMessage("Failed to create student");
        } finally {
        
        }


        console.log("Form submitted");
    };

    



    return (
        <div className="student-form-container">
        <h2>Add New Student</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={name} 
            onChange={(e) => setName(e.target.value)}
            required />
            </div>
            <div className="form-group">
            <label htmlFor="age">Age:</label>
            <input type="number" id="age" name="age" value={age} 
            onChange={(e) => {
            const val = e.target.value;
            setAge(val === '' ? '' : Number(val)); // Convert to number, handle empty string
            }}
            required />
            </div>
            <button type="submit">Add Student</button>
        </form>

         {successMessage && (
            <div className="success-message">{successMessage}</div>
        )}
        {errorMessage && (
            <div className="error-message">{errorMessage}</div>
        )}   
        </div>
    );
} 
    
    
export default StudentForm;    
