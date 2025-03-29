<template>
  <nav class="navbar">
    <div class="logo">
      <router-link to="/">Assistive Learning</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/lessons">STEM Lessons</router-link></li>
      <li><router-link to="/dashboard">Dashboard</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 40px;
  background: #3498db;
  color: white;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.logo a {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: white;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav-links li a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
  padding: 8px 12px;
  transition: background 0.3s ease-in-out;
  border-radius: 5px;
}

.nav-links li a:hover,
.nav-links li a.router-link-active {
  background: white;
  color: #3498db;
}
</style>
