export default [
  {
    path: "/",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "*",
    component: () => import("@/views/login/index.vue")
  }
];
