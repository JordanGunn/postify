import { createRouter, createWebHistory } from 'vue-router'
// import AdminDashboard from "@/views/AdminDashboard";
import Home from "@/views/Home";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Profile from "@/views/Profile";
import Projects from "@/views/Projects";
import AdminDashboard from "@/views/AdminDashboard";
// import store from '@/store/index'


const routes = [
  {
    path: '/',
    name: "Home",
    component: Home,
  },
  {
    path: '/login',
    name: "Login",
    component: Login,
  },
  {
    path: '/register',
    name: "Register",
    component: Register,
  },
  {
    path: '/profile',
    name: "Profile",
    component: Profile,
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
  },
  {
    path: '/solution',
    name: 'Solution',
    component: Projects,
  },
  {
    path: '/createProject',
    name: 'CreateProject',
    component: Projects,
  },
  {
    path: '/adminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// router.beforeEach(async (to, from, next) => {
//   if (to.meta.useAuth) {
//     let userProfile = store.getters["auth/getUserProfile"];
//     if (userProfile.id === 0) {
//       await store.dispatch("auth/userProfile");
//       userProfile = store.getters["auth/getUserProfile"];
//       if (userProfile.id === 0) {
//         return next({ path: "/login" });
//       } else {
//         return next();
//       }
//     }
//   }
//   return next();
// });

export default router
