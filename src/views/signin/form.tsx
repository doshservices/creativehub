import '../../components/errors.scss';
import axios from 'axios';
import { FC, useEffect } from "react";
import { SignBtn } from "../../components/button/button";
import { useFormik } from "formik";
import { basicSchema } from "../../components/schemas";
import { InputLabel, Passowrd } from "../../components/inputs/inputs";
import { GenderSelect, RoleSelect, Select } from "../../components/inputs/select";
import { errorMessage, responseMessage } from '../../utils/toast';
import { setAuthToken, setUser } from '../../state/slice/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SigninForm: FC = () => {

    const signUpRole: string = JSON.parse(sessionStorage.getItem("user") as string)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authUser = useSelector((state: any) => state?.auth?.user)

    useEffect(() => {
        if (authUser) {
            navigate("/")
        }
    }, [])

    const url = 'https://creativehub-endpoints-production.up.railway.app/api/users';

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
            responseMessage("Account Succesfully Created")
            actions.resetForm();
            window.location.reload()
        } catch (error: any) {
            console.log(error);
            errorMessage(error.response.data.message)
        }
    };

    const { values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            country: "",
            phoneNumber: "",
            gender: "",
            role: signUpRole === "Client" ? "USER" : "CREATIVES",
        },
        validationSchema: basicSchema,
        onSubmit
    });

    return (
        <form onSubmit={handleSubmit}>

            <InputLabel name='firstName' className={errors.firstName && touched.firstName ? "input-error" : ""}
                id='firstName' onChange={handleChange} onBlur={handleBlur} value={values.firstName} type="text" placeholder="First name here" label='First Name' />
            {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}

            <InputLabel name='lastName' className={errors.lastName && touched.lastName ? "input-error" : ""} id='lastName' onChange={handleChange} onBlur={handleBlur} value={values.lastName} type="text" placeholder="Last name here" label='Last Name' />
            {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}

            <InputLabel name='email' className={errors.email && touched.email ? "input-error" : ""} id='email' onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" placeholder="Email address here" label='Email' />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <InputLabel name='phoneNumber' className={errors.phoneNumber && touched.phoneNumber ? "input-error" : ""} id='phoneNumber' onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber} type="number" placeholder="Phone Number here" label='Phone Number' />
            {errors.phoneNumber && touched.phoneNumber && <p className="error">{errors.phoneNumber}</p>}

            <Select className={errors.country && touched.country ? "input-error" : ""} onChange={handleChange} onBlur={handleBlur} value={values.country} />
            {errors.country && touched.country && <p className="error">{errors.country}</p>}

            <GenderSelect className={errors.gender && touched.gender ? "input-error" : ""} onChange={handleChange} onBlur={handleBlur} value={values.gender} />
            {errors.gender && touched.gender && <p className="error">{errors.gender}</p>}

            <RoleSelect className={errors.role && touched.role ? "input-error" : ""} onChange={handleChange} onBlur={handleBlur} value={values.role} />
            {errors.role && touched.role && <p className="error">{errors.role}</p>}

            <label style={{ display: 'block', margin: '1rem 0 .5rem 0' }} htmlFor="password">Password</label>
            <Passowrd name='password' className={errors.password && touched.password ? "input-error" : ""} id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='Password (8 or more characters)' />
            {errors.password && touched.password && <p className="error">{errors.password}</p>}

            <SignBtn disabled={isSubmitting} content={isSubmitting ? 'Creating account...' : 'Create Account'} className='purple' type='submit' />
        </form>
    )
}

export default SigninForm;