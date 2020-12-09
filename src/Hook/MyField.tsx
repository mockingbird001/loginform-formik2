import React, { FC } from "react";
import { Field, useField } from "formik";

export const MyField = (props: any) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : "";

  return (
    <div>
      <Field {...field} {...props} helperText={errorText} error={!!errorText} />
    </div>
  );
};
