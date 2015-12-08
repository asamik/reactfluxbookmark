import React from "react";
import LinkActions from "../actions/LinkActions";

class Link extends React.Component {
  deleteBookmark(e) {
    e.preventDefault();
    let idToBeDeleted = e.target.id;
console.log("e.target.id", e.target.id)
    LinkActions.deleteBookmark(e.target.id);
  }

  render() {
    let {title, url, id, safe} = this.props.link;

    return (
      <div className="link">
        <a href={url}
           style={ { color: (safe ? 'green' : 'black') } }
          >{title}</a> &nbsp;
          <a id={id} onClick={this.deleteBookmark.bind(this)}>Delete</a>
      </div>
    );
  }
}

export default Link;
