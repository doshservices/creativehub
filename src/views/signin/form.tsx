import { FC, useState } from "react";
import { eye } from 'react-icons-kit/feather/eye'
import { Icon } from "react-icons-kit";
import { eyeOff } from "react-icons-kit/feather/eyeOff";
import { SignBtn } from "../../components/button/button";

const SigninForm: FC = () => {

    const [type, setType] = useState<string>('password');
    const [icon, setIcon] = useState<HTMLOrSVGElement>(eyeOff);

    const handleToggle = () => {
        if (type === "password") {
            setIcon(eye);
            setType("text");
        } else {
            setIcon(eyeOff);
            setType("password");
        }
    };

    return (
        <form action="">
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="First name here" />

            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Last name here" />

            <label htmlFor="">Email</label>
            <input type="text" placeholder="Email address here" />

            <label htmlFor="">Password</label>
            <div className="password">
                <input type={type} placeholder="Password (8 or more characters)" />
                <span onClick={handleToggle}>
                    <Icon icon={icon} size={18} />
                </span>
            </div>
            <SignBtn content='Create Account' id='purple' type='submit' />
        </form>
    )
}

export default SigninForm;