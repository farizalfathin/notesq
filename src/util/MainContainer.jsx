import React from "react";
import NoteInput from "../components/NoteInput";
import NotesListActive from "../components/NotesListActive";
import NotesListArchive from "../components/NotesListArchive";
import { getInitialData } from "./index.js"

class MainContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getInitialData(),
            notesActive: getInitialData().filter(note => note.archived === false),
            notesArchive: getInitialData().filter(note => note.archived === true)
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onActiveHandler = this.onActiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    }

    onDeleteHandler(id) {
        const deleteNotes = this.state.notes.filter(note => note.id !== id);
        this.setState({ 
            notes: deleteNotes,
            notesActive: deleteNotes.filter(note => note.archived === false),
            notesArchive: deleteNotes.filter(note => note.archived === true)
        });
    }

    onActiveHandler(id) {
        const moveToActive = this.state.notes.map(note => note.id === id? {...note, archived: false} : note);
        this.setState({
            notes: moveToActive,
            notesActive: moveToActive.filter(note => note.archived === false),
            notesArchive: moveToActive.filter(note => note.archived === true)
        });
    }

    onArchiveHandler(id) {
        const moveToArchive = this.state.notes.map(note => note.id === id? {...note, archived: true} : note);
        this.setState({
            notes: moveToArchive,
            notesActive: moveToArchive.filter(note => note.archived === false),
            notesArchive: moveToArchive.filter(note => note.archived === true)
        });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes, {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString
                    }
                ],
                notesActive: [
                    ...prevState.notesActive, {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString()
                    }
                ]
            }
        })
    }

    render() {
        const FilteredNotesActive = this.state.notesActive.filter((note) => {
            return note.title.toLowerCase().includes(this.props.searchContent.toLowerCase())
        })
        const FilteredNotesArchive = this.state.notesArchive.filter((note) => {
            return note.title.toLowerCase().includes(this.props.searchContent.toLowerCase())
        })

        const contentNotesActive = this.props.searchContent.length > 0 ? FilteredNotesActive : this.state.notesActive;
        const contentNotesArchive = this.props.searchContent.length > 0 ? FilteredNotesArchive : this.state.notesArchive;

        return (
            <main>
                <NoteInput addNote={ this.onAddNoteHandler } />
                <NotesListActive
                notesActive={ contentNotesActive }
                onDelete={ this.onDeleteHandler }
                onArchive={ this.onArchiveHandler } />
                <NotesListArchive
                notesArchive={ contentNotesArchive }
                onDelete={ this.onDeleteHandler }
                onActive={ this.onActiveHandler } />
            </main>
        )
    }
}

export default MainContainer;