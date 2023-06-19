import './_button.scss';
import { Link } from 'react-router-dom';
import google from '../../assets/google.svg';

interface signin {
    id: string;
    content: string;
    type: any;
    disabled: any
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

interface mailBtn {
    href: string;
    content: string;
}
interface resendBtn {
    type?: any;
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
        <button disabled={props.disabled} className='signin-btn' type={props.type} id={props.id}>
            {props.content}
        </button>
    )
}

export const GoogleBtn = (props: googleBtn) => {
    return (
        <button className='google-btn'> <img src={google} alt="google" /> <span>{props.content}</span></button>
    )
}

export const MailBtn = (props: mailBtn) => {
    return (
        <a className='email-btn' href={props.href} target='_blank'>{props.content}</a>
    )
}

export const ResendBtn = (props: resendBtn) => {
    return (
        <button className='resend-btn' type={props.type}>{props.content}</button>
    )
}