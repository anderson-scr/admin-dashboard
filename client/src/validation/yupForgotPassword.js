import * as yup from "yup";

export const schemaForgotPassword = yup.object().shape({
  email: yup.string().email().required("Please, inform a valid email")
});