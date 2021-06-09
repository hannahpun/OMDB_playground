// import axios from 'axios';
// import Cookie from 'js-cookie';

export const favListsAdd = (id: any, favList: any) => {
    return {
        type: 'FAVLISTS_ADD',
        id,
        favList
    };
};

export const favListsRemove = (id: any) => {
    return {
        type: 'FAVLISTS_REMOVE',
        id
    };
};
