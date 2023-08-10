<template>
  <div>
    <nav class="bg-white py-5 shadow-md fixed top-0 left-0 right-0 font-serif">
      <div class="flex">
        <router-link to="/home"
          ><p class="px-10 font-semibold">EBuy</p></router-link
        >
        <router-link to="/Cartview" class="text-blue-900"> cart </router-link>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
