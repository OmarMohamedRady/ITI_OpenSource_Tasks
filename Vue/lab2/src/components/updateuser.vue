<template>
  <div class="w-50 m-auto">
    <h1>Update User</h1>
    <form @submit.prevent="updateUser">
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">First Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="user.first_name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" v-model="user.last_name">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Gender</label>
    <select class="form-select" aria-label="Default select example" v-model="user.gender">
            <option  value="male" selected>Male</option>
            <option value="female">Female</option>
        
          </select>
  </div>
 
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
   name: "updateusersApp",  
  data() {
    return {
      user: {},
      errors: [],
      id:''
    };
  },
  created() {
    this.getUser();
  },
  methods: {
    getUser() {
     this.id = this.$route.params.id;
     console.log(this.id)
      axios.get(` http://localhost:2000/users/${this.id}`)
        .then(response => {
          this.user = response.data;
          console.log(this.user)
        })
        .catch(error => {
          console.error(error);
        });
    },
    updateUser() {
      axios.put(` http://localhost:2000/users/${this.id}`, this.user)
        .then(response => {
          console.log(response.data);
          this.back()
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });
    },
    back(){
        this.$router.push('/users')
    }
  },
};
</script>

<style scoped></style>