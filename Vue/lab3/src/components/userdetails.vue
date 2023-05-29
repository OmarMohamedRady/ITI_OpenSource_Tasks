<template>
  <div class="mt-5">
    <h1>User Details</h1>
    <div class="card w-50 m-auto mt-5">
      <div class="card-body">
        <h5 class="card-title" v-txt="'primary'">ID: {{ user.id }}</h5>
        <h5 class="card-title" v-txt="'primary'">First Name: {{ user.first_name }}</h5>
        <h5 class="card-title" v-txt="'primary'">Last Name: {{ user.last_name }}</h5>
        <h5 class="card-title" v-txt="'primary'">Gender: {{ user.gender }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

export default {
  name: "userdetailsApp",
  setup() {
    const route = useRoute();
    const userId = ref(null);
    const user = reactive({
      id: "",
      first_name: "",
      last_name: "",
      gender: "",
    });

    onMounted(async () => {
      userId.value = route.params.id;
      axios
        .get(`http://localhost:2000/users/${userId.value}`)
        .then((response) => {
          const userData = response.data;
          user.id = userData.id;
          user.first_name = userData.first_name;
          user.last_name = userData.last_name;
          user.gender = userData.gender;
        })
        .catch((error) => {
          console.error(error);
        });
    });

    watch(userId, () => {
      axios
        .get(`http://localhost:2000/users/${userId.value}`)
        .then((response) => {
          const userData = response.data;
          user.id = userData.id;
          user.first_name = userData.first_name;
          user.last_name = userData.last_name;
          user.gender = userData.gender;
        })
        .catch((error) => {
          console.error(error);
        });
    });

   
    return { userId, user};
  },
};
</script>

<style scoped></style>
