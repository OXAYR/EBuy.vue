<template>
  <ProductList
    :items="tasks"
    @delete-task="deleteTask"
    @status-change="updateStatusAction"
  />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProductList from "../components/ProductList.vue";

export default {
  name: "ProductListView",
  components: {
    ProductList,
  },
  computed: {
    ...mapGetters({ tasks: "getTasks" }),
  },
  methods: {
    ...mapActions({ deleteTaskAction: "deleteTask" }),
    deleteTask(index) {
      this.deleteTaskAction(index);
    },
    ...mapActions(["updateStatus"]),
    updateStatusAction(index, status) {
      this.updateStatus({ id: index, status });
    },
  },
};
</script>
