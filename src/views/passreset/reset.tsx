import './reset.scss'
import logo from './Group.svg';
import { InputLabel } from '../../components/inputs/inputs';
import { SignBtn } from '../../components/button/button';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { errorMessage, responseMessage } from '../../utils/toast';
import { useNavigate } from 'react-router-dom';

const Reset = () => {

    const url = 'https://creativehub-endpoints-production.up.railway.app/api/users/forgot-password';
    const navigate = useNavigate()

    const onSubmit = async (values: any) => {
        try {
            const response = await axios.post(url, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            responseMessage(`We have sent reset instructions to ${values?.email}`)
            navigate('/new-password')
            return response;
        } catch (error: any) {
            errorMessage(error?.response?.data?.message)
        }
    }

    const resetPassFeilds = Yup.object({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required'),
    });

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: resetPassFeilds,
        onSubmit
    });

    return (
        <section id="reset__password">
            <img src={logo} alt="" />
            <h2>Forgot your Password?</h2>
            <p>Please fill in your e-mail below and we will send you reset password instructions</p>
            <form onSubmit={handleSubmit}>
                <InputLabel onChange={handleChange} onBlur={handleBlur} value={values.email} id='email' className={errors.email && touched.email ? "input-error" : ""} name='email' label='Email' placeholder='Email address here' />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                <SignBtn disabled={isSubmitting} className='purple' content={isSubmitting ? 'Reseting Password...' : 'Reset Password'} type='submit' />
            </form>
            {/* <p id='reset__password__resend'>Didn’t get reset instructions? <span>Resend Instructions</span></p> */}
        </section>
    )
}

export default Reset;