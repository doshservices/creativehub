import axios from "axios";
import { FC, useEffect } from 'react'
import { Link } from "react-router-dom";
import { SignBtn } from "../../components/button/button";
import { useFormik } from "formik";
import { loginSchema } from "../../components/schemas";
import { useNavigate } from 'react-router-dom';
import { InputLabel, Passowrd } from "../../components/inputs/inputs";
import { useDispatch, useSelector } from 'react-redux';
import { setAuthToken, setUser } from '../../state/slice/authSlice';
import { errorMessage, responseMessage } from "../../utils/toast";

const LoginForm: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authUser = useSelector((state: any) => state?.auth?.user)

    useEffect(() => {
        if (authUser) {
            navigate("/")
        }
    }, [authUser, navigate])

    const url = 'https://creativehub-endpoints-production.up.railway.app/api/users/login';

    const onSubmit = async (values: any, actions: any) => {
        try {
            const response = await axios.post(url, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            console.log(response);
            dispatch(setUser(response?.data?.data?.user))
            dispatch(setAuthToken(response?.data?.data?.token))
            responseMessage("Login Succesful")
            actions.resetForm();
            window.location.reload()
        } catch (error: any) {
            console.log(error);
            errorMessage(error.response.data.message)
        }
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            loginId: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit,
    });

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputLabel className={errors.loginId && touched.loginId ? "input-error" : ""}
                    id='loginId' onChange={handleChange} onBlur={handleBlur} value={values.loginId}
                    label='Email Address' placeholder="Email address here" name='loginId'
                />
                {errors.loginId && touched.loginId && <p className="error">{errors.loginId}</p>}

                <label style={{ display: 'block', margin: '1rem 0 .5rem 0' }} htmlFor="">Password</label>
                <Passowrd className={errors.password && touched.password ? "input-error" : ""}
                    id="password" onChange={handleChange} onBlur={handleBlur} value={values.password}
                    placeholder="Password (8 or more characters)" name="password"
                />
                {errors.password && touched.password && <p className="error">{errors.password}</p>}

                <Link to='/passwordreset' className="forgot">Forgot Password?</Link>
                <SignBtn disabled={isSubmitting} content={isSubmitting ? 'Loggin in...' : 'Log in'} className='purple' type='submit' />
            </form>
        </div>
    )
}

export default LoginForm;