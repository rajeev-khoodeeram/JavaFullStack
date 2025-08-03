<template>
   <div class="student-list-container">
    <h2>Student List</h2>
    <div v-if="students.length === 0" class="error-message">
      No students found.
      <button class="retry-button" @click="fetchStudents">Retry</button>
    </div>
 
  <table v-else class="students-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
          </tr>
      </tbody>
    </table>
    </div>
</template>

<script  setup lang="ts">
import { ref, onMounted } from 'vue';
import type { Student } from "@/types/student";
import { getAllStudents } from "../services/studentAPI";

const students = ref<Student[]>([]);
const fetchStudents = async () => {
    try {
        const response = await getAllStudents();
        students.value = response;
    } catch (error) {
        console.error("Error fetching students:", error);
    }
};

onMounted(() => {
    fetchStudents();
});

</script>

<style scoped>


.student-list-container {
  max-width: 70%;
  margin: 20px auto;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #342f2f;
  text-align: center;
    color: #fff;
}

.student-list-container h2 {
  color: #e1d9d9;
  margin-bottom: 20px;
}

.students-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.students-table th,
.students-table td {
  border: 1px solid #312d2d;
  padding: 10px;
  text-align: left;
  
}

.students-table th {
  background-color: #188324;
  font-weight: bold;
  color: #555;
}

.students-table tr:nth-child(even) {
  background-color: #93c883;
}

.students-table tr:hover {
  background-color: #375d7a;
}

.error-message {
  color: #d8000c;
  background-color: #ffbaba;
  border: 1px solid #d8000c;
  padding: 10px;
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.retry-button {
  background-color: #007bff;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  margin-left: 15px;
}

.retry-button:hover {
  background-color: #0056b3;
}

</style>