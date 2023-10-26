import React from "react";
import { createRoot } from "react-dom/client";
import HeaderContainer from "./utils/HeaderContainer";
import './styles/style.css';
import MainContainer from "./utils/MainContainer";
import FooterContainer from "./utils/FooterContainer";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchContent: ''
        }

        this.onSearchInputEventHandler = this.onSearchInputEventHandler.bind(this);
    }

    onSearchInputEventHandler(e) {
        this.setState({ searchContent: e.target.value })
    }

    render() {
        return (
            <>
                <HeaderContainer value={ this.state.searchContent } onInput={ this.onSearchInputEventHandler }/>
                <MainContainer searchContent={ this.state.searchContent }/>
                <FooterContainer />
            </>
        )
    }
}

const root = createRoot(document.getElementById('root'))
root.render(<App />);