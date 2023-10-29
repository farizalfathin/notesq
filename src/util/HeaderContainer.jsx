import React from "react";
import Logo from "../components/Logo";
import SearchInput from "../components/SearchInput";

function HeaderContainer({ value, onInput }) {

    return (
        <header>
            <nav>
                <Logo />
                <SearchInput value={ value } onInput={ onInput }/>
            </nav>
        </header>
    )
}

export default HeaderContainer;