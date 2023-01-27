import './Avatar.css';

export default function Avatar(props) {

    const rndColor = (name) => {
        return `rgb(${(name.charCodeAt(0) * 8) % 255},${(name.charCodeAt(1) * 8) % 255},${((name.charCodeAt(0) + name.charCodeAt(1)) * 8) % 255})`;
    };

    return (
        <div onClick={props.onClick} className='avatar' style={{ backgroundColor: rndColor(props.name) }}>
            {props.name}
        </div>
    );
}

