import axios from "@/axios.js";

export default {
    fetchDataListItems({ commit }) {
        return new Promise((resolve, reject) => {
            axios
                .get("/api/v1/users")
                .then(response => {
                    commit("SET_PRODUCTS", response.data);
                    resolve(response);
                    // console.log(response.data.data.data)
                })
                .catch(error => {
                    reject(error);
                });
        });
    }
};