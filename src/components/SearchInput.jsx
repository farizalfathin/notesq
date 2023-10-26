import React from "react";
import { createRoot } from "react-dom/client";

function SearchInput({ value, onInput }) {
    return (
        <div className="input-wrap">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input placeholder="Search your notes" value={ value } onInput={ onInput } type="text" className="search-input"/>
        </div>
    )
}

export default SearchInput;