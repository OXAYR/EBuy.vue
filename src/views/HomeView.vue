<template>
  <div>
    <Nav />
    <router-view class="mt-32" />
    <Home />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Nav from "@/components/Nav.vue";
import TaskView from "@/views/PorductListView.vue";
export default {
  name: "HomeView",
  components: {
    Home,
    Nav,
    TaskView,
  },
};
</script>
