// SearchBar Component: SearchBar.jsx
import React from "react";

// Material UI:
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = (props) => {

    return (
        <>
            <div className="input-group">
                <input
                    type="search"
                    className="form-control pt-3 text-capitalize me-5 ps-0"
                    value={ props.searchValue }
                    onChange={ (e) => props.setSearchValue(e.target.value) }
                    placeholder="Enter City..."
                    aria-label="Search" />
                <div className="input-group-append me-0 mt-0">
                    <button
                        className="btn btn-outline-secondary d-flex align-items-center justify-content-center"
                        type="button"
                        onClick={ props.getWeatherInfo }>
                        <SearchIcon />
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchBar;