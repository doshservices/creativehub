import './login.scss';
import LoginForm from './form';
import { Link } from 'react-router-dom';
import { GoogleBtn } from '../../components/button/button';

const Login = () => {
    return (
        <section id="login">
            <h2>Log In to your account</h2>
            <LoginForm />
            <p className="or">OR</p>
            <GoogleBtn content="Continue with Google" />
            <p className="account">Don’t have an account? <Link to='/signup'>Sign up</Link></p>
        </section>
    )
}

export default Login;