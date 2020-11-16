import Vue from "vue";
import VueRouter from "vue-router";
import BookApp from "@/views/BookApp";
import BookDetails from "@/views/BookDetails";

Vue.use(VueRouter);

const routes = [
  {
    path: "/book/:id",
    component: BookDetails
  },
  {
    path: "/",
    component: BookApp
  }

];

const router = new VueRouter({
  routes
});

export default router;
