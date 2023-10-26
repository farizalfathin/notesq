import React from "react";
import NoteItemActive from "./NoteItemActive";

function NotesListActive({ notesActive, onDelete, onArchive }) {
    return (
        <section id="section-notes-active">
            <div className="container-notes-active">
                <h2>Notes Active</h2>
                <div className="notes-list-active">
                    {notesActive.length > 0 ? 
                    (notesActive.map((noteActive) => (
                        <NoteItemActive
                        key={ noteActive.id }
                        id={ noteActive.id }
                        onDelete={ onDelete }
                        onArchive={ onArchive } {...noteActive} />
                    ))) : (
                        <h3>Tidak Ada Catatan Apapun</h3>
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default NotesListActive;