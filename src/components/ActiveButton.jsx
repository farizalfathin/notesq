import React from "react";

function ActiveButton({ id, onActive }) {
    return <button className="active-button" onClick={() => onActive(id)}>Active</button>
}

export default ActiveButton;