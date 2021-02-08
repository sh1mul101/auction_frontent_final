import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },

  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue"),
  },

  {
    path: "/collection",
    name: "Collection",
    component: () => import("../views/Collection.vue"),
  },

  {
    path: "/hellouser",
    name: "HelloUser",
    component: () => import("../views/HelloUser.vue"),
  },

  {
    path: "/usertable",
    name: "UserTable",
    component: () => import("../views/UserTable.vue"),
  },

  {
    path: "/auctionadd",
    name: "AuctionAdd",
    component: () => import("../views/AuctionAdd.vue"),
  },

  {
    path: "/userprofile",
    name: "UserProfile",
    component: () => import("../views/UserProfile.vue"),
  },


];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;