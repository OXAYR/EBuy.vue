import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    count:0,
    cart:[],
    user:{},
    admin:{},
    isAuthenticated: false,
    role:null,
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    getCart(state){
      return state.cart
    },
    getCartLength(state){
      return state.cart.length
    },
    getUser(state){
      return state.user
    },
    getAdmin(state){
      return state.user
    },
    getRole(state){
      return state.role
    }
    
  },
  mutations: {
    SET_USER(state, user){
      state.user = localStorage.getItem(`${user}`)
    },
    SET_ADMIN(state, admin){
      state.admin = localStorage.getItem(`${admin}`)
    },
    
    SET_ROLE(state, role){
      console.log('in the mutation role---------------->',role)
      state.role = role
    },
    ADD_PRODUCT(state, product) {
      const productNew={
        ...product,
         id:++state.count}
      state.products.push(productNew)
    },
    SET_CART(state,product){
      state.cart.push(product)
    },
    DELETE_PRODUCT(state, index) {
      state.products.splice(index, 1)
    },
    REMOVE_PRODUCT(state, index) {
      state.cart.splice(index, 1)
    },
    UPDATE_PRODUCT(state, { index, data }) { 
      state.products.splice(index, 1, data);
    },
  },
  actions: {
    createUser({commit}, user){
      commit('SET_USER', user)
    },
    createAdmin({commit}, admin){
      commit('SET_USER', admin)
    },
    setRole({commit},role){
      console.log('in the action role---------------->',role)
      commit('SET_ROLE', role)
    },
    createProduct({ commit }, payload) {
      commit('ADD_PRODUCT', payload)
    },
    addToCart({commit},payload){
      commit('SET_CART', payload)
    },
    deleteProduct({ commit}, index) {
      commit('DELETE_PRODUCT', index)
    },
    removeProduct({ commit}, index) {
      commit('REMOVE_PRODUCT', index)
    },
    updateProduct({ commit }, { id, data }) {
      commit('UPDATE_PRODUCT', { index: id, data }); 
    },
    

  }
})