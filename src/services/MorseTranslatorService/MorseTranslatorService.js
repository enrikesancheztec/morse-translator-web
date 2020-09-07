import http from "../http-common";

const postMessage = data => {
    return http.post("/morse-code", data);
};

export default {
    postMessage
};