import axios from "axios";

export default {
  // Get books from Google API
  getBooks: function(q) {
    return axios.get("/api/google", { params: { q: "title:" + q } });
  },
  // Get all saved books
  getSavedBooks: function() {
    return axios.get("/api/books");
  },
  // Delete saved book w given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Save a book to db
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};