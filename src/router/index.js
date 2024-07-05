import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/Login.vue";
import RegisterView from "../views/Registration.vue";
import OTPView from "../views/OTPVerification.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/otp",
      name: "otp",
      component: OTPView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/register", "/otp", "/"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");

  if (authRequired && !loggedIn) {
    return next("/login");
  } else if (
    loggedIn &&
    (to.path === "/login" || to.path === "/register" || to.path === "/otp")
  ) {
    return next("/");
  }

  next();
});

export default router;
