import { createRouter, createWebHistory } from 'vue-router'
import StudentList from '../components/StudentList.vue'
import StudentForm from '@/components/StudentForm.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', // Root path
      redirect: '/students' // Redirects to /students by default
    },
    {
      path: '/students', // Path for the student list
      name: 'StudentList', // A name for programmatic navigation (optional but good practice)
      component: StudentList, // Component to render for this route
    },
    {
      path: '/students/add', // Path for a specific student
      name: 'AddStudent', // A name for programmatic navigation (optional but good practice)
      component: StudentForm, // Component to render for this route
    }
  ]
})

export default router
