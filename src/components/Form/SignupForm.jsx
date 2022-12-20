import React from "react";
import { useFormik } from "formik";
import FormElement from "./FormElement";

const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = "Required";
  } else if (values.firstName.length > 15) {
    errors.firstName = "Must be 15 characters or less";
  }

  if (!values.lastName) {
    errors.lastName = "Required";
  } else if (values.lastName.length > 20) {
    errors.lastName = "Must be 20 characters or less";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (values.phoneNumber.length < 9 || values.phoneNumber.length > 15) {
    errors.phoneNumber = "Enter a valid phone number";
  }
  if (!values.serviceType) {
    errors.serviceType = "Required";
  } else if (values.serviceType === "") {
    errors.serviceType = "Select a valid service type";
  }

  return errors;
};

const SignupForm = () => {
  // Note that we have to initialize ALL of fields with values. These
  // could come from props, but since we don’t want to prefill this form,
  // we just use an empty string. If we don’t do this, React will yell
  // at us.
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      serviceType: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className="inquire-form" onSubmit={formik.handleSubmit}>
      <h2>Get a Qoute</h2>
      <FormElement>
        <div className="inquire-form__sub-field">
          <label htmlFor="firstName">First name</label>
          <input
            id="firstName"
            name="firstName"
            className=""
            type="text"
            placeholder="First Name"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <div>{formik.errors.firstName}</div>
          ) : null}
        </div>
        <div className="inquire-form__sub-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="lastName"
            className=""
            type="text"
            placeholder="Last Name"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            onBlur={formik.handleBlur}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <div>{formik.errors.lastName}</div>
          ) : null}
        </div>
      </FormElement>
      <FormElement>
        <div className="inquire-form__field">
          <label htmlFor="email">Email Address</label>
          <input
            className="frameInput2"
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
      </FormElement>
      <FormElement>
        <div className="inquire-form__field">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            className="frameInput2"
            type="text"
            placeholder="+1"
            id="phoneNumber"
            name="phoneNumber"
            onChange={formik.handleChange}
            value={formik.values.phoneNumber}
            onBlur={formik.handleBlur}
          />
          {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
            <div>{formik.errors.phoneNumber}</div>
          ) : null}
        </div>
      </FormElement>
      <FormElement>
        <div className="inquire-form__field">
          <label htmlFor="serviceType">
            Which of our services are you interested in?
          </label>
          <select
            id="serviceType"
            name="serviceType"
            onChange={formik.handleChange}
            value={formik.values.serviceType}
            onBlur={formik.handleBlur}
          >
            <option value={""}>Please select a service</option>
            <option value={"regular-clean"}>Regular</option>
            <option value={"deep-clean"}>Deep Clean</option>
            <option value={"moving-clean"}>Move In / Move Out</option>
          </select>
          {formik.touched.serviceType && formik.errors.serviceType ? (
            <div>{formik.errors.serviceType}</div>
          ) : null}
        </div>
      </FormElement>
      <button className="book-btn" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SignupForm;
