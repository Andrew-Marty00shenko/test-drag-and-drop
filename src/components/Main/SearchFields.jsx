import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import SearchIcon from "../../assets/images/search.svg";
import ArrowDownIcon from "../../assets/images/arrow-down.svg";
import useDebouce from "../../utils/useDebounce";

const SearchField = ({ dappletsActions }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");
    const [optionValue, setOptionValue] = useState("Descending")

    const debouncedInputValue = useDebouce(inputValue, 1000);

    const handleChangeInput = (e) => {
        const value = e.target.value;
        setInputValue(value);
    };

    const handleChangeOption = (e) => {
        const value = e.target.value;
        setOptionValue(value);
        dispatch(dappletsActions.setDappletsDirection(value === "Descending" ? "DESC" : "ASC"));
    };

    useEffect(() => {
        if (debouncedInputValue) {
            dispatch(dappletsActions.fetchFiltredDappletsData(debouncedInputValue))
        }

        dispatch(dappletsActions.setDappletsDirection(optionValue === "Descending" ? "DESC" : "ASC"));
        //eslint-disable-next-line
    }, [debouncedInputValue]);

    return <div className="main__search-field">
        <div className="search-input">
            <input
                value={inputValue}
                onChange={handleChangeInput}
                placeholder="Search"
            />
            <img src={SearchIcon} alt="search" />
        </div>
        <div className="search-selectors">
            <div className="search-selectors__date">
                <input />
                <img src={ArrowDownIcon} alt="arrow-down" />
            </div>
            <div className="search-selectors__direction">
                <select value={optionValue} onChange={handleChangeOption}>
                    <option value="Descending">Descending</option>
                    <option value="Ascending">Ascending</option>
                </select>
                <img src={ArrowDownIcon} alt="arrow-down" />
            </div>
        </div>
    </div>
}

export default SearchField;