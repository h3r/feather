import { createRouter } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('/src/view/home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('/src/view/about.vue'),
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: () => import('/src/view/signin.vue'),
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: () => import('/src/view/signup.vue'),
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: () => import('/src/view/catalog.vue'),
  },
  {
    path: '/user',
    name: 'Users',
    component: () => import('/src/view/users.vue'),
  },
  {
    path: '/user/:id',
    name: 'UserSingle',
    props: true,
    component: () => import('/src/view/usersingle.vue'),
  },
]

export default function (history) {
  return createRouter({
    history,
    routes,
  })
}
