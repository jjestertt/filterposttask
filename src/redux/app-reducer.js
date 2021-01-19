import getApi from "../api/getapi";

const INITIALIZED_SUCCESS = "Posts/app/INITIALIZED_SUCCESS"
const SET_DATA = "Posts/app/SET_DATA"

let initialState = {
    initialized: false,
    posts: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        case SET_DATA:{
            let posts= action.posts.map(post => {
               let user = action.users.find(user => post.userId === user.id);
               return {...post, name: user.username}
            });

            return {...state, posts: [...posts]}
        }
        default: {
            return state;
        }
    }
}

const initializedSuccess = () => {
    return {
        type: INITIALIZED_SUCCESS,
    }
}
const setData = (posts, users) => {
    return{
        type: SET_DATA,
        posts, users
    }
}


export const initializeApp = () => async (dispatch) => {
    let responsePosts = await getApi.getPosts();
    let responseUsers = await getApi.getUsers();
    dispatch(setData(responsePosts.data, responseUsers.data));
    Promise.all([responsePosts, responseUsers]).then(dispatch(initializedSuccess()));
}

export default appReducer;