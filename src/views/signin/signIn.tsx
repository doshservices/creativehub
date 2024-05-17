import './signin.scss'
import { FC } from 'react';
// import { Link } from 'react-router-dom'
import SigninForm from './form';
// import { GoogleBtn } from '../../components/button/button';

const SignIn: FC = () => {

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const role: string = JSON.parse(sessionStorage.getItem("user")!);

    return (
        <section id='signin'>
            <p>
                {`Sign up as a ${role}`}
            </p>
            <h2>
                {
                    role === 'Client' ?
                        'Get listed as a professional sound engineer, producer, dancer etc and get hired for work'
                        :
                        'Hire professional sound engineers, producers, dancers etc to work on your next project'
                }
            </h2>
            <div>
                <SigninForm />
                {/* <p className="or">OR</p>
                <GoogleBtn content='Continue With Google' />
                <p className='account'>Already have an account? <Link to='/signin'>Log In</Link></p> */}
            </div>
        </section>
    )
}

export default SignIn;