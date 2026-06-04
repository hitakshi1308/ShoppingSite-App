import { useActionState, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (prevData, formData) => {
    const identifier = formData.get("identifier");
    const password = formData.get("password");

    if (!identifier) {
      return {
        error: "Enter Email or Phone Number",
        identifier,
        password,
      };
    }

    if (!password) {
      return {
        error: "Enter Password",
        identifier,
        password,
      };
    }

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isPhone = /^[0-9]{10}$/;

    if (!isEmail.test(identifier) && !isPhone.test(identifier)) {
      return {
        error: "Enter a valid Email or Phone Number.",
        identifier,
        password,
      };
    }

    const validEmail = "abc@gmail.com";
    const validPhone = "9824746058";
    const validPassword = "abc12345";

    const emailLogin = identifier === validEmail && password === validPassword;

    const phoneLogin = identifier === validPhone && password === validPassword;

    if (!emailLogin && !phoneLogin) {
      return {
        error: "Invalid Credentials. Try Again!",
        identifier,
        password,
      };
    }

    return {
      success: "Login Successful!",
      identifier,
    };
  };

  const [data, action, pending] = useActionState(handleLogin, {});

  const [showError, setShowError] = useState("");

  useEffect(() => {
    if (data?.error) {
      setShowError(data.error);

      const timer = setTimeout(() => {
        setShowError("");
      }, 3000);

      return () => clearTimeout(timer);
    }

    if (data?.success) {
      dispatch(
        login({
          name: "User",
          email: data.identifier,
        }),
      );

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [data, dispatch, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="login-header">
          <h1>SHOP.CO</h1>
          <p>Sign in to continue shopping</p>
        </div>

        <form action={action}>
          <input
            type="text"
            name="identifier"
            placeholder="Email or Phone Number"
            defaultValue={data?.identifier}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            defaultValue={data?.password}
          />

          <button disabled={pending}>
            {pending ? "Logging In..." : "Sign In"}
          </button>

          {showError && <div className="error-msg">{showError}</div>}

          {data?.success && <div className="success-msg">{data.success}</div>}
        </form>

        <div className="login-footer">
          <Link to="#">Forgot Password?</Link>

          <p>
            Don't have an account?
            <Link to="/signup"> Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
