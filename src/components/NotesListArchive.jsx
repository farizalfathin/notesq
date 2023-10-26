import React from "react";
import NoteItemArchive from "./NoteItemArchive";

function NotesListArchive({ notesArchive, onDelete, onActive }) {
    return (
        <section id="section-notes-archive">
            <div className="container-notes-archive">
                <h2>Notes Archive</h2>
                <div className="notes-list-archive">
                    {notesArchive.length > 0 ?
                    (notesArchive.map((noteArchive) => (
                        <NoteItemArchive 
                        key={ noteArchive.id }
                        id={ noteArchive.id }
                        onDelete={ onDelete }
                        onActive={ onActive } {...noteArchive } />
                    ))) : (
                        <h3>Tidak Ada Catatan Apapun</h3>
                    )
                    }
                </div>
            </div>
        </section>
    )
}

export default NotesListArchive;