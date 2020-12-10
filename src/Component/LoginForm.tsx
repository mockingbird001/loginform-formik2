import React, { FC } from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { MyField } from "../Hook/MyField";

const Schema = yup.object().shape({
  Email: yup.string().email("Invalid Email").required("This field is required"),
  Password: yup
    .string()
    .min(6, "Please Enter less then 6 letters")
    .required("This field required"),
});

export const LoginForm: FC = () => {
  return (
    <div>
      <Formik
        validationSchema={Schema}
        initialValues={{ Email: "", Password: "", RememberMe: false }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log("submit", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="email">Email</label>
              <MyField placeholder="Email" name="Email" type="Email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <MyField placeholder="Password" name="Password" type="Password" />
            </div>
            <div>
              <label>
                <Field name="RememberMe" type="checkbox" />
                RememberMe
              </label>
            </div>
            <div>
              <button disabled={isSubmitting} type="submit">
                sunmit
              </button>
            </div>
            <div>
              <pre>{JSON.stringify(values, null, 2)}</pre>
              <pre>{JSON.stringify(errors, null, 2)}</pre>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
