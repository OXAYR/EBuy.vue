<template>
  <div>
    <nav
      class="bg-stoneBlack py-5 shadow-md fixed top-0 left-0 right-0 font-serif"
    >
      <div class="flex justify-between items-center px-10">
        <div class="flex col-span-7">
          <router-link to="/">
            <p class="font-semibold text-xl text-seaGreen">EBuy</p>
          </router-link>
        </div>
        <div class="flex">
          <router-link
            to="/login"
            class="text-seaGreen bg-stoneBlack border border-dashed border-seaGreen hover:bg-seaGreen hover:text-stoneBlack rounded p-3 ml-4"
          >
            Be An Admin
          </router-link>
          <router-link to="/cartView" class="text-seaGreen mt-4 ml-8">
            Cart({{ counter }})
          </router-link>
        </div>
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
