import React from "react";
import { useFormik } from "formik";
import "./Login.css";
const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      if (
        values.password.length >= 8 &&
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.ru$/i.test(values.email)
      )
        alert(JSON.stringify(values, null, 2));
      else if (values.password.length < 8)
        alert("R u kidding me?  password must be 8 symbol or more");
      else alert("R u kidding me?  mail Address must have ru domain");
    },
  });
  return (
    <form className="form2" onSubmit={formik.handleSubmit}>
      <fieldset>
        <legend>Log in:</legend>
        <div>
          <label>UserName:</label><br/>
          <input className="form-inp" type="text" id="fname" name="fname" />
        </div>
        <div>
          <label htmlFor="password">Password<sup>*</sup></label><br/>
          <input
          className="form-inp"
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address<sup>*</sup></label><br/>
          <input
          className="form-inp"
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </div>
        <div>
          <label>Birthday:</label><br/>
          <input className="form-inp" type="date" id="birthday" name="birthday" />
        </div>

        <button className="form-btn" type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default SignupForm;
