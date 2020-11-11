<template>
  <section class="flex column">
    {{ txtToShow }}
    <div class="readmore" v-if="txt.length > 400" @click="toggleBtnTxt">
      {{ btnTxt }}
    </div>
  </section>
</template>

<script>
export default {
  props: ["txt"],
  data() {
    return {
      isReadMore: true
    };
  },
  computed: {
    btnTxt() {
      const btnTxt = this.isReadMore ? "Read More" : "Read Less";
      return btnTxt;
    },
    txtToShow() {
      let textToShow = this.txt;
      if (this.isReadMore && this.txt.length > 400)
        textToShow = textToShow.slice(0, 399) + "...";
      return textToShow;
    }
  },
  methods: {
    toggleBtnTxt() {
      this.isReadMore = !this.isReadMore;
    }
  }
};
</script>