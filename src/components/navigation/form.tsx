import { FC } from "react";
import { SignBtn } from "../button/button";

export const Form: FC = () => {
    return (
        <form>
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="email" placeholder="Email" />
            <label htmlFor="">
                <input type="checkbox" />
                I have read and accept the privacy policy.
            </label>
            <SignBtn id='purple' content='SIGN UP' type='submit' />
        </form>
    )
}