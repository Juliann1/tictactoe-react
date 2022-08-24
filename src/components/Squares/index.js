import React from "react";
import "./index.css";

function Squares({ value, handleClick, square }) {
    return (
        <button
            className="square"
            data-square={square}
            value={value}
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

export default Squares;
