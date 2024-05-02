import './newpassword.scss';
import logo from '../passreset/Group.svg';
import { FC } from "react";
import { InputLabel, Passowrd } from "../../components/inputs/inputs";
import { SignBtn } from "../../components/button/button";
import axios from 'axios';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { errorMessage, responseMessage } from '../../utils/toast';
import { useNavigate } from 'react-router-dom';

const NewPassword: FC = () => {
    const passwordRules = /.*/;
    const url = 'https://creativehub-endpoints-production.up.railway.app/api/users/reset-password';

    const navigate = useNavigate()

    const onSubmit = async (values: any) => {
        try {
            const response = await axios.post(url, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            // response
            responseMessage(`Password reset succesful`)
            navigate('/signin')
        } catch (error: any) {
            // console.log(error);
            errorMessage(error?.response?.data?.message)
        }
    }

    const resetPassFeilds = yup.object().shape({
        otp: yup.string().min(6).max(6)
            .required('Please in put OTP that was sent to your email'),
        newPassword: yup.string().min(5).matches(passwordRules, { message: "Password must be a min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" }).required("Required"),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref("newPassword"),], "Passwords must match")
            .required("Required"),
    });

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            otp: "",
            newPassword: '',
            confirmPassword: ''
        },
        validationSchema: resetPassFeilds,
        onSubmit
    });

    return (
        <section id="new__password">
            <img src={logo} alt="password" />
            <h2>Enter New Password</h2>
            <p>You have requested a password reset, enter your new password below</p>
            <form onSubmit={handleSubmit}>
                <InputLabel
                    placeholder='Enter OTP'
                    label='OTP'
                    name='otp'
                    id='otp'
                    type='number'
                    value={values.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.otp && touched.otp ? "input-error" : ""}
                />
                {errors.otp && touched.otp && <p className="error">{errors.otp}</p>}
                <label htmlFor="otp">New Password</label>
                <Passowrd
                    name='newPassword'
                    id='newPassword'
                    value={values.newPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.newPassword && touched.newPassword ? "input-error" : ""}
                    placeholder='Password (5 or more characters)'
                />
                {errors.newPassword && touched.newPassword && <p className="error">{errors.newPassword}</p>}
                <label htmlFor="">Confirm New Password</label>
                <Passowrd
                    name='confirmPassword'
                    id='confirmPassword'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
                    placeholder='Password (5 or more characters)'
                />
                {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                <SignBtn disabled={isSubmitting} className='purple' content={isSubmitting ? 'Reseting Password...' : 'Reset Password'} type='submit' />
            </form>
            <p id='new__password__resend'>Didn’t get reset instructions? <span>Resend Instructions</span></p>
        </section>
    )
}

export default NewPassword;