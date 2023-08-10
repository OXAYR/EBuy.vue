import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    count:0,
    cart:[],
  },
  getters: {
    getProducts(state) {
      return state.products
    },
    // getFilteredProducts(state) {
    //   if (state.statusFilter === "All") {
    //     return state.products;
    //   } else {
    //     return state.products.filter(task => task.status === state.statusFilter);
    //   }
    // },
    getCart(state){
      return state.cart
    },
    getCartLength(state){
      return state.cart.length
    }
    
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      const taskNew={
        ...task,
         id:++state.count}
      state.products.push(taskNew)
    },
    SET_CART(state,product){
      state.cart.push(product)
    },
    DELETE_PRODUCT(state, index) {
      state.products.splice(index, 1)
    },
    UPDATE_PRODUCT(state, { index, data }) { 
      console.log(" in mutation ", 'index---->', index, 'data----->', data);
      state.products.splice(index, 1, data);
    },
    UPDATE_PRODUCT(state,{index,price}){
      console.log(" in mutation ", 'index---->', index, 'status----->', status);
      state.products[index].status = status
    }
  },
  actions: {
    createProduct({ commit }, payload) {
      // this.state.count++;
      commit('ADD_TASK', payload)
    },
    addToCart({commit},payload){
      commit('SET_CART', payload)
    },
    deleteProduct({ commit}, index) {
      commit('DELETE_TASK', index)
    },
    updateProduct({ commit }, { id, data }) {
      console.log("in action", 'id------>', id, '\n', 'data------>', data);
      commit('UPDATE_TASK', { index: id, data }); // Call the mutation with index and data
    },
    updatePrice({commit}, { id, status }){
      console.log("in action", 'id------>', id, '\n', 'status------>', status);
      commit('UPDATE_STATUS' ,{ index: id, status })
    },
    

  }
})