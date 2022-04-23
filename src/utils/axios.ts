import axios from "axios";

const request = axios.create({ baseURL: " https://api-rest.elice.io/org" });

export default request;
