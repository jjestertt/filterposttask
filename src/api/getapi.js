import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
});

const getapi = {
    getPosts: () => instance("posts/"),
    getUsers: () => instance("users/"),
};

export default getapi;