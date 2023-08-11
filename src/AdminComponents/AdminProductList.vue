<template>
  <div class="pt-6 pb-4">
    <h1 class="font-bold text-2xl text-left">Products</h1>
    <ul
      v-if="items.length"
      class="p-4 mt-4 card divide-y divide-slate-300 text-left"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="px-2 grid grid-cols-12 gap-4"
        @dblclick="updateTask(index)"
      >
        <div class="col-span-9">
          <p class="font-bold mt-4">Title: {{ item.title }}</p>
          <p class="line-clamp-2 font-extralight">
            {{ item.desc }}
          </p>
          <p class="text-lg font-semibold">Rs{{ item.price }}</p>
        </div>
        <div class="col-span-3 flex flex-col items-end">
          <!-- Adjust the col-span value here -->
          <button
            @click="deleteItem(index)"
            class="text-white bg-stoneBlack font-medium rounded-xl px-2 m-4"
          >
            x
          </button>
          <button
            @click="editItem(item)"
            class="text-stoneBlack bg-seaGreen font-medium rounded p-1 m-3"
          >
            Edit
          </button>
        </div>
        <!-- <EditProduct :prevTask="item" :indx="index" class="col-span-12" /> -->
      </li>
    </ul>
    <p v-else>No Products to show</p>
  </div>
</template>

<script>
// import EditProduct from "./EditProduct.vue";

export default {
  name: "AdminProductList",
  props: {
    items: {},
  },
  methods: {
    deleteItem(index) {
      this.$emit("delete-product", index);
    },
    editItem(product) {
      this.$router.push({ path: `/edit/${product.id}` });
    },
  },
  //   components: { EditProduct },
};
</script>
