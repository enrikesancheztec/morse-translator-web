import axios from "axios";

export default axios.create({
  baseURL: "https://morse-translator-api.herokuapp.com/api",
  headers: {
    "Content-type": "application/json"
  }
});