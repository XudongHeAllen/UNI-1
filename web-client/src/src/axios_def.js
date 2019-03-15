import axios from "axios";

const instance = axios.create({
    baseURL: 'http://ec2-99-79-39-110.ca-central-1.compute.amazonaws.com:8000'
});

export default instance;