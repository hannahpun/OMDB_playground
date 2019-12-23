

const initialState = {
  favLists: {},
  name: 'hannah'
}

const reducer = (state = initialState, action) => {
  switch(action.type){
    case 'FAVLISTS_ADD':
      let obj = {};
      obj[action.id] = action.favList;

      return {
        ...state,
        favLists: {
          ...state.favLists,
          ...obj
        }
      }
    case 'FAVLISTS_REMOVE':
      let cloneFavLists = {...state.favLists};
      delete cloneFavLists[action.id];

      return {
        ...state,
        favLists: {
          ...cloneFavLists
        }
      }
    
    default: 
    return state;
  }
 
  
}

export default reducer;