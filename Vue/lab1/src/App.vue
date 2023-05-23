<template >

  
  <formParent />
  

</template>

<script>
import formParent from "./components/parentform.vue";

export default {
  name: "App",
  components: {
    formParent,
  
  },
  data() {
    return {
      flag : true,
      darkModeStye:{
        backgrounColor : "black"
      },
      basicModeStyle:{
        backgrounColor : "white"
      }
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
