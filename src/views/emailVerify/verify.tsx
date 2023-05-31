import './verify.scss'
import logo from './Group.svg';
import { Link } from 'react-router-dom'
import { MailBtn, ResendBtn } from '../../components/button/button';

const Verify = () => {
    return (
        <section id="verify__email">
            <img src={logo} alt="" />
            <h2>Verify your email to proceed</h2>
            <p>We just sent an email to the address: shai.hulud@gmail.com</p>
            <p>Please check your email and click on the link provided to verify your address.</p>
            <MailBtn content='Open my email' href='' />
            <ResendBtn content='Resend Verification Email' />
            <Link id='verify__email__change' to='/'>Change Email Address</Link>
        </section>
    )
}
export default Verify;