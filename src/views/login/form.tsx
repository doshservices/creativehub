import { Link } from "react-router-dom";
import { SignBtn } from "../../components/button/button";
import { useFormik } from "formik";
import { loginSchema } from "../../components/schemas";
import { InputLabel, Passowrd } from "../../components/inputs/inputs";

const onSubmit = async (values: any, actions: any) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log('submitted');
};

const LoginForm = () => {

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
            email: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit,
    });
    console.log(errors, values);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <InputLabel className={errors.email && touched.email ? "input-error" : ""}
                    id='email' onChange={handleChange} onBlur={handleBlur} value={values.email}
                    label='Email Address' placeholder="Email address here"
                />
                {errors.email && touched.email && <p className="error">{errors.email}</p>}

                <label style={{ display: 'block', margin: '1rem 0 .5rem 0' }} htmlFor="">Password</label>
                <Passowrd className={errors.password && touched.password ? "input-error" : ""}
                    id="password" onChange={handleChange} onBlur={handleBlur} value={values.password}
                    placeholder="Password (8 or more characters)"
                />
                {errors.password && touched.password && <p className="error">{errors.password}</p>}

                <Link to='/passwordreset' className="forgot">Forgot Password?</Link>
                <SignBtn disabled={isSubmitting} content='Log In' id='purple' type='submit' />
            </form>
        </div>
    )
}

export default LoginForm;