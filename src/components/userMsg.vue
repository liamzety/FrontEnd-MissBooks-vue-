<template>
  <section class="user-msg" v-show="msg">
    {{ msg }}
  </section>
</template>

<script>
import eventBus from "@/service/eventBusService.js";

export default {
  data() {
    return {
      msg: ""
    };
  },
  created() {
    eventBus.$on("showMsg", msg => {
      this.msg = msg;
      setTimeout(() => {
        this.msg = "";
      }, 2000);
    });
  },
  destroyed() {
    eventBus.$off("showMsg");
  }
};
</script>
<style lang="scss">
.user-msg {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 15px;
  right: 15px;
  padding: 25px;
  border-radius: 5px;
  background-color: rgba(#151515, 0.5);
  border: 1px solid rgb(167, 166, 166);
  color: #d3d3d3;
}
</style>