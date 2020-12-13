import React from "react";
import { Field, useField } from "formik";

export const MyField = (props: any) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <Field {...field} {...props} />
    </div>
  );
};
