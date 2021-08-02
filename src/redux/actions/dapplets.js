import { dappletsApi } from "../../utils/api";

const Actions = {
    setDappletsData: (data) => ({
        type: "DAPPLETS:SET_DAPPLETS",
        payload: data
    }),
    setFiltredDappletsData: (data) => ({
        type: "DAPPLETS:SET_FILTRED_DAPPLETS",
        payload: data
    }),
    setDappletsDataOnDragEnd: (data) => ({
        type: "DAPPLETS:SET_DRAG_END",
        payload: data
    }),
    setDappletsError: () => ({
        type: "DAPPLETS:SET_ERROR",
        payload: "500 Internal Server Error"
    }),
    setDappletsDirection: (direction) => ({
        type: "DAPPLETS:SET_DIRECTION",
        payload: direction
    }),
    fetchDappletsData: (start, direction) => (dispatch) => {
        dappletsApi.getDapplets(start, direction)
            .then(({ data }) => {
                dispatch(Actions.setDappletsData(data));
            })
            .catch(() => {
                dispatch(Actions.setDappletsError());
            });
    },
    fetchFiltredDappletsData: (value) => (dispatch) => {
        dappletsApi.getFiltredDapplets(value)
            .then(({ data }) => {
                const filterData = data.filter(v => {
                    return v.title.toLowerCase().indexOf(value) !== -1;
                });
                dispatch(Actions.setFiltredDappletsData(filterData));
            });
    }
};

export default Actions;