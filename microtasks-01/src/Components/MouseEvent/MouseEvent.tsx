import {useState} from "react";

export const MouseEvent = () => {
    const [value, setValue] = useState(1)

    return (
        <div>
            <h3>{value}</h3>
            <button onClick={() => setValue(value+1)}>+1</button>
            <button onClick={() => setValue(0)}>0</button>
        </div>
    )
}