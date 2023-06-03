import { Link } from "react-router-dom";
import { SignBtn } from "../../components/button/button";
import { InputLabel, Passowrd } from "../../components/inputs/inputs";

const LoginForm = () => {
    return (
        <div>
            <InputLabel label='Email Address' placeholder="Email address here" />
            <label htmlFor="">Password</label>
            <Passowrd placeholder="Password (8 or more characters)" />
            <Link to='/passwordreset' className="forgot">Forgot Password?</Link>
            <SignBtn content='Log In' id='purple' type='submit' />
        </div>
    )
}

export default LoginForm;