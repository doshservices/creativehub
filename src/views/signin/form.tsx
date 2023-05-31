import { FC } from "react";
import { SignBtn } from "../../components/button/button";
import { InputLabel, Passowrd } from "../../components/inputs/inputs";
import { Select } from "../../components/inputs/select";

const SigninForm: FC = () => {

    return (
        <form>
            <InputLabel type="text" placeholder="First name here" label='First Name' />
            <InputLabel type="text" placeholder="Last name here" label='Last Name' />
            <InputLabel type="email" placeholder="Email address here" label='Email' />
            <Select />
            <label htmlFor="">Password</label>
            <Passowrd placeholder='Password (8 or more characters)' />
            <SignBtn content='Create Account' id='purple' type='submit' />
        </form>
    )
}

export default SigninForm;