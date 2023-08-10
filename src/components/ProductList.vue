<template>
  <div class="mx-10 my-32">
    <h1 class="font-bold text-3xl text-left">Tasks</h1>
    <ul
      v-if="items.length"
      class="p-4 mt-4 card divide-y divide-slate-300 text-left shadow-md"
    >
      <li
        v-for="(item, index) in items"
        :key="index"
        class="px-2 grid grid-cols-12 gap-4"
        @dblclick="updateTask(index)"
      >
        <div class="col-span-9">
          <p class="font-bold mt-4">{{ item.title }}</p>
          <p class="line-clamp-2 font-extralight">
            <b>{{ descriptionLabel }}</b> {{ item.desc }}
          </p>
          <select
            v-model="item.status"
            value="item.status"
            class="border border-black my-5 max-w-md"
            @change="updateStatus(index, item.status)"
          >
            <option v-for="status in flag" :key="status">
              {{ status }}
            </option>
          </select>
        </div>
        <div
          class="col-span-3 flex flex-col items-end justify-between py-2 mt-4"
        >
          <div
            v-show="item.status === 'Completed'"
            class="bg-green-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <div
            v-show="item.status === 'Pending'"
            class="bg-rose-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <div
            v-show="item.status === 'In-Progress'"
            class="bg-blue-500 text-white rounded-full px-2"
          >
            {{ item.status }}
          </div>
          <button
            @click="deleteItem(index)"
            class="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium rounded p-1 m-3"
          >
            Delete
          </button>
          <button
            @click="editItem(item)"
            class="border border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-medium rounded p-1 m-3"
          >
            Edit
          </button>
        </div>
        <!-- <EditProduct
          v-show="editTask === index"
          :prevTask="item"
          :indx="index"
          class="col-span-12"
        /> -->
      </li>
    </ul>
    <p v-else>No tasks to show</p>
  </div>
</template>

<script>
// import EditProduct from "./EditProduct.vue";

export default {
  name: "ProductList",
  data() {
    return {
      editTask: -1,
      flag: ["In-Progress", "Pending", "Completed"],
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
    updateStatus(index, status) {
      console.log(index, status);
      this.$emit("status-change", index, status);
    },
  },
  // components: { EditTask },
};
</script>
