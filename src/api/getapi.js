import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/";

const getapi = {
    getPosts: () =>{
        return axios.get(url + "posts/").then(response => response);
    },
    getUsers: () =>{
        return axios.get(url + "users/").then(response => response);
    }
}

export default getapi;