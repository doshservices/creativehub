import './verify.scss'
import logo from './Group.svg';
import { MailBtn, ResendBtn } from '../../components/button/button';
import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearVerificationMail, setUser } from '../../state/slice/authSlice';
import { errorMessage, responseMessage } from '../../utils/toast';
import { RootState } from '../../state/rootReducer';

const Verify = () => {

    const dispatch = useDispatch()

    const authToken = window.location.search.slice(7);
    const authMail = useSelector((state: RootState) => state?.auth?.verificationMail)
    const url = 'https://creativehub-endpoints-production.up.railway.app/api/users';
    const tokenUrl = 'https://creativehub-endpoints-production.up.railway.app/api/users/send-token';

    const verifyMail = async (): Promise<void> => {

        try {
            const response: AxiosResponse = await axios.patch(url, {
                token: authToken
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response?.data?.message === 'user Email has been verified' && response?.status === 200 || 201) {
                dispatch(setUser(response?.data?.data?.user))
                dispatch(clearVerificationMail())
            }
        } catch (error: any) {
            errorMessage('Could not Verify Email. Please try again')
        }
    };

    const resendVerification = async (): Promise<void> => {

        try {
            const response: AxiosResponse = await axios.post(tokenUrl, {
                email: `${authMail}`
            }, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response);
            responseMessage(`A verificationn mail has been sent to ${authMail}`)
        } catch (error: any) {
            console.log(error);

            errorMessage('Could not Verify Email. Please try again')
        }
    };

    useEffect(() => {
        verifyMail();
    }, [])

    return (
        <section id="verify__email">
            <img src={logo} alt="" />
            <h2>Verify your email to proceed</h2>
            <p>We just sent an email to the address: {`${authMail}`}</p>
            <p>Please check your email and click on the link provided to verify your address.</p>
            <MailBtn content='Open my email' href='https://mail.google.com' />
            <ResendBtn content='Resend Verification Email' onClick={resendVerification} />
            {/* <Link id='verify__email__change' to='/'>Change Email Address</Link> */}
        </section>
    )
}

export default Verify;