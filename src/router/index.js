import Vue from "vue";
import VueRouter from "vue-router";
import BookApp from "@/views/BookApp";
import BookDetails from "@/views/BookDetails";
import Home from "@/views/Home";

Vue.use(VueRouter);

const routes = [
  {
    path: "/book/:id",
    component: BookDetails
  },
  {
    path: "/book",
    name: "BookApp",
    component: BookApp
  },
  {
    path: "/",
    component: Home
  },
];

const router = new VueRouter({
  routes
});

export default router;
