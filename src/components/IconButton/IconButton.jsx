import { useState } from "react";

export default function IconButton(props) {
    const [clicked, setClicked] = useState(false);
    return (
        <button onClick={() => setClicked(!clicked)} style={{ color: clicked ? props.color : 'white' }}>
            {props.children}
        </button>
    );
}

