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
      console.log('in the getter------->', state.cart )
      return state.cart
    },
    getCartLength(state){
      return state.cart.length
    }
    
  },
  mutations: {
    ADD_PRODUCT(state, product) {
      const productNew={
        ...product,
         id:++state.count}
      state.products.push(productNew)
    },
    SET_CART(state,product){
      console.log("in mutation", 'data------>', product);
      state.cart.push(product)
      console.log("in mutation cart", 'data------>', state.cart);
    },
    DELETE_PRODUCT(state, index) {
      state.products.splice(index, 1)
    },
    REMOVE_PRODUCT(state, index) {
      state.cart.splice(index, 1)
    },
    UPDATE_PRODUCT(state, { index, data }) { 
      console.log(" in mutation ", 'index---->', index, 'data----->', data);
      state.products.splice(index, 1, data);
    },
    UPDATE_PRICE(state,{index,price}){
      console.log(" in mutation ", 'index---->', index, 'status----->', status);
      state.products[index].price = price
    }
  },
  actions: {
    createProduct({ commit }, payload) {
      // this.state.count++;
      commit('ADD_PRODUCT', payload)
    },
    addToCart({commit},payload){
      console.log("in action", 'data------>', payload);
      commit('SET_CART', payload)
    },
    deleteProduct({ commit}, index) {
      commit('DELETE_PRODUCT', index)
    },
    removeProduct({ commit}, index) {
      commit('REMOVE_PRODUCT', index)
    },
    updateProduct({ commit }, { id, data }) {
      console.log("in action", 'id------>', id, '\n', 'data------>', data);
      commit('UPDATE_PRODUCT', { index: id, data }); // Call the mutation with index and data
    },
    updatePrice({commit}, { id, price }){
      console.log("in action", 'id------>', id, '\n', 'status------>', price);
      commit('UPDATE_PRICE' ,{ index: id, price })
    },
    

  }
})