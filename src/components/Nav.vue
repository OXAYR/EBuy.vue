<template>
  <div>
    <nav
      class="bg-stoneBlack py-5 shadow-md fixed top-0 left-0 right-0 font-serif"
    >
      <div class="flex justify-between items-center px-10">
        <div class="flex col-span-7">
          <router-link to="/home">
            <p class="font-semibold text-xl text-seaGreen">EBuy</p>
          </router-link>
          <div>
            <router-link
              to="/login"
              class="text-seaGreen bg-stoneBlack border border-dashed border-seaGreen rounded p-3 start-6"
            >
              Be An Admin
            </router-link>
            <router-link to="/cartView" class="text-seaGreen">
              Cart({{ counter }})
            </router-link>
          </div>
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
