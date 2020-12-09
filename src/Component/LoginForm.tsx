import React, { FC } from "react";
import { Formik, Form, Field } from "formik";
import { MyField } from "../Hook/MyField";

export const LoginForm: FC = () => {
  return (
    <div>
      <Formik
        initialValues={{ Email: "", Password: "", RememberMe: false }}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log("submit", data);
          setSubmitting(false);
        }}
      >
        {({ values, isSubmitting }) => (
          <Form>
            <div>
              <label htmlFor="Email">Email</label>
              <MyField placeholder="Email" name="Email" type="Email" />
            </div>
            <div>
              <label htmlFor="Password">Password</label>
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
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
