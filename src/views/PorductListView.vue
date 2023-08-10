<template>
  <ProductList
    :items="Products"
    @delete-task="deleteProduct"
    @add-cart="addInCart"
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
    ...mapGetters({ Products: "getProducts" }),
  },
  methods: {
    ...mapActions({ deleteProductAction: "deleteProduct" }),
    deleteProduct(index) {
      this.deleteProductAction(index);
    },
    ...mapActions(["addToCart"]),
    addInCart(product) {
      this.addToCart({ product });
    },
  },
};
</script>
