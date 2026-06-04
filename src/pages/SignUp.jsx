import { Link } from "react-router";
import { Formik } from "formik";

import "../styles/SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <div className="signup-header">
          <h1>SHOP.CO</h1>
          <p>Create your account & Start Shopping.</p>
        </div>

        <Formik
          initialValues={{
            name: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          validate={(values) => {
            const errors = {};

            if (!values.name.trim()) {
              errors.name = "Name is required.";
            }

            if (!values.phone) {
              errors.phone = "Phone number is required.";
            } else if (!/^[0-9]{10}$/.test(values.phone)) {
              errors.phone = "Enter a valid 10-digit phone number.";
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
          onSubmit={async (values, { resetForm, setSubmitting }) => {
            try {
              const checkUser = await fetch(
                `http://localhost:3000/userProtectData?email=${values.email}`,
              );

              const existingUsers = await checkUser.json();

              if (existingUsers.length > 0) {
                alert("Email already registered.");
                setSubmitting(false);
                return;
              }

              const userData = {
                userId: String(values.phone),
                name: values.name.trim(),
                phone: Number(values.phone),
                email: values.email.trim().toLowerCase(),
                password: values.password,
                address: [],
                createdAt: new Date().toISOString().replace(".000", ""),
              };
              
              
              const res = await fetch("http://localhost:3000/userProtectData", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
              });
              // console.log(userData);

              if (!res.ok) {
                throw new Error("Failed to create account");
              }

              alert("Account Created Successfully!");

              resetForm();
            } catch (error) {
              alert(error.message);
            } finally {
              setSubmitting(false);
            }
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
                  placeholder="Full Name"
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
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                {errors.phone && touched.phone && (
                  <p className="error">{errors.phone}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
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
                  placeholder="Password"
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
                Create Account
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
