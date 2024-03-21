import axios from "axios";

const axiosIntance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
});

export const api = {
    get(endpoint) {
        return axiosIntance.get(endpoint);
    },

    post(endpoint, body) {
        return axiosIntance.post(endpoint, body);
    },

    put(endpoint, body) {
        return axiosIntance.put(endpoint, body);
    },

    delete(endpoint) {
        return axiosIntance.delete(endpoint);
    },
};