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
      v-model="confirmPassword"
      class="mt-4 p-2 border border-gray-300 rounded-md w-full"
    />
    <p v-if="error.length > 0" class="text-red text-sm">{{ error }}</p>
    <button
      class="mt-4 px-40 py-2 text-white bg-stoneBlack hover:text-seaGreen rounded-full"
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
      },
      confirmPassword: "",
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
        this.confirmPassword !== ""
      ) {
        localStorage.setItem(`${obj.email}`, JSON.stringify(obj));
        router.push("/login");
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
        this.error.push("add number in the name and remove empty spaces");
      } else if (obj.password !== "" && !passwordPattern.test(obj.password)) {
        this.error.push(
          "Password must start with the capital letter and must contain number & special character"
        );
      } else if (obj.password !== this.confirmPassword) {
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
