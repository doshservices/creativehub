import '../../components/errors.scss';
import axios from 'axios';
import { FC } from "react";
import { toast } from 'react-toastify';
import { SignBtn } from "../../components/button/button";
import { useFormik } from "formik";
import { basicSchema } from "../../components/schemas";
import { useNavigate } from 'react-router-dom';
import { InputLabel, Passowrd } from "../../components/inputs/inputs";
import { GenderSelect, RoleSelect, Select } from "../../components/inputs/select";

const SigninForm: FC = () => {

    const navigate = useNavigate()

    const handleSaveAuth = (id: string, token: string, authname: string) => {
        //save token id and first name to storage
        localStorage.setItem("c/id", JSON.stringify(id));
        localStorage.setItem("c/tk", JSON.stringify(token));
        localStorage.setItem("c/usn", JSON.stringify(authname))

        // get token and id from storage
        const authToken = localStorage.getItem("c/id");
        const ID = localStorage.getItem("c/tk");

        // navigate if auth token and id is not empty
        if (authToken && ID !== "") {
            navigate("/");
        }
        return;
    };

    const url = 'https://creativehub-endpoints-production.up.railway.app/api/users';

    const onSubmit = async (values: object, errors: any) => {
        console.log(values);

        if (JSON.stringify(errors) === "{}") {

            await axios
                .post(url, { values })
                .then((res: any) => {
                    console.log(res)
                    toast.success("Account Succesfully Created", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    const authToken = res.data.data.token;
                    const authID = res.data.data.userDetails._id;
                    const authName = res.data.data.userDetails.firstName;
                    handleSaveAuth(authID, authToken, authName);
                })
                .catch((err: any) => {
                    console.log(err);
                    toast.error(err.response.data.message, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })
        } else {
            return errors;
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
            role: "",
        },
        validationSchema: basicSchema,
        onSubmit
    });

    onSubmit(values, errors)

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

            <SignBtn disabled={isSubmitting} content={isSubmitting ? 'Creating account...' : 'Create Account'} id='purple' type='submit' />
        </form>
    )
}

export default SigninForm;