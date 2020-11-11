<template>
  <div id="app">
    <user-msg />
    <div class="bg-wrapper"></div>
    <div class="bg"></div>
    <router-view />
    <scroll-up-btn />
  </div>
</template>
<script>
import ScrollUpBtn from "@/components/ScrollUpBtn";
import userMsg from "@/components/userMsg";
export default {
  components: {
    ScrollUpBtn,
    userMsg
  }
};
</script>