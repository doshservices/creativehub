import './inputs.scss';
import { eye } from 'react-icons-kit/feather/eye'
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { useState } from 'react';

interface attributes {
    type?: string;
    placeholder?: string;
}
interface values {
    type?: string;
    placeholder?: string;
    label: string;
    for?: string;
}

export const Passowrd = (props: attributes) => {

    const [type, setType] = useState<string>('password');
    const [icon, setIcon] = useState<HTMLOrSVGElement>(eyeOff);

    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };
    return (
        <div className="password">
            <input className='comp__input' type={type} placeholder={props.placeholder} />
            <span onClick={handleToggle}>
                <Icon icon={icon} size={18} />
            </span>
        </div>
    )
}

export const InputLabel = (props: values) => {
    return (
        <>
            <label className='comp__label' htmlFor={props.for}>{props.label}</label>
            <input className='comp__input' type="text" placeholder={props.placeholder} />
        </>
    )
}