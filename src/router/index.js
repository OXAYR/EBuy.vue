import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../AdminViews/LoginView.vue'
import SignUpView from '../AdminViews/SignUpView.vue'
import ProductListView from '../views/PorductListView.vue'
import AdminProductListView from '../AdminViews/AdminProductListView.vue'
import DashBoardView from '../AdminViews/DashBoardView.vue'
import EditProduct from '../AdminComponents/EditProduct.vue'
import AdminView from '../AdminViews/AdminView.vue'
import CartView from '../views/CartView.vue'
import UserOrAdmin from '../components/UserOrAdmin.vue'
import store from '@/store'


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
    path:"/userOrAdmin",
    component:UserOrAdmin,
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
router.beforeEach((to, from, next) => {
  console.log('Navigating from', from.name, 'to', to.name);
 if(store.state.role === 'user'){
    if (to.matched.some(record => record.name === 'home')) {
      console.log('Admin route authentication');
      
      if (store.state.isAuthenticated) {
        console.log('User is authenticated');
        next(); 
      } else {
        console.log('User is not authenticated');
        next({ name: 'login' });
      }
    }
    else{
      next()
    }
  }
  
  else if(store.state.role === 'admin'){ 
    if (to.matched.some(record => record.name === 'admin')) {
      console.log('Admin route authentication');
      
      if (store.state.isAuthenticated) {
        console.log('User is authenticated');
        next(); 
      } else {
        console.log('User is not authenticated');
        next({ name: 'login' });
      }
    } 
    else{
      next()
    }
    
  }
  else{
    next();
  }
});


export default router
