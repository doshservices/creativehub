import './_button.scss';
import { Link } from 'react-router-dom'

interface signin {
    id: string;
    to: string;
    content: string;
}

export const SignInBtn = (props: signin) => {
    return (
        <Link className='signin-btn' id={props.id} to={props.to}>
            {props.content}
        </Link>
    )
}