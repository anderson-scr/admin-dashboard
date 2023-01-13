import * as yup from "yup";

export const schemaRegisterValidation = yup.object().shape({
  userName: yup.string().matches(/^\S*$/, "Name without spaces").matches(/^\w*$/, "Name without special chars").required("You must have user name with no spaces."),
  email: yup.string().email().required("You must have a valid email."),
  password: yup.string().min(6).required("Password must be at least 6 characters.")
  // confirmPassword: yup.string().oneOf([yup.ref("password"), null]).required()
});