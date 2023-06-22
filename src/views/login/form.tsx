import axios from "axios";
import { FC } from 'react'
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import { SignBtn } from "../../components/button/button";
import { useFormik } from "formik";
import { loginSchema } from "../../components/schemas";
import { useNavigate } from 'react-router-dom';
import { InputLabel, Passowrd } from "../../components/inputs/inputs";

const LoginForm: FC = () => {
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

    const url = 'https://creativehub-endpoints-production.up.railway.app/api/users/login';

    const onSubmit = async (values: any) => {
        await axios
            .post(url, values, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
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
                const authID = res.data.data.user._id;
                const authName = res.data.data.user.firstName;
                handleSaveAuth(authID, authToken, authName);
            })
            .catch((err: any) => {
                console.log(err);
                // toast.error(err.response.data.message, {
                //     position: "top-right",
                //     autoClose: 5000,
                //     hideProgressBar: false,
                //     closeOnClick: true,
                //     pauseOnHover: true,
                //     draggable: true,
                //     progress: undefined,
                //     theme: "colored",
                // });
            })
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
    onSubmit(values)

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
                <SignBtn disabled={isSubmitting} content='Log In' className='purple' type='submit' />
            </form>
        </div>
    )
}

export default LoginForm;