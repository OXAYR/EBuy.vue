<template>
  <div class="fixed bg-stoneBlack h-screen w-48 p-4 flex flex-col items-center">
    <div class="mt-10">
      <router-link to="/" class="mb-4">
        <p class="font-semibold text-xl text-seaGreen">EBuy</p>
      </router-link>
    </div>
    <div id="sideBar" class="mt-24">
      <router-link
        to="/admin"
        class="mb-7 text-seaGreen block rounded-xl py-3 px-12 font-bold"
        >Dashboard</router-link
      >
      <router-link
        to="/admin/adminProductListView"
        class="mb-2 text-seaGreen rounded-xl py-3 px-12 block font-bold"
        >Products</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
};
</script>

<style scoped>
.style {
  list-style-type: none;
}
</style>
