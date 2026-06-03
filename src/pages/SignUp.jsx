import { Link } from "react-router";
import { Formik } from "formik";

import "../styles/SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1>Shop.Co</h1>
        <h2>Create Account</h2>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.name) {
              errors.name = "Name is required.";
            }

            if (!values.email) {
              errors.email = "Email is required.";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address.";
            }

            if (!values.password) {
              errors.password = "Password is required.";
            } else if (values.password.length < 6) {
              errors.password = "Password must be at least 6 characters.";
            }

            if (!values.confirmPassword) {
              errors.confirmPassword = "Confirm Password is required.";
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword = "Passwords do not match.";
            }

            return errors;
          }}

          onSubmit={(values, { resetForm }) => {
            alert("Account Created Successfully");

            console.log(values);

            resetForm();
          }}
        >
          
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Name"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.name && touched.name && (
                  <p className="error">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.email && touched.email && (
                  <p className="error">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
              </div>

              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
              </div>

              <button type="submit" disabled={isSubmitting}>
                Sign Up
              </button>
            </form>
          )}
        </Formik>

        <p className="account">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>
      </div>
    </div>
  );
}
