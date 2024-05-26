import * as yup from "yup";

// const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
const passwordRules = /.*/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("Required"),
  firstName: yup.string().min(1, "Please enter your First Name").required("Required"),
  lastName: yup.string().min(1, "Please enter your LastName").required("Required"),
  country: yup.string().min(1, "Please select a country").required("Required"),
  gender: yup.string().min(1, "Please select a Gender").required("Required"),
  role: yup.string().min(1, "Please select a Role").required("Required"),
  phoneNumber: yup.number().positive().integer().required("Required"),
  password: yup.string().min(5).matches(passwordRules, { message: "Password must be a min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" }).required("Required"),
});

export const loginSchema = yup.object().shape({
  loginId: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Password must be a min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit" })
    .required("Required"),
});

export const bargainSchema = yup.object().shape({
  skill: yup.string().min(3, "Please enter the skill").required("Required"),
  projectDescription: yup.string().min(3, "Please describe your project").required("Required"),
  proposedPrice: yup.number().positive().integer().required("Required"),
});

export const updateLanguageSchema = yup.object().shape({
  language: yup.string().min(3, "Please enter the language").required("Required"),
  proficiency: yup.string().min(3, "Please enter your proficiency").required("Required"),
});

export const updateSkillsSchema = yup.object().shape({
  skill: yup.string().min(3, "Please enter the skill").required("Required"),
  experience_level: yup.string().min(3, "Please enter your experience level").required("Required"),
});

export const updateBioSchema = yup.object().shape({
  bio: yup.string().min(3, "Please update your bio").required("Required"),
});

export const updatePriceSchema = yup.object().shape({
  hourlyRate: yup.number().positive().integer().required("Required"),
  
});

export const updateCertificatesSchema = yup.object().shape({
  certificates: yup.string().min(3, "Please update your certificates").required("Required"),
});

export const updateUrlsSchema = yup.object().shape({
  urls: yup.string().min(3, "Please update your url").required("Required"),
});