const initialState = {
    favLists: {},
    name: 'hannah'
};

const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'FAVLISTS_ADD':
            let obj = {};
            // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            obj[action.id] = action.favList;

            return {
                ...state,
                favLists: {
                    ...state.favLists,
                    ...obj
                }
            };
        case 'FAVLISTS_REMOVE':
            let cloneFavLists = { ...state.favLists };
            // @ts-expect-error ts-migrate(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
            delete cloneFavLists[action.id];

            return {
                ...state,
                favLists: {
                    ...cloneFavLists
                }
            };

        default:
            return state;
    }
};

export default reducer;
