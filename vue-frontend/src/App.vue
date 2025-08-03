<script setup lang="ts"></script>

<template>
  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p>

 <header>
    <div class="wrapper">
      <img src="./assets/logo.png" alt="Vue logo" class="logo" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
    <nav class="nav-links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/students">Students</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/students/add">Add Student</RouterLink>
    </nav>
  </header>

  <RouterView /> 
</template>

<style scoped>
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 1rem;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}
.nav-links {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  padding: 10;
  margin-left: 10px;
}
 
</style>
