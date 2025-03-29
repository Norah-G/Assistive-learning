import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import CourseLessons from "./views/CourseLessons.vue";
import CourseDetail from "./views/CourseDetail.vue"; 
import UserLogin from "./views/UserLogin.vue";  // ✅ Ensure correct import
import UserSignup from "./views/UserSignup.vue";  // ✅ Ensure correct import
import PersonalDashboard from "./views/PersonalDashboard.vue";
import LiveDashboard from "./views/LiveDashboard.vue"; 

// Import Firebase Auth Correctly
import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const routes = [
  { path: "/", component: HomePage },
  { path: "/lessons", component: CourseLessons },
  { path: "/lessons/:id", component: CourseDetail }, 
  { path: "/dashboard", component: LiveDashboard }, 
  { path: "/login", component: UserLogin },  // ✅ Fixed
  { path: "/signup", component: UserSignup },  // ✅ Fixed
  {
    path: "/personal-dashboard",
    component: PersonalDashboard,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔹 Navigation Guard: Restrict Personal Dashboard
router.beforeEach((to, from, next) => {
  onAuthStateChanged(auth, (user) => {
    if (to.meta.requiresAuth && !user) {
      next("/login"); 
    } else {
      next();
    }
  });
});

export default router;
