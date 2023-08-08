import './reset.scss'
import logo from './Group.svg';
import { InputLabel } from '../../components/inputs/inputs';
import { SignBtn } from '../../components/button/button';

const Reset = () => {
    return (
        <section id="reset__password">
            <img src={logo} alt="" />
            <h2>Forgot your Password?</h2>
            <p>Please fill in your e-mail below and we will send you reset password instructions</p>
            <form action="">
                <InputLabel onChange="" onBlur="" value="" id='' className='' name='' label='Email' placeholder='Email address here' />
                <SignBtn disabled="" className='purple' content='Reset Password' type='submit' />
            </form>
            <p id='reset__password__resend'>Didn’t get reset instructions? <span>Resend Instructions</span></p>
        </section>
    )
}

export default Reset;