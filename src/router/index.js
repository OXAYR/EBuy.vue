import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import ProductListView from '../views/PorductListView.vue'
// // import CreateProductView from '../views/CreateProductView.vue'
// import EditProduct from '../components/EditProduct.vue'
import AdminView from '../AdminViews/AdminView.vue'
import CartView from '../views/CartView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [
      {
        path: '/',
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
    // children: [
    //   {
    //     path: '/adminproductlistview',
    //     component: AdminProductListView
    //   },
    //   {
    //     path: '/createproductview',
    //     component: CreateProductView
    //   },
    //   {
    //     path: '/edit/:id',
    //     component: EditProduct,
    //   },
    // ]
  },
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
