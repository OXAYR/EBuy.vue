<template>
  <div class="shadow-sm mt-32 Login px-8 py-11 max-w-full">
    <h1 class="text-center text-3xl font-medium font-serif">Enter a Product</h1>
    <div class="flex flex-wrap justify-between">
      <input
        type="text"
        placeholder="Enter title"
        id="todo"
        v-model="todo.title"
        class="mt-4 p-2 flex border border-gray-300 rounded-md w-full"
      />
      <input
        type="number"
        placeholder="Enter price"
        id="todo"
        v-model="todo.price"
        class="mt-4 p-2 flex border border-gray-300 rounded-md w-full"
      />
    </div>
    <p v-if="error.length" class="text-red text-sm text-left">
      {{ error }}
    </p>
    <textarea
      type="text"
      placeholder="Enter Description"
      v-model="todo.desc"
      class="mt-4 h-32 border border-gray-300 rounded-md w-full"
    />
    <button
      class="mt-4 px-12 py-2 bg-stoneBlack rounded-full"
      @click="validate(todo)"
    >
      <p class="text-white font-serif text-center">Submit</p>
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CreateProduct",
  data() {
    return {
      todo: {
        // id: 0,
        title: "",
        desc: " ",
        price: 0,
      },
      error: "",
    };
  },

  methods: {
    ...mapActions({ createProduct: "createProduct" }),
    validate(obj) {
      if (obj.title != "" && obj.price > 0) {
        // obj.id++;
        console.log("from the create task-------> ", obj);
        this.createProduct(obj);
        this.$router.push("/productlistview");
      } else {
        this.error = "Enter title or Valid Price";
      }
    },
  },
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
