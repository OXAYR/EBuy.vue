<template>
  <AdminProductList :items="Products" @delete-product="deleteProduct" />
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import AdminProductList from "../AdminComponents/AdminProductList.vue";

export default {
  name: "AdminProductListView",
  components: {
    AdminProductList,
  },
  computed: {
    ...mapGetters({ Products: "getProducts" }),
  },
  methods: {
    ...mapActions({ deleteProductAction: "deleteProduct" }),
    deleteProduct(index) {
      this.deleteProductAction(index);
    },
  },
};
</script>
