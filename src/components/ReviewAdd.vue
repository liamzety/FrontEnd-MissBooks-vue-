<template>
  <section class="review-add container flex justify-center align-center col">
    <h2>Add a review</h2>
    <form
      class="flex space-between align-center col w100"
      @submit.prevent="onSubmit"
    >
      <div class="flex review-details wrap w100">
        <div class="label-input-container flex col">
          <label for="reviewerName">Your name</label>
          <input
            required
            id="reviewerName"
            v-model="input.name"
            ref="nameInput"
            type="text"
            name="name"
            autocomplete="off"
          />
        </div>
        <div class="label-input-container flex col">
          <label for="">Rate:</label>
          <stars @onRate="onRate"></stars>
        </div>
        <div class="label-input-container flex col">
          <label for="datepicker">Finished reading at:</label>
          <input id="datepicker" v-model="input.date" name="date" type="date" />
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
import Stars from "@/components/Stars";

export default {
  components: { Stars },
  mounted() {
    this.$refs.nameInput.focus();
  },
  data() {
    return {
      input: {
        name: "",
        date: "",
        rating: "",
        desc: "",
      },
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
    },
  },
};
</script>
<style lang="scss" >
.review-add {
  padding-top: 50px;
  padding-bottom: 50px;
  h2 {
    margin-bottom: 25px;
  }

  form {
    .review-details {
      justify-content: space-evenly;
      margin-bottom: 20px;
      align-items: baseline;
      div {
        * {
          margin-bottom: 10px;
        }
      }
      .rating {
        cursor: pointer;
        unicode-bidi: bidi-override;
        direction: rtl;
        > span:hover:before,
        > span:hover ~ span:before {
          content: "\2605";
          position: absolute;
        }
      }
    }
    textarea {
      width: 100%;
      resize: none;
      height: 100px;
    }
    button {
      margin-top: 20px;
      align-self: flex-end;
    }
  }
  @media (max-width: 400px) {
    text-align: center;
  }
}
</style>