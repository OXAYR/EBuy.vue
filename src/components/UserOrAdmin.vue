<template>
  <div class="flex justify-center">
    <div class="mt-32 p-8 card">
      <p class="text-lg font-semibold mb-4 text-center">
        What do you want to be?
      </p>
      <div class="flex justify-between items-center">
        <router-link
          to="/signup"
          class="block p-4 text-stoneBlack bg-white rounded hover:bg-seaGreen transition-colors"
          @click="setRole('user')"
        >
          <p class="font-bold">User</p>
          <p class="text-xs font-semibold text-left mt-2">
            Clicking on this will allow you to add to cart products u want
          </p>
        </router-link>
        <div class="h-6 w-px bg-gray-300"></div>
        <router-link
          to="/signup"
          class="block p-4 text-stoneBlack bg-white rounded hover:bg-stoneBlack hover:text-white transition-colors"
          @click="setRole('admin')"
        >
          <p class="font-bold">Admin</p>
          <p class="text-xs font-semibold text-left mt-2">
            Clicking on this will allow you to create, delete, or edit products
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "UserOrAdmin",
  data() {
    return {
      role: null,
    };
  },
  methods: {
    ...mapActions({ setRole: "setRole" }),
  },
};
</script>

<style scoped>
/* Add your styling here */
</style>
