import * as yup from "yup";

export const schemaLogin = yup.object().shape({
  userName: yup.string().required("User name is required"),
  password: yup.string().required("Password is required")
});