import React from "react";
import NoteText from "./NoteText";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItemActive({ id, onDelete, onArchive, title, createdAt, body }) {
    return (
        <div className="note-item-active">
            <NoteText title={ title } dateTime={ createdAt } text={ body } />
            <div className="grup-button">
                <DeleteButton id={ id } onDelete={ onDelete } />
                <ArchiveButton id={ id } onArchive={ onArchive }/>
            </div>
        </div>
    )
}

export default NoteItemActive;