<template>
  <div>
    <button class="topbtn" @click="scrollIntoView" v-if="isTopBtn">
      <span>TOP</span>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      innerWidth: window.innerWidth,
      isTopBtn: false
    };
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },

  methods: {
    scrollIntoView() {
      const elApp = document.querySelector("#app");
      elApp.scrollIntoView({ block: "start", behavior: "smooth" });
    },
    handleScroll(ev) {
      if (ev.target.scrollingElement.scrollTop > 100) this.isTopBtn = true;
      else this.isTopBtn = false;
    }
  }
};
</script>