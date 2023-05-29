<template>
  <div>
    <div id="formContainer" class="w-50 m-auto mt-5">
      <div class="fw-bold text-center text-info my-2"><p>Registration</p></div>
      <form @submit.prevent="createUser">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">First Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="first_name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Last Name</label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="last_name"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Gender</label>
          <select class="form-select" aria-label="Default select example" v-model="gender">
            <option  value="male" selected>Male</option>
            <option value="female">Female</option>
        
          </select>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "createusersApp",
  data() {
    return {
      first_name: "",
      last_name: "",
      gender: "",
    };
  },

  methods: {
    createUser() {
      axios
        .post(` http://localhost:2000/users`, {
          first_name: this.first_name,
          last_name: this.last_name,
          gender: this.gender,
        })
        .then(() => {
            this.back()
        })
        .catch((err) => console.log(err));
    },
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped></style>
