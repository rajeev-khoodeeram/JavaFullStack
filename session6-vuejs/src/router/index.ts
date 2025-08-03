import { createRouter, createWebHistory } from 'vue-router'
import StudentList from '../components/StudentList.vue'
import HomeView from '../views/HomeView.vue'
import StudentForm from '@/components/StudentForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
 {
      path: '/', // Root path
      redirect: '/students' // Redirects to /students by default
    },
    {
      path: '/students', // Path for the student list
      name: 'StudentList', // A name for programmatic navigation (optional but good practice)
      component: StudentList
    },
    {
      path: '/students/add', 
      name: 'AddStudent',
      component: StudentForm
    }








  ],
})

export default router
