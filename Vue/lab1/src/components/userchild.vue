<template>
  <div>
    <div class="fw-bold text-center text-info my-2">
      <p>users table</p>
    </div>

    <div id="tableContainer" class="m-auto w-50">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-for="user in allUsers" :key="user.name">
          <tr v-if="user.role === 'user' ">
           
              <td>{{ user.name }}</td>
              <td>{{ user.age }}</td>
              <td>{{ user.role }}</td>
              <td><button class="btn btn-danger" @click="$emit('deletingUser', index)">Delete</button></td>
           
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "userChild",
  
  inject: ["allUsers"],
};
</script>

<style scoped></style>
