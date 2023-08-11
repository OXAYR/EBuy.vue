import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import ProductListView from '../views/PorductListView.vue'
import AdminProductListView from '../AdminViews/AdminProductListView.vue'
import DashBoardView from '../AdminViews/DashBoardView.vue'
import EditProduct from '../AdminComponents/EditProduct.vue'
import AdminView from '../AdminViews/AdminView.vue'
import CartView from '../views/CartView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '',
        name: ProductListView,
        component: ProductListView
      },
      {
        path: '/cartView',
        component: CartView
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUpView
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    children: [
      {
        path: '',
        name:DashBoardView,
        component: DashBoardView,
      },
      {
        path: 'adminProductListView',
        component: AdminProductListView
      },
      {
        path: '/edit/:id',
        component: EditProduct,
      },
    ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
