<template>
  <div class="review">
    <header class="flex justify-center col">
    <p>Name: {{ review.name || "BooksReader" }}</p>
    <p v-if="review.rating">Rating: {{ review.rating }}</p>
    <p v-if="review.date">Finished Reading: {{ review.date }}</p>
    </header>
    <div class="review-container flex justify-center align-center col">
    <p>Review: {{ review.desc }}</p>
    </div >
  </div>
</template>
<script>
export default {
  props: ["review"]
};
</script>

<style lang="scss" scoped >
.review {
  background-color: #d3d3d388;
  border-radius: 5px;
}
.review-container {
  padding: 15px;
}
header {
  border-bottom: 2px solid rgb(80, 80, 80);
      padding: 8px;
}
</style>