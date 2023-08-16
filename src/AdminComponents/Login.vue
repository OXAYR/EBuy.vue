<template>
  <div class="card mt-32 Login px-8 py-11 max-w-xs mx-auto">
    <h1 class="text-center text-3xl font-medium font-serif">Sign In</h1>
    <input
      type="email"
      placeholder="Email"
      v-model="formLogin.email"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <input
      type="password"
      placeholder="Password"
      v-model="formLogin.password"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <p v-if="error.length" class="text-red text-sm">{{ error }}</p>
    <button
      class="mt-4 px-28 py-2 bg-stoneBlack text-white hover:text-seaGreen rounded-full"
      @click="checkValidation(formLogin)"
    >
      <p class="text-black font-serif text-center">Login</p>
    </button>

    <router-link to="/userOrAdmin" class="block mt-2">
      <button
        class="Register pl-24 pr-28 py-2 bg-white hover:bg-seaGreen rounded-full"
      >
        <p class="text-black font-serif ml-2">SignUp</p>
      </button>
    </router-link>
  </div>
</template>
<script>
import router from "@/router";
import store from "@/store";
export default {
  name: "Login",
  props: {
    msg: String,
  },
  data() {
    return {
      validCredential: false,
      formLogin: {
        email: "",
        password: "",
      },
      error: [],
    };
  },
  methods: {
    toValidate(obj) {
      const storage = localStorage.getItem(`${obj.email}`);
      if (JSON.parse(storage).password == obj.password) {
        store.state.isAuthenticated = true;
        if (store.state.role === "admin") router.push("/admin");
        else {
          router.push("/");
        }
      } else {
        this.error.push("Incorrent Credentials");
      }
    },
    checkValidation: function (obj) {
      this.error = [];
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~/\\\-='|"])[a-zA-Z0-9!@#$%^&*()_+{}[\]:;<>,.?~/\\\-='|"]{8,}$/;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (
        !emailPattern.test(obj.email) &&
        !passwordPattern.test(obj.password)
      ) {
        this.error.push("Invalid Email or Password");
      } else {
        this.toValidate(obj);
      }
    },
  },
};
</script>

<style scoped>
fieldset {
  margin-bottom: 2rem;
}
.Button {
  margin-top: 2rem;
}
</style>
