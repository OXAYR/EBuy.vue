<template>
  <div class="card px-8 py-11 max-w-full flex flex-col items-center">
    <h2 class="font-bold text-center mb-4 text-xl">Edit Product</h2>
    <div class="w-full max-w-md">
      <label class="block font-semibold mb-2">Title:</label>
      <input
        v-model="editedProduct.title"
        class="border border-gray-300 w-full px-3 py-2 mb-4"
      />
      <input
        type="number"
        v-model="editedProduct.price"
        class="border border-gray-300 w-full px-3 py-2 mb-4"
      />

      <label class="block font-semibold mb-2">Description:</label>
      <textarea
        v-model="editedProduct.desc"
        class="border border-gray-300 w-full px-3 py-2 mb-4"
      ></textarea>

      <button
        type="submit"
        @click="updateProductInStore"
        class="bg-stoneBlack text-white px-4 py-2 rounded hover:text-seaGreen"
      >
        Update Task
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "EditProduct",
  props: {
    prevProduct: {
      type: Object,
      required: true,
    },
    indx: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      editedProduct: {
        title: "",
        desc: "",
        price: 0,
      },

      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(["updateProduct"]),
    updateProductInStore() {
      this.updateProduct({ id: this.indx, data: this.editedProduct });
      router.push("/admin");
    },
  },
  computed: {
    ...mapGetters({ Products: "getProducts" }),
    tasks() {
      // console.log(foundTask);
      return this.Products.find((prod) => prod.id == this.$route.params.id);
    },
  },
};
</script>
