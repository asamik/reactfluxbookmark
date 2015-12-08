import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions = {
  receiveLinks(links) {
    console.log("3. In ServerActions.receiveLinks()", links);
    // Tell everyone about it.
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_LINKS,
      links
    });
  },
  deleteLink(id) {
    console.log("6. In ServerActions.deleteLink()", id);
    // Tell everyone about it.
    AppDispatcher.dispatch({
      actionType: ActionTypes.DELETE_LINK,
      id
    });
  },
  receiveOneLink(link) {
    console.log("receiveOneLink working @ServerActions")
    // Tell everyone about it.
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVE_ONE_LINK,
      link: link
    });
  }
};

export default ServerActions;
