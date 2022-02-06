import React, { useState } from "react";

function AddColumn(props) {
    const [ShowNewColumnButton, setShowNewColumnButton] = useState(true);
    const [value, setValue] = useState("")

    function handleInputComplete() {
        setShowNewColumnButton(true);
        addNewColumn(value);
        setValue("");
    }

    function addNewColumn(title) {

    }

    return (
        <div>
            {
                showNewColumnButton ?
                    <button onClick={() => setShowNewColumnButton(false)}>New Column</button>:
                    <input type="text" value={value} onChange={e => setValue(e.target.value)} onBlur={handleInputComplete}/>
            }

        </div>

    )
}

export default AddColumn;
