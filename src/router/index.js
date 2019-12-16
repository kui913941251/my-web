import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import("../views/home/Home")
const ToDoList = () => import("../views/todolist/ToDoList")


const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: "/home/todolist",
        component: ToDoList
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
