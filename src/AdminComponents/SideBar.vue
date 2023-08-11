<template>
  <div class="fixed bg-stoneBlack h-screen w-48">
    <ul>
      <router-link to="/admin/">
        <li class="list flex items-center justify-center text-white h-20">
          DashBoard
        </li>
      </router-link>

      <router-link to="/admin/adminProductList">
        <li class="list flex items-center justify-center text-white h-20">
          Product List
        </li>
      </router-link>
    </ul>
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
