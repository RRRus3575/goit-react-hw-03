import css from "./Form.module.css";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

export const Forma = (props) => {
  const { form, submit } = css;
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        props.submitForm(values);
        actions.resetForm();
      }}
    >
      <Form autoComplete="off" className={form}>
        <label htmlFor="name">Name</label>
        <Field name={"name"} label={"Name"} id="name" />
        <label htmlFor="number">Name</label>
        <Field name={"number"} label={"Number"} id="number" />

        <button type="submit" className={submit}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
