<template>
  <fieldset class="rating flex justify-center align-center">
    <input type="radio" id="star5" name="rating" value="5" /><label
      @click="onRate('5')"
      for="star5"
      title="Rocks!"
      >5 stars</label
    >
    <input type="radio" id="star4" name="rating" value="4" /><label
      @click="onRate('4')"
      for="star4"
      title="Pretty good"
      >4 stars</label
    >
    <input type="radio" id="star3" name="rating" value="3" /><label
      @click="onRate('3')"
      for="star3"
      title="Meh"
      >3 stars</label
    >
    <input type="radio" id="star2" name="rating" value="2" /><label
      @click="onRate('2')"
      for="star2"
      title="Kinda bad"
      >2 stars</label
    >
    <input type="radio" id="star1" name="rating" value="1" /><label
      @click="onRate('1')"
      for="star1"
      title="Sucks big time"
      >1 star</label
    >
  </fieldset>
</template>

<script>
export default {
  methods: {
    onRate(val) {
      this.$emit("onRate", val);
    },
  },
};
</script>

<style scoped>
.rating {
  float: left;
  border: none;
}

.rating:not(:checked) > input {
  position: absolute;
  clip: rect(0, 0, 0, 0);
}

.rating:not(:checked) > label {
  float: right;
  width: 1em;
  padding: 0 0.1em;
  overflow: hidden;
  white-space: nowrap;
  cursor: pointer;
  font-size: 200%;
  line-height: 1.2;
  color: #ddd;
  text-shadow: 1px 1px #bbb, 2px 2px #666, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
}

.rating:not(:checked) > label:before {
  content: "★ ";
}

.rating > input:checked ~ label {
  color: #f70;
  text-shadow: 1px 1px #c60, 2px 2px #940, 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
}

.rating:not(:checked) > label:hover,
.rating:not(:checked) > label:hover ~ label {
  color: gold;
  text-shadow: 1px 1px goldenrod, 2px 2px #b57340,
    0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
}

.rating > input:checked + label:hover,
.rating > input:checked + label:hover ~ label,
.rating > input:checked ~ label:hover,
.rating > input:checked ~ label:hover ~ label,
.rating > label:hover ~ input:checked ~ label {
  color: #ea0;
  text-shadow: 1px 1px goldenrod, 2px 2px #b57340,
    0.1em 0.1em 0.2em rgba(0, 0, 0, 0.5);
}

.rating > label:active {
  position: relative;
  top: 2px;
  left: 2px;
}
</style>