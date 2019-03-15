import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3000'//the default server url. need to know mongoDB data structure as well.
});

export default instance;