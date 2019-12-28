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
        path: "task",
        component: () => import("@/views/backstage/task/index.vue"),
        children: [
          {
            path: "plan",
            component: () => import("@/views/backstage/task/plan/index.vue")
          }
        ]
      },
      {
        path: "resume",
        component: () => import("@/views/backstage/resume/index.vue")
      }
    ]
  }
];
