<template>
  <header class="book-header flex justify-center align-center">
    <div v-if="filterBy" class="container flex wrap column">
      <h1>Miss Books</h1>
      <form class="grid">
        <h3>Filter books</h3>
        <input v-model="filterBy.title" type="text" placeholder="By name" />
        <input
          v-model.number="filterBy.minPageRange"
          type="num"
          placeholder="By min page count"
        />
        <input
          v-model.number="filterBy.maxPageRange"
          type="num"
          placeholder="By max page count"
        />
      </form>
      <h3>Search for new books!</h3>
      <div class="relative">
        <input @input="onSearchBooks" v-model="searchBksInpt" type="text" />
        <ul class="auto-complete absolute" v-if="booksFound">
          <li
            @click="onAddBook(book)"
            v-for="(book, idx) in booksFoundToShow"
            :key="idx"
          >
            {{ book.volumeInfo.title }}
          </li>
        </ul>
      </div>
      <div
        v-if="isModal"
        @click="onAddBook('')"
        class="modal-screen-wrapper"
      ></div>
    </div>

    <div v-else class="container">
      <h1>Miss Books</h1>
      <router-link to="/book">
        go back
      </router-link>
    </div>
  </header>
</template>
<script>
export default {
  data() {
    return {
      searchBksInpt: "",
      booksFound: null
    };
  },
  computed: {
    booksFoundToShow() {
      return this.booksFound;
    },
    isModal() {
      return this.booksFound ? true : false;
    }
  },
  props: ["filterBy"],
  methods: {
    async onSearchBooks() {
      const booksFound = await this.$store.dispatch({
        type: "searchBooks",
        query: this.searchBksInpt
      });
      this.booksFound = booksFound;
    },
    async onAddBook(book) {
      if (!book) {
        this.booksFound = null;
        this.searchBksInpt = "";
        return;
      }
      await this.$store.dispatch({
        type: "addBook",
        book
      });
      this.booksFound = null;
      this.searchBksInpt = "";
    }
  }
};
</script>

<style lang="scss">
.auto-complete {
  z-index: 999;
  padding: 5px;
  background: #d2d0d0e8;
  li {
    list-style-type: disc;
    margin: 15px 0 15px 20px;
    cursor: pointer;
    width: fit-content;
    transition: 0.1s;
    &:hover {
      background-color: grey;
    }
  }
}
header {
  input {
    width: 200px;
  }
}
</style>