import * as axios from "axios";

axios.defaults.baseURL = "https://dapplets-hiring-api.herokuapp.com/api/v1/";

export const dappletsApi = {
    getDapplets() {
        return axios.get(`/dapplets`)
            .then(({ data }) => {
                return data;
            });
    },
};