import SearchIcon from "../../assets/images/search.svg";
import ArrowDownIcon from "../../assets/images/arrow-down.svg";

const SearchField = () => {
    return <div className="main__search-field">
        <div className="search-input">
            <input placeholder="Search" />
            <img src={SearchIcon} alt="search" />
        </div>
        <div className="search-selectors">
            <div className="search-selectors__date">
                <input />
                <img src={ArrowDownIcon} alt="arrow-down" />
            </div>
            <div className="search-selectors__descending">
                <input />
                <img src={ArrowDownIcon} alt="arrow-down" />
            </div>
        </div>
    </div>
}

export default SearchField;