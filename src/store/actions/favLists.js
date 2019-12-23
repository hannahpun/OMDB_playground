// import axios from 'axios';
// import Cookie from 'js-cookie';


export const favListsAdd = (id, favList) => {
  return {
    type: "FAVLISTS_ADD",
    id,
    favList
  }
}


export const favListsRemove = (id) => {
  return {
    type: "FAVLISTS_REMOVE",
    id
  }
}

