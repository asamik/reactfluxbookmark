import API from "../API";

let LinkActions = {
  saveBookmark(newBookmark) {
    API.saveBookmark(newBookmark);
  },
  deleteBookmark(idToBeDeleted) {
    API.deleteBookmark(idToBeDeleted);
  },
  getAllBookmarks() {
    API.fetchAllBookmarks();
  }
};

export default LinkActions;
