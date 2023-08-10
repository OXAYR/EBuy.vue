<template>
  <div>
    <nav
      class="bg-stoneBlack py-5 shadow-md fixed top-0 left-0 right-0 font-serif"
    >
      <div class="flex justify-between items-center px-10">
        <div class="flex">
          <router-link to="/home">
            <p class="font-semibold text-xl text-seaGreen">EBuy</p>
          </router-link>
          <router-link to="/productlistview" class="ml-6 text-seaGreen">
            Products
          </router-link>
        </div>
        <router-link to="/cartView" class="text-seaGreen">
          Cart({{ counter }})
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "NavBar",

  computed: {
    ...mapGetters({ counter: "getCartLength" }),
  },
};
</script>
