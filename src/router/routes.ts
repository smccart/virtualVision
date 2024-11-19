import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/ChoicePage.vue') },
      { path: 'about-us', component: () => import('pages/AboutUs.vue') }, // Added About Us route
      {
        path: 'talk-to-developer',
        component: () => import('pages/TalkToDeveloper.vue'),
      }, // Added Talk to a Developer route
    ],
  },

  // Always leave this as the last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
