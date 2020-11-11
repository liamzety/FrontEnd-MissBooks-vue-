<template>
  <div>
    <book-header :filterBy="filterBy" />
    <book-list v-if="booksToShow" :booksToShow="booksToShow" />
    <loader v-else></loader>
  </div>
</template>

<script>
import BookList from "@/components/BookList";
import BookHeader from "@/components/BookHeader";
import Loader from "@/components/Loader";

export default {
  data() {
    return {
      filterBy: {
        title: "",
        minPageRange: "",
        maxPageRange: ""
      }
    };
  },
  async created() {
    this.loadBooks();
  },

  components: {
    BookList,
    BookHeader,
    Loader
  },
  computed: {
    booksToShow() {
      let booksToShow = this.$store.getters.booksToShow;
      const { title, minPageRange, maxPageRange } = this.filterBy;
      if (title) {
        booksToShow = booksToShow.filter(book =>
          book.volumeInfo.title.toLowerCase().includes(title.toLowerCase())
        );
      }
      if (minPageRange) {
        booksToShow = booksToShow.filter(
          book => book.volumeInfo.pageCount > minPageRange
        );
      }
      if (maxPageRange) {
        booksToShow = booksToShow.filter(
          book => book.volumeInfo.pageCount < maxPageRange
        );
      }
      return booksToShow;
    }
  },

  methods: {
    async loadBooks() {
      this.$store.dispatch({ type: "loadBooks" });
    }
  }
};
</script>
