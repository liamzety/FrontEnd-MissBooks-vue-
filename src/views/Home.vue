<template>
  <section class="home flex justify-center align-center column">
    <h1>Welcome... home</h1>
    <router-link to="/book"> Go to the shop </router-link>
  </section>
</template>
<style lang="scss">
.home {
  height: 100vh;
  a {
    padding: 10px;
    background: #d2d2d2;
    border-radius: 3px;
    margin-top: 100px;
    font-size: 20px;
  }
}
</style>