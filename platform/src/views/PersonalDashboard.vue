<template>
    <div class="dashboard">
      <h2>📚 My Learning Progress</h2>
      <p>Welcome, {{ user?.email }}</p>
      <p>Your current course progress: 75%</p>
      <button @click="logout">Logout</button>
    </div>
  </template>
  
  <script>
  import { auth } from "../firebase";
  import { signOut } from "firebase/auth";
  import { useRouter } from "vue-router";
  
  export default {
    data() {
      return { user: auth.currentUser };
    },
    setup() {
      const router = useRouter();
  
      const logout = async () => {
        await signOut(auth);
        alert("Logged Out!");
        router.push("/");
      };
  
      return { logout };
    }
  };
  </script>
  
  <style scoped>
  .dashboard {
    text-align: center;
    padding: 20px;
  }
  </style>

