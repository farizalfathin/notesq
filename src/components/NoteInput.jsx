import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            remaining: 50
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onTextChangeEventHandler = this.onTextChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }

    onTitleChangeEventHandler(e) {
        const title = e.target.value;

        if (title.length <= 50) {
            const remaining = 50 - title.length;
            this.setState({title, remaining})
        }
    }

    onTextChangeEventHandler(e) {
        this.setState(() => ({ body: e.target.value }))
    }

    onSubmitEventHandler(e) {
        e.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <section id="section-input-note">
                <div className="container-input-note">
                    <form onSubmit={ this.onSubmitEventHandler }>
                        <h2>Create Note</h2>
                        <p>Sisa Karakter: { this.state.remaining }</p>
                        <input
                        placeholder="Input your Title"
                        type="text"
                        value={ this.state.title }
                        onChange={ this.onTitleChangeEventHandler } />
                        <textarea
                        placeholder="Input your Text"
                        cols="30"
                        rows="10"
                        value={ this.state.body }
                        onChange={ this.onTextChangeEventHandler } ></textarea>
                        <input type="submit" value="Create" />
                    </form>
                </div>
            </section>
        )
    }
}

export default NoteInput;