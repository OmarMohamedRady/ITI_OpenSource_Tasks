<template>
  <div class="mt-5">
    <h1>User Details</h1>
    <div class="card w-50 m-auto mt-5" >
  <div class="card-body">
    <h5 class="card-title">ID: {{ id }}</h5>
    <h5 class="card-title">First Name: {{ first_name }}</h5>
    <h5 class="card-title">Last Name: {{ last_name }}</h5>
    <h5 class="card-title">Gender: {{ gender }}</h5>
    <button  class="btn btn-primary" @click="back">Go to Users</button>
  </div>
</div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "userdetailsApp",
  data(){
    return{
        id:'',
        first_name:'',
        last_name:'',
        gender:''
    }
  },
  created(){
    this.getuserById()
  },
  methods:{
    getuserById(){
      this.id = this.$route.params.id;
      console.log(this.id)
      axios.get(` http://localhost:2000/users/${this.id}`)
      .then((res)=>{
        console.log(res.data)
        this.id = res.data.id
        this.first_name = res.data.first_name
        this.last_name = res.data.last_name
        this.gender = res.data.gender
      })
      .catch((err)=>console.log(err))
    },
    back(){
        this.$router.push('/users')
    }
  }
};
</script>

<style scoped></style>
