export default [
  {
    path: "/backstage",
    component: () => import("@/views/backstage/index.vue"),
    redirect: { path: "/backstage/home" },
    children: [
      {
        path: "home",
        component: () => import("@/views/backstage/home/index.vue")
      },
      {
        path: "table",
        component: () => import("@/views/backstage/table/index.vue")
      }
    ]
  }
];
