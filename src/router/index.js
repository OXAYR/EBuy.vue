import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import ProductListView from '../views/PorductListView.vue'
import CreateProductView from '../views/CreateProductView.vue'
import EditProduct from '../components/EditProduct.vue'
import CartView from '../views/CartView.vue'


const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/productlistview',
        component: ProductListView
      },
      {
        path: '/createproductview',
        component: CreateProductView
      },
      {
        path: '/edit/:id',
        component: EditProduct,
      },
      {
        path: '/cartView',
        component: CartView
      }
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
