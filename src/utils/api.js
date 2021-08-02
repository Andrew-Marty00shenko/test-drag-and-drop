import * as axios from "axios";

axios.defaults.baseURL = "https://dapplets-hiring-api.herokuapp.com/api/v1/";

export const dappletsApi = {
    getDapplets(start, direction) {
        return axios.get(`/dapplets?limit=20&start=${start}&sort=[{"property":"title","direction":"${direction}"}]`)
            .then(({ data }) => data);
    },
    getFiltredDapplets(value) {
        return axios.get(`/dapplets?filter=[{"property":"title","value":"${value}"}]&sort=[{"property":"title","direction":"ASC"}]`)
            .then(({ data }) => data);
    },
    getTags() {
        return axios.get(`/tags`)
            .then(({ data }) => data);
    }
};