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

          <button
            @click="deleteItem(index)"
            class="text-white bg-stoneBlack font-medium rounded p-1 m-3"
          >
            x
          </button>
          <button
            @click="editItem(item)"
            class="text-white bg-seaGreen font-medium rounded p-1 m-3"
          >
            Edit
          </button>
        </div>
        <!-- <EditTask
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
//import EditTask from "./EditTask.vue";

export default {
  name: "AdminProductList",
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
  },
  //components: { EditTask },
};
</script>
