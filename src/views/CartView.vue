<template>
  <div class="mx-32 my-32">
    <h1 class="font-bold text-3xl text-left">MY CART ({{ cart.length }})</h1>
    <ul
      v-if="cart.length"
      class="p-4 mt-4 card divide-y divide-slate-300 text-left shadow-md"
    >
      <li
        v-for="(item, index) in cart"
        :key="item.product.id"
        class="px-2 grid grid-cols-12 gap-4"
      >
        <div class="col-span-9">
          <p class="font-bold mt-4">{{ item.product.title }}</p>
          <p>price: {{ item.product.price }}</p>
        </div>
        <div class="col-span-3 flex flex-col items-end py-2 mt-4">
          <button
            @click="removeItem(index)"
            class="text-white bg-stoneBlack font-medium text-md text-center rounded-full px-2 m-3"
          >
            x
          </button>
        </div>
      </li>
    </ul>
    <div
      v-if="cart.length"
      class="p-4 mt-4 card divide-y divide-slate-300 text-left shadow-md"
    >
      <p><strong>Total Bill:</strong> {{ calculateTotalBill }}</p>
    </div>
    <p v-else>No Product to show</p>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "CartView",
  computed: {
    ...mapGetters({ cart: "getCart" }),
    calculateTotalBill() {
      return this.cart.reduce((sum, item) => sum + item.product.price, 0);
    },
  },
  methods: {
    ...mapActions(["removeProduct"]),
    removeItem(index) {
      return this.removeProduct(index);
    },
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS classes here or in a separate stylesheet */
</style>
