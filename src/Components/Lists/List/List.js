import React from "react";
import placeholder from "../../../assets/img/300x445.png";
import "./List.scss";

import { connect } from "react-redux";
import * as actions from "store/actions/favLists";

import { Link } from "react-router-dom";

const List = (props) => {
  // Toggle Fav List
  let button = null;
  if (Object.keys(props.favLists).length > 0 && props.favLists[props.id]) {
    button = (
      <button
        className="btn border-secondary"
        onClick={() => props.onfavListsRemove(props.id)}
      >
        Remove
      </button>
    );
  } else {
    button = (
      <button
        className="btn btn-secondary"
        onClick={() =>
          props.onfavListsAdd(props.id, {
            Title: props.title,
            Year: props.year,
            imdbID: props.id,
            Type: props.type,
            Poster: props.img,
          })
        }
      >
        Add
      </button>
    );
  }

  return (
    <div className="list">
      <Link to={`/content/${props.id}`}>
        <figure>
          <img src={props.img === "N/A" ? placeholder : props.img} alt="" />
          <figcaption>{props.title}</figcaption>
        </figure>
      </Link>
      {button}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    favLists: state.favLists,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onfavListsAdd: (id, favList) => dispatch(actions.favListsAdd(id, favList)),
    onfavListsRemove: (id) => dispatch(actions.favListsRemove(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
