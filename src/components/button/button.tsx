import './_button.scss';
import { Link } from 'react-router-dom'

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