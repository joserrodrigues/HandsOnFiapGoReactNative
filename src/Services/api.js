import axios from "axios";

const api = axios.create({
    baseURL: "https://app.fakejson.com",
});

export default api;