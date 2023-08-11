<template>
  <div class="mx-16 my-32">
    <h1 class="font-bold text-3xl text-left">Featured Products</h1>
    <ul v-if="items.length" class="grid grid-cols-4 gap-4 mt-4">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="p-4 bg-white shadow-md rounded-lg flex flex-col justify-between"
      >
        <div class="p-2">
          <h2 class="text-lg font-semibold">{{ item.title }}</h2>
          <p class="text-gray-500 text-sm line-clamp-2">{{ item.desc }}</p>
        </div>
        <div><img src="../assets/shopping.png" alt="productimage" /></div>
        <div class="mt-4 flex justify-between items-center">
          <p class="text-lg font-semibold">Rs{{ item.price }}</p>
          <button
            @click="addToCart(item)"
            class="bg-stoneBlack text-white font-medium rounded p-2"
          >
            Add to Cart
          </button>
        </div>
      </li>
    </ul>
    <div v-else class="flex flex-col items-center justify-center text-center">
      <div>
        <img
          src="../assets/undraw_no_data_re_kwbl.svg"
          alt="empty cart"
          class="max-w-full h-auto max-h-48 mx-auto drop-shadow-lg"
        />
      </div>
      <p class="font-semibold mt-2">No Products Available</p>
    </div>
  </div>
</template>

<script>
// import EditProduct from "./EditProduct.vue";
export default {
  name: "ProductList",
  data() {
    return {
      editTask: -1,
    };
  },
  props: {
    items: {},
  },
  methods: {
    deleteItem(index) {
      this.$emit("delete-task", index);
    },
    editItem(task) {
      this.$router.push({ path: `/edit/${task.id}` });
    },
    updateTask(index) {
      if (this.editTask === index) {
        this.editTask = -1;
      } else {
        this.editTask = index;
      }
    },

    addToCart(item) {
      this.$emit("add-cart", item);
    },
    // updateStatus(index, status) {
    //   console.log(index, status);
    //   this.$emit("status-change", index, status);
    // },
  },
  // components: { EditTask },
};
</script>
