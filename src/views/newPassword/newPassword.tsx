import './newpassword.scss';
import logo from '../passreset/Group.svg';
import { FC } from "react";
import { Passowrd } from "../../components/inputs/inputs";
import { SignBtn } from "../../components/button/button";

const NewPassword: FC = () => {
    return (
        <section id="new__password">
            <img src={logo} alt="password" />
            <h2>Enter New Password</h2>
            <p>You have requested a password reset, enter your new password below</p>
            <form onSubmit={(e: any) => e.preventDefault()}>
                <label htmlFor="">New Password</label>
                <Passowrd onChange="" onBlur="" value="" id='' className='' name='' placeholder='Password (8 or more characters)' />
                <label htmlFor="">Confirm New Password</label>
                <Passowrd onChange="" onBlur="" value="" id='' className='' name='' placeholder='Password (8 or more characters)' />
                <SignBtn disabled="" className='purple' content='Reset Password' type='submit' />
            </form>
            <p id='new__password__resend'>Didn’t get reset instructions? <span>Resend Instructions</span></p>
        </section>
    )
}

export default NewPassword;