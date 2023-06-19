import '../../components/errors.scss';
import { FC } from "react";
import { Select } from "../../components/inputs/select";
import { SignBtn } from "../../components/button/button";
import { useFormik } from "formik";
import { basicSchema } from "../../components/schemas";
import { InputLabel, Passowrd } from "../../components/inputs/inputs";

const onSubmit = async (values: any, actions: any) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
    console.log('submitted');
};

const SigninForm: FC = () => {

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
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            country: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    console.log(errors, values);

    return (
        <form onSubmit={handleSubmit}>

            <InputLabel className={errors.email && touched.email ? "input-error" : ""}
                id='firstName' onChange={handleChange} onBlur={handleBlur} value={values.firstName} type="text" placeholder="First name here" label='First Name' />
            {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}

            <InputLabel className={errors.country && touched.country ? "input-error" : ""} id='lastName' onChange={handleChange} onBlur={handleBlur} value={values.lastName} type="text" placeholder="Last name here" label='Last Name' />
            {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}

            <InputLabel className={errors.country && touched.country ? "input-error" : ""} id='email' onChange={handleChange} onBlur={handleBlur} value={values.email} type="email" placeholder="Email address here" label='Email' />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <Select className={errors.country && touched.country ? "input-error" : ""} onChange={handleChange} onBlur={handleBlur} value={values.country} />
            {errors.country && touched.country && <p className="error">{errors.country}</p>}

            <label style={{ display: 'block', margin: '1rem 0 .5rem 0' }} htmlFor="">Password</label>
            <Passowrd className={errors.country && touched.country ? "input-error" : ""} id="password" onChange={handleChange} onBlur={handleBlur} value={values.password} placeholder='Password (8 or more characters)' />
            {errors.password && touched.password && <p className="error">{errors.password}</p>}

            <SignBtn disabled={isSubmitting} content='Create Account' id='purple' type='submit' />
        </form>
    )
}

export default SigninForm;