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
          },
          {
            path: "complete",
            component: () => import("@/views/backstage/task/complete/index.vue")
          }
        ]
      },
      {
        path: "resume",
        component: () => import("@/views/backstage/resume/index.vue")
      },
      {
        path: "todoMVC",
        component: () => import("@/views/backstage/todoMVC/index.vue")
      },
      {
        path: "CSSCollect",
        component: () => import("@/views/backstage/CSSCollect/index.vue"),
        children: [
          {
            path: "coolAnimation",
            component: () =>
              import("@/views/backstage/CSSCollect/coolAnimation/index.vue")
          },
          {
            path: "fullSnow",
            component: () =>
              import("@/views/backstage/CSSCollect/fullSnow/index.vue")
          }
        ]
      }
    ]
  }
];
