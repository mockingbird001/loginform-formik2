import React, { FC, useState } from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { MyField } from "../Hook/MyField";

const Schema = yup.object().shape({
  email: yup.string().email("Invalid Email").required("This field is required"),
  password: yup
    .string()
    .min(6, "Please Enter less then 6 letters")
    .required("This field required"),
});

type Props = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const initialState: Props = {
  email: "",
  password: "",
  rememberMe: false,
};

export const LoginForm: FC = () => {
  const [values, setValues] = useState(initialState);

  return (
    <div>
      <Formik
        validationSchema={Schema}
        initialValues={initialState}
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
              <MyField
                id="email"
                placeholder="Email"
                name="email"
                type="email"
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <MyField
                id="password"
                placeholder="Password"
                name="password"
                type="password"
              />
            </div>
            <div>
              <label>
                <Field id="rememberMe" name="rememberMe" type="checkbox" />
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
