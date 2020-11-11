<template>
  <div class="loader">
    <img :src="loader" alt="" />
  </div>
</template>

<script>
import loader from "@/assets/img/load.gif";

export default {
  computed: {
    loader() {
      return loader;
    }
  }
};
</script>
<style lang="scss">
.loader {
  height: 100%;
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  img {
    width: 150px;
  }
}
</style>
