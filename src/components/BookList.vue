<template>
  <section class="book-list container">
    <h2>Our Books</h2>
    <div class="grid">
      <book-preview
        :key="idx"
        v-for="(book, idx) in booksToShow /* books  -> for infinite scroll*/"
        :book="book"
      />
    </div>
  </section>
</template>

<script>
import BookPreview from "@/components/BookPreview";

export default {
  props: ["booksToShow"],
  data() {
    return {
      books: null,
      allBooks: null,
      currPage: 20
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
    this.allBooks = [...this.booksToShow];
    this.books = [...this.booksToShow];
    if (this.books.length > 20) {
      this.books = this.books.splice(0, 20);
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    showMore() {
      if (this.books.length === this.booksToShow.length) {
        return;
      }
      this.currPage += 3;
      this.books = this.allBooks.slice(0, this.currPage);
    },
    handleScroll() {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        this.showMore();
      }
    }
  },

  components: {
    BookPreview
  }
};
</script>
