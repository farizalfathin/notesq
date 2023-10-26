import React from "react";
import NoteText from "./NoteText";
import DeleteButton from "./DeleteButton";
import ActiveButton from "./ActiveButton";

function NoteItemArchive({ id, onDelete, onActive, title, createdAt, body }) {
    return (
        <div className="note-item-archive">
            <NoteText title={ title } dateTime={ createdAt } text={ body } />
            <div className="grup-button">
                <DeleteButton id={ id } onDelete={ onDelete } />
                <ActiveButton id={ id } onActive={ onActive }/>
            </div>
        </div>
    )
}

export default NoteItemArchive;