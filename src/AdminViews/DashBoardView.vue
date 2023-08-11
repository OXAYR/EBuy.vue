<template>
  <div class="bg-white p-4 text-left my-4 rounded">
    <h1 class="text-3xl font-bold text-seaGreen">
      Welcome Back, <span class="text-stoneBlack">Admin</span>
    </h1>
    <p class="text-sm font-medium">
      Here you can create, edit and delete products
    </p>
  </div>

  <div>
    <CreateProduct />
  </div>

  <div>
    <AdminProductListView />
  </div>
</template>
<script>
import CreateProduct from "@/AdminComponents/CreateProduct.vue";
import AdminProductListView from "./AdminProductListView.vue";
export default {
  name: "DashBoardView",
  components: {
    CreateProduct,
    AdminProductListView,
  },
};
</script>
