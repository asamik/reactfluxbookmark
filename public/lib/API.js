import {get, post, ajax} from "jquery";

import ServerActions from "./actions/ServerActions";

let API = {
  saveBookmark(newBookmark) {
    post("/api/links", newBookmark)
      .done(data => ServerActions.receiveOneLink(data));
  },
  deleteBookmark(idToBeDeleted) {
    console.log("API.js", Number(idToBeDeleted))
    post("/api/links/delete", {id: idToBeDeleted})
      .done(data => 
      {ServerActions.deleteLink(data)
  })
  },
  fetchAllBookmarks() {
    console.log("2. In the API.fetchAllBookmarks()")
    get("/api/links").done(data => ServerActions.receiveLinks(data.links));
  }

};

export default API;
