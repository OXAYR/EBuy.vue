<template>
  <div class="card px-8 py-11 max-w-full flex flex-col items-center">
    <h2 class="font-bold text-center mb-4 text-xl">Edit Product</h2>
    <div class="w-full max-w-md">
      <label class="block font-semibold mb-2">Title:</label>
      <input
        v-model="editedTask.title"
        class="border border-gray-300 w-full px-3 py-2 mb-4"
      />

      <label class="block font-semibold mb-2">Description:</label>
      <textarea
        v-model="editedTask.desc"
        class="border border-gray-300 w-full px-3 py-2 mb-4"
      ></textarea>

      <label class="block font-semibold mb-2">Status:</label>
      <select
        v-model="editedTask.status"
        class="border border-black w-full px-3 py-2 mb-4"
      >
        <option v-for="status in flag" :key="status">{{ status }}</option>
      </select>
      {{ tasks }}

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
    prevTask: {
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
      editedTask: {
        title: "",
        desc: "",
        status: "",
      },
      flag: ["In-Progress", "Pending", "Completed"],
      id: this.$route.params.id,
    };
  },
  methods: {
    ...mapActions(["updateTask"]),
    updateTaskInStore() {
      this.updateTask({ id: this.indx, data: this.editedTask });
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
