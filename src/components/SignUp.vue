<template>
  <div class="card mt-32 p-9 font-serif max-w-md mx-auto">
    <h2 class="text-3xl font-medium text-center">Sign Up</h2>
    <input
      type="text"
      v-model="form.username"
      placeholder="Username"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <input
      type="email"
      v-model="form.email"
      placeholder="Email"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <input
      type="password"
      v-model="form.password"
      placeholder="Password"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <input
      type="password"
      placeholder="Confirm Password"
      v-model="form.confirmPassword"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <p v-if="error.length > 0" class="text-red-500 text-sm">{{ error }}</p>
    <button
      class="mt-4 px-44 py-2 bg-blue-200 hover:bg-blue-400 rounded-full"
      @click="toValidate(form)"
    >
      Register
    </button>
  </div>
</template>

<script>
import router from "@/router";
export default {
  name: "SignUp",
  props: {
    msg: String,
  },

  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
      error: [],
    };
  },
  computed: {},
  methods: {
    toStore(obj) {
      if (
        obj.email !== "" &&
        obj.password !== "" &&
        obj.username !== "" &&
        obj.confirmPassword !== ""
      ) {
        localStorage.setItem("Username", obj.username);
        localStorage.setItem("Password", obj.password);
        localStorage.setItem("Email", obj.email);
        router.push("/");
      }
    },
    toValidate: function (obj) {
      this.error = [];
      const usernamePattern =
        /^(?=.*[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\/\-='|"'])\S+$/;
      const passwordPattern =
        /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~\\/\-='|"']).{8,}$/;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (obj.username !== "" && !usernamePattern.test(obj.username)) {
        this.error.push("Invalid Name");
      } else if (obj.password !== "" && !passwordPattern.test(obj.password)) {
        this.error.push("Invalid Password");
      } else if (obj.password !== obj.confirmPassword) {
        this.error.push("Password Does not match");
      } else if (obj.email !== "" && !emailPattern.test(obj.email)) {
        this.error.push("Invalid Email");
      } else {
        this.toStore(obj);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
