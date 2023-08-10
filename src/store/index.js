import { createStore } from 'vuex'

export default createStore({
  state: {
    tasks: [],
    count:0,
  },
  getters: {
    getTasks(state) {
      return state.tasks
    },
    getFilteredTasks(state) {
      if (state.statusFilter === "All") {
        return state.tasks;
      } else {
        return state.tasks.filter(task => task.status === state.statusFilter);
      }
    },
    
  },
  mutations: {
    ADD_TASK(state, task) {
      const taskNew={
        ...task,
         id:++state.count}
      state.tasks.push(taskNew)
    },
    DELETE_TASK(state, index) {
      state.tasks.splice(index, 1)
    },
    UPDATE_TASK(state, { index, data }) { 
      console.log(" in mutation ", 'index---->', index, 'data----->', data);
      state.tasks.splice(index, 1, data);
    },
    UPDATE_STATUS(state,{index,status}){
      console.log(" in mutation ", 'index---->', index, 'status----->', status);
      state.tasks[index].status = status
    }
  },
  actions: {
    createTask({ commit }, payload) {
      // this.state.count++;
      commit('ADD_TASK', payload)
    },
    deleteTask({ commit}, index) {
      commit('DELETE_TASK', index)
    },
    updateTask({ commit }, { id, data }) {
      console.log("in action", 'id------>', id, '\n', 'data------>', data);
      commit('UPDATE_TASK', { index: id, data }); // Call the mutation with index and data
    },
    updateStatus({commit}, { id, status }){
      console.log("in action", 'id------>', id, '\n', 'status------>', status);
      commit('UPDATE_STATUS' ,{ index: id, status })
    },
    

  }
})