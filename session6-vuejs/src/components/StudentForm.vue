<template>
  <div>
    <h1>New Student </h1>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="newStudent.name" required />
      </div>
      <div>
        <label for="age">Age:</label>
        <input type="number" id="age" v-model="newStudent.age" required />
      </div>
      <button type="submit">Add Student</button>    
    </form>
    <div v-if="message" class="message">{{ message }}</div>

  </div>
  </template>


<script setup lang="ts">

import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createStudent } from '../services/studentAPI';    
import type { Student } from "@/types/student";  
import { idText } from 'typescript';

const router = useRouter();

const message = ref<string | null>(null);    
const name = ref<string>('');
const age = ref<number | null>(null);


const newStudent : Omit<Student, 'id'> = {
    age: age.value !== null ? age.value : 0,
    name: name.value
  };


const submitForm = async ()  => {
  try {
    const response = await createStudent(newStudent);
    message.value = `Student ${response.name} added successfully!`;
    name.value = '';
    age.value = null;

    setTimeout(() => {
      message.value = null; // Clear message after 3 seconds
      router.push('/students'); // Redirect to student list
    }, 3000);
  } catch (error) {
    console.error("Error adding student:", error);
    message.value = "Failed to add student. Please try again.";
  }
};
 


</script>