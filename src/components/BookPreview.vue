<template >
  <router-link :to="bookDetailLink">
    <div
      class="book-preview relative flex  align-center column text-center cursor-pointer"
      :class="isAnimated ? 'animate__animated animate__bounce' : ''"
      @mouseenter="animate()"
    >
      <div
        class="pic"
        v-bind:style="{
          backgroundImage: 'url(' + book.volumeInfo.imageLinks.thumbnail + ')'
        }"
      />

      <h4>{{ book.volumeInfo.title }}</h4>
      <div
        class="onsale absolute flex justify-center align-center"
        v-if="this.book.volumeInfo.allowAnonLogging"
      >
        On Sale!
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  props: ["book"],
  data() {
    return {
      isAnimated: false,
      bookDetailLink: `/book/${this.book.id}`
    };
  },
  methods: {
    animate() {
      this.isAnimated = true;
      setTimeout(() => {
        this.isAnimated = false;
      }, 1000);
    }
  }
};
</script>
