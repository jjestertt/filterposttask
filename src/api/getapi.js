import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/";
let request = (parameter) =>{
    return axios.get(url + parameter).then(response => response);
}

const getapi = {
    getPosts: () => request("posts/"),
    getUsers: () => request("users/"),
}

export default getapi;