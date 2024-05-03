import './_button.scss';
import google from '../../assets/google.svg';

interface signin {
    className: string;
    content: string;
    type: any;
    disabled: any
}

interface link {
    className: string;
    to: string;
    content: string;
    onClick: () => void;
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
    onClick?: () => void
}

export const LinkBtn = (props: link) => {
    return (
        <a className={`signin-link ${props.className}`} onClick={props.onClick}>
            {props.content}
        </a>
    )
}

export const SignBtn = (props: signin) => {
    return (
        <button disabled={props.disabled} className={`signin-btn ${props.className}`} type={props.type}>
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
        <a className='email-btn' href={props.href} target='_self'>{props.content}</a>
    )
}

export const ResendBtn = (props: resendBtn) => {
    return (
        <button onClick={props.onClick} className='resend-btn' type={props.type}>{props.content}</button>
    )
}