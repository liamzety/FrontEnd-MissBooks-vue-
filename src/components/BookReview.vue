<template>
  <div class="review flex justify-center align-center column">
    <p>Name: {{ review.name || "BooksReader" }}</p>
    <p v-if="review.rating">Rating: {{ review.rating }}</p>
    <p>Review: {{ review.desc }}</p>
    <p v-if="review.date">Finished Reading: {{ review.date }}</p>
  </div>
</template>
<script>
export default {
  props: ["review"]
};
</script>

<style lang="scss" >
.review {
  background-color: #d3d3d388;
  padding: 15px;
}
</style>