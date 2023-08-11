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
          @click="updateTaskInStore"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
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
        router.push("/prductlistview");
      },
    },
    computed: {
      ...mapGetters({ getTask: "getTasks" }),
      tasks() {
        // console.log(foundTask);
        return this.getTask.find((task) => task.id == this.$route.params.id);
      },
    },
  };
  </script>
  