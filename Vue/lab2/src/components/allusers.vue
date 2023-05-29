<template>
  <div class="mt-5">
    <h1>All users </h1>
    <table class="table w-50 m-auto">
  <thead>
    <tr>
      <th scope="col ">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Actions</th>
      <!-- <th scope="col">Gender</th> -->
    </tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
      <th scope="row">{{ user.id }}</th>
      <td>{{ user.first_name }}</td>
      <td>{{user.last_name}}</td>
      <!-- <td>{{ user.gender }}</td> -->
      <td>
        <router-link  :to="`/users/${user.id}`" class="ms-4 btn btn-info">Details</router-link>
        <router-link  :to="`/users/update/${user.id}`" class="ms-4 btn btn-success">Update</router-link>
        <button class="ms-4 btn  btn-danger" @click="deleteUser(user.id)">delete</button>
      </td>
    </tr>
   
  </tbody>
</table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "allusersApp",
  created() {
    this.getallusers();
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getallusers() {
      axios
        .get("  http://localhost:2000/users")
        .then((res) => {
          console.log(res.data);
          this.users = res.data
        })
        .catch((err) => console.log(err));
    },
    deleteUser(id){
        axios.delete(`  http://localhost:2000/users/${id}`)
        .then((res)=>{
            console.log(res.data)
            this.getallusers()
        })
        .catch((err)=>console.log(err))
    }
  },
};
</script>

<style scoped></style>
