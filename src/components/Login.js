import React, { useState } from "react";
import { toast } from "react-toastify";
import api from "../api/axionsConfig";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, 
        [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting form data:", formData);
      const response = await api.post("/auth/signin", formData);
      console.log("Login Successful:", response.data);
      localStorage.setItem("token", response.data.access_token);
      console.log("Token stored in localStorage:", response.data.access_token);
      toast.success("Login Successful",{autoClose: 1000});

      setTimeout(() => {
        navigate("/");
      }, 3000);
      // TODO: Handle successful login (e.g., store token, redirect)
    } catch (error) {
      toast.error("Login Failed. Please check your credentials.",{autoClose: 3000});
      console.error("Login Failed:", error);
      // TODO: Handle login error (e.g., show error message)
    }
  };

 return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#121212" }}
    >
      <div
        className="card p-4 shadow"
        style={{
          width: "400px",
          backgroundColor: "#1e1e1e",
          color: "white",
        }}
      >
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control bg-dark text-white border-secondary"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control bg-dark text-white border-secondary"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="btn btn-info w-100">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
