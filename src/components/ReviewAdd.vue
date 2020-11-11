<template>
  <section class="review-add flex justify-center align-center column">
    <h2>Add a review</h2>
    <form
      class="flex justify-center align-center column"
      @submit.prevent="onSubmit"
    >
      <div class="flex justify-center review-col column">
        <div class=" review- flex align-center space-between">
          <label for="reviewerName">Your name</label>
          <input
            required
            id="reviewerName"
            v-model="input.name"
            ref="nameInput"
            type="text"
            name="name"
            placeholder="Full Name"
            autocomplete="off"
          />
        </div>

        <div class="flex align-center space-between">
          <label for="datepicker">Finished reading at:</label>
          <input id="datepicker" v-model="input.date" name="date" type="date" />
        </div>
        <div class="flex align-center space-between">
          <label>Rating</label>
          <div class="flex justify-center align-center">
            <font-awesome-icon @click="onRate('1')" icon="star" />
            <font-awesome-icon @click="onRate('2')" icon="star" />
            <font-awesome-icon @click="onRate('3')" icon="star" />
            <font-awesome-icon @click="onRate('4')" icon="star" />
            <font-awesome-icon @click="onRate('5')" icon="star" />
          </div>
        </div>
      </div>
      <textarea
        v-model="input.desc"
        name="desc"
        cols="35"
        rows="3"
        required
      ></textarea>
      <button>Submit</button>
    </form>
  </section>
</template>

<script>
import eventBus from "@/service/eventBusService";
export default {
  mounted() {
    this.$refs.nameInput.focus();
  },
  data() {
    return {
      input: {
        name: "",
        date: "",
        rating: "",
        desc: ""
      }
    };
  },
  methods: {
    onRate(star) {
      this.input.rating = star;
    },
    onSubmit() {
      const review = { ...this.input };
      this.$emit("addReview", review);
      eventBus.$emit("showMsg", "added review");
    }
  }
};
</script>
<style lang="scss" >
.review-add {
  margin: 60px 0;
  form {
    .review-col {
      padding: 30px 0;
    }
    textarea {
      width: 100%;
    }
    button {
      align-self: flex-end;
    }
  }
}
</style>