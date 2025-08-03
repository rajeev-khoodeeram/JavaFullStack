<template>
<div class="student-form-container">
    <h2>New Student</h2>
    <form @submit.prevent="submitForm">
        <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="student.name" required>
        </div>
        <div class="form-group">
            <label for="age">Age:</label>
            <input type="number" id="age" v-model.number="student.age" required>
        </div>
        <button type="submit">Add Student</button>
        </form>

        <div v-if="message" class="message">{{ message }}</div>
        </div>
</template>

<script     setup lang="ts">
import { ref } from 'vue';
import { createStudent } from '../services/studentAPI';
import type { Student } from "@/types/student";

const message = ref<string | null>(null);    
const name = ref<string>('');
const age = ref<number | null>(null);
const student : Omit<Student, 'id'> = { name: '', age: 0 };
    

const submitForm = async () => {
    try {
        const response = await createStudent(student);
        message.value = `Student ${response.name} added successfully!`;
        name.value = '';
        age.value = null;

        console.log("Student added:", response);
        

    } catch (error) {
        console.error("Error adding student:", error);
        message.value = "Error adding student";
     
    }
};
</script>


<style scoped>
.student-form-container {
  max-width: 70%;
  margin: 20px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}
.student-form-container h2 {
  color: #333;
  margin-bottom: 20px;
}       
.student-form-container form {
    display: flex;
    flex-direction: column;
    }       
    .student-form-container input {
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    .student-form-container button {
        padding: 10px;
        background-color: #28a745;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .student-form-container button:hover {
        background-color: #218838;
    }
    .message {
        margin-top: 20px;
        color: #28a745;
        font-weight: bold;
    }
    .error {
        color: red;
        font-weight: bold;
    }
</style>