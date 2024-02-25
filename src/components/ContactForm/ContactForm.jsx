import css from "./ContactForm.module.css";
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

export const Forma = ({ submitForm }) => {
  const { form, submit } = css;
  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {
        submitForm(values);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form autoComplete="off" className={form}>
          <div className={css.label}>
            <label htmlFor="name">Name</label>
            <Field name={"name"} label={"Name"} id="name" />
            {errors.name && touched.name ? (
              <div className={css.error}>{errors.name}</div>
            ) : null}
          </div>
          <div className={css.label}>
            <label htmlFor="number">Number</label>
            <Field name={"number"} label={"Number"} id="number" />
            {errors.number && touched.number ? (
              <div className={css.error}>{errors.number}</div>
            ) : null}
          </div>

          <button type="submit" className={submit}>
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Forma;
