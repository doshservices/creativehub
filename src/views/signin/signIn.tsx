import './signin.scss'
import { FC } from 'react';
import { Link } from 'react-router-dom'
import SigninForm from './form';
import { GoogleBtn } from '../../components/button/button';

const SignIn: FC = () => {
    return (
        <section id='signin'>
            <p>
                Sign up as a Creatives
            </p>
            <h2>
                Hire professional sound engineers, producers, dancers etc to work on your next project
            </h2>
            <div className=''>
                <SigninForm />
                <p className="or">OR</p>
                <GoogleBtn content='Continue With Google' />
                <p className='account'>Already have an account? <Link to='/login'>Log In</Link></p>
            </div>
        </section>
    )
}

export default SignIn;