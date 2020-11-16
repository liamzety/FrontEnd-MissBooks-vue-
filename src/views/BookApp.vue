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
        maxPageRange: "",
      },
    };
  },
  async created() {
    this.loadBooks();
  },

  components: {
    BookList,
    BookHeader,
    Loader,
  },
  computed: {
    booksToShow() {
      let books = this.$store.getters.booksToShow;
      const { title, minPageRange, maxPageRange } = this.filterBy;
      if (title) {
        books = books.filter(book => book.volumeInfo.title.toLowerCase().includes(title.toLowerCase()) )
      }
      if (minPageRange) {
        books = books.filter(
          (book) => book.volumeInfo.pageCount > minPageRange
        );
      }
      if (maxPageRange) {
        books = books.filter(
          (book) => book.volumeInfo.pageCount < maxPageRange
        );
      }
      return books;
    },
  },

  methods: {
    async loadBooks() {
      this.$store.dispatch({ type: "loadBooks" });
    },
  },
};
</script>
