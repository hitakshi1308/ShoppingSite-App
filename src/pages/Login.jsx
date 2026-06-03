import { useActionState, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";

import "../styles/Login.css";

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (prevData, loginFormData) => {
    const userEmail = loginFormData.get("email");
    const userPass = loginFormData.get("password");

    if (userEmail === "") {
      return {
        error: "Enter your email",
        userEmail,
        userPass,
      };
    }

    if (userPass === "") {
      return {
        error: "Enter your Password.",
        userEmail,
        userPass,
      };
    }

    if (userEmail !== "abc@gmail.com" || userPass !== "12345") {
      return {
        error: "Invalid Credentials.",
        userEmail,
        userPass,
      };
    }

    return {
      success: "Login Successful!!",
      userEmail,
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
      // localStorage.setItem("isLoggedIn", "true");

      dispatch(
        login({
          name: "User",
          email: data.userEmail,
        })
      );

      setTimeout(() => {
        navigate("/");
      }, 1000);
    }
  }, [data, dispatch, navigate]);

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Shop.Co</h1>

        <h2>Login</h2>

        <form action={action}>
          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            defaultValue={data?.userEmail}
          />

          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            defaultValue={data?.userPass}
          />

          <button disabled={pending}>
            {pending ? "Loading..." : "Login"}
          </button>

          {showError && (
            <span style={{ color: "red", fontSize: "12px" }}>
              {showError}
            </span>
          )}

          {data?.success && (
            <span style={{ color: "green", fontSize: "12px" }}>
              {data.success}
            </span>
          )}
        </form>

        <p>
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>
    </div>
  );
}