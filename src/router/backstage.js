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
        path: "calendar",
        component: () => import("@/views/backstage/calendar/index.vue")
      },
      {
        path: "G6Editor",
        component: () => import("@/views/backstage/G6Editor/index.vue")
      },
      {
        path: "anyTouch",
        component: () => import("@/views/backstage/anyTouch/index.vue")
      },
      {
        path: "todoMVC",
        component: () => import("@/views/backstage/todoMVC/index.vue"),
        meta: {
          keepAlive: true
        }
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
