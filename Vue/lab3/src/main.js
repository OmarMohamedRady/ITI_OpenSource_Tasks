import { createApp } from "vue";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";
import allusersApp from "./components/allusers.vue";
import userdetailsApp from "./components/userdetails.vue";

import errorApp from "./components/error.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const routes = [
  {
    path: "/",
    component: allusersApp,
    alias: "/users",
    // children:{
    //     path:
    // }
  },
  {
    path: "/users/:id",
    component: userdetailsApp,
  },

  {
    path: "/:NotFound(.*)*",
    component: errorApp,
    meta: { hideNavbar: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

let app = createApp(App);

app.directive("txt",{
    mounted(el,binding){
        if(binding.value === 'primary'){
            el.style.color = 'blue'
        }else if(binding.value === 'warning'){
            el.style.color = 'yellow'
        }else if(binding.value === 'danger'){
            el.style.color = 'red'
        }else{
            el.style.color = 'purple'
        }
    }
})


app.use(router)
app.mount("#app");
