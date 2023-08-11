<template>
  <div class="flex">
    <div class="w-48">
      <SideBar />
    </div>
    <div class="flex-grow p-4">
      <div class="bg-white p-4 text-left mb-4 rounded">
        <h1 class="text-3xl font-bold text-seaGreen">
          Welcome Back, <span class="text-stoneBlack">Admin </span>
        </h1>
        <p class="text-sm font-medium">
          Here you can create, edit and delete products
        </p>
      </div>

      <div class="bg-white rounded">
        <CreateProduct />
      </div>
    </div>
  </div>
</template>
<script>
import CreateProduct from "@/AdminComponents/CreateProduct.vue";
import SideBar from "../AdminComponents/SideBar.vue";
export default {
  name: "AdminView",
  components: {
    SideBar,
    CreateProduct,
  },
};
</script>
