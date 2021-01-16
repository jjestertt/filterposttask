import getApi from "../api/getapi";

const INITIALIZED_SUCCESS = "Posts/app/INITIALIZED_SUCCESS"
const SET_POSTS = "Posts/app/SET_POSTS"
const SET_USERS = "Posts/app/SET_USERS"

let initialState = {
    initialized: false,
    users: null,
    posts: null,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS: {
            return {
                ...state,
                initialized: true
            }
        }
        case SET_POSTS:{
            return {...state, posts: [...action.posts]}
        }
        case SET_USERS:{
            return {...state, users: [...action.users]}
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
export const setPosts = (posts) => {
    return{
        type: SET_POSTS, posts
    }
}
const setUsers = (users) => {
    return{
        type: SET_USERS, users
    }
}


export const initializeApp = () => async (dispatch) => {
    let responsePosts = await getApi.getPosts();
    dispatch(setPosts(responsePosts.data));
    let responseUsers = await getApi.getUsers();
    dispatch(setUsers(responseUsers.data));
    Promise.all([responsePosts, responseUsers]).then(dispatch(initializedSuccess()));
}

export default appReducer;