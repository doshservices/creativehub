import './_button.scss';
import { Link } from 'react-router-dom';
import google from '../../assets/google.svg';

interface signin {
    id: string;
    content: string;
    type: any;
}

interface link {
    id: string;
    to: string;
    content: string;
}

interface googleBtn {
    id?: string;
    content: string;
}

export const LinkBtn = (props: link) => {
    return (
        <Link className='signin-link' id={props.id} to={props.to}>
            {props.content}
        </Link>
    )
}

export const SignBtn = (props: signin) => {
    return (
        <button className='signin-btn' type={props.type} id={props.id}>
            {props.content}
        </button>
    )
}

export const GoogleBtn = (props: googleBtn) => {
    return (
        <button className='google-btn'> <img src={google} alt="google" /> <span>{props.content}</span></button>
    )
}