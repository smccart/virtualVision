import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'landing-page',
        component: () => import('pages/LandingPage.vue'),
      },
      {
        path: 'about-us',
        name: 'about-us',
        component: () => import('pages/AboutUs.vue'),
      },
      {
        path: 'talk-to-developer',
        name: 'talk-to-developer',
        component: () => import('pages/TalkToDeveloper.vue'),
      },
      {
        path: 'focused-strategy-sessions',
        name: 'focused-strategy-sessions',
        component: () => import('pages/FocusedStrategySessions.vue'),
      },
      {
        path: 'complete-website-build',
        name: 'complete-website-build',
        component: () => import('pages/CompleteWebsiteBuild.vue'),
      },
    ],
  },
  {
    path: '/:catchAll(.*)*',
    name: 'error-not-found',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
