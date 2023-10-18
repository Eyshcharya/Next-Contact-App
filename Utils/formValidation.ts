import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  name: yup.string().required(`Full Name is Required`),
  email: yup.string().email(`Invalid email`).required(`Email is Required`),
  phone: yup
    .string()
    .min(10, `Invalid Phone Number`)
    .required(`Phone Number is Required`),
  gender: yup.string().required(`Gender is Required`),
});
