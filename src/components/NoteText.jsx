import React from "react";
import { showFormattedDate } from "../util/index.js";

function NoteText({ title, dateTime, text }) {
    return (
        <div className="note-text">
            <h3>{ title }</h3>
            <h6>{ showFormattedDate(dateTime) }</h6>
            <p>{ text }</p>
        </div>
    )
}

export default NoteText;