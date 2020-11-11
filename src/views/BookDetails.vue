<template>
  <section v-if="book" class="book-details">
    <book-header />

    <div
      class="book-details-container container flex justify-center align-center column text-center"
    >
      <div class="book-info-container flex align-center justify-center ">
        <div class="img-container relative">
          <img v-bind:src="book.volumeInfo.imageLinks.thumbnail" />
          <div
            v-if="book.volumeInfo.allowAnonLogging"
            class="onsale absolute flex justify-center align-center"
          >
            On Sale!
          </div>
        </div>
        <div class="book-info flex align-center column">
          <h2>{{ book.volumeInfo.title }}</h2>
          <p class="sub-text">{{ book.volumeInfo.subtitle }}</p>
          <p>Authors: {{ book.volumeInfo.authors }}</p>
          <p>Publisher: {{ book.volumeInfo.publisher }}</p>
          <p>
            Published date: {{ book.volumeInfo.publishedDate }}
            <span :style="spanColor">{{ publishedEval }}</span>
          </p>
          <p>{{ timeReading }}</p>
        </div>
      </div>
      <hr />
      <h2>Description</h2>
      <long-txt :txt="book.volumeInfo.description" />
    </div>
    <review-add @addReview="addReview" />

    <div class="container" v-if="book.reviews">
      <h2>Reviews({{ book.reviews.length }})</h2>
      <div class="review-list ">
        <book-review
          v-for="review in book.reviews"
          :review="review"
          :key="review.id"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { bookService } from "@/service/bookService";
import BookHeader from "@/components/BookHeader";
import ReviewAdd from "@/components/ReviewAdd";
import BookReview from "@/components/BookReview";
import LongTxt from "@/components/LongTxt";

export default {
  created() {
    this.book = bookService.getById(this.$route.params.id);
  },
  data() {
    return {
      book: null
    };
  },
  components: {
    BookHeader,
    ReviewAdd,
    BookReview,
    LongTxt
  },
  methods: {
    async addReview(review) {
      this.book = await this.$store.dispatch({
        type: "addReview",
        bookId: this.book.id,
        review
      });
    }
  },
  computed: {
    timeReading() {
      const pageCount = parseInt(this.book.volumeInfo.pageCount);
      if (pageCount < 100) return "Light Reading";
      if (pageCount > 200 && pageCount < 500) return "Meduim time reading";
      else return "Long Reading";
    },
    publishedEval() {
      const publishedDate = parseInt(this.book.volumeInfo.publishedDate);
      const currYear = new Date().getFullYear();
      if (currYear - publishedDate <= 15) return "New!";
      else return "Old";
    },
    spanColor() {
      return `color: ${this.publishedEval === "Old" ? "#a7a4a4" : "#27c527"}`;
    },
    reviews() {
      return this.book.reviews;
    }
  }
};
</script>