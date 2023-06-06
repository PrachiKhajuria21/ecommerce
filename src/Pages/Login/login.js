import react, { useEffect, useState } from "react";

// import { BrowserRouter as Router, Link, useLocation,Navigate } from "react-router-dom";
// import { addTransaction, editTransaction } from "../redux/Transaction";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState([]);

  const backBtn = {
    color: "white",
    marginLeft: "50%",
    backgroundColor: "red",
    border: "1px solid red",
    fontWeight: "bold",
  };
  const submitBtn = {
    marginLeft: "50%",
  };
  const pTag = {
    color: "red",
  };

  useEffect(() => {
    fetch("http://localhost:8000/email")
      .then((response) => response.json())
      .then((data) => setUserEmail(data));
  }, []);

  console.log("email from database", userEmail);
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("email is required")
      .email()
      .test("fileRequire", "First register yourself", (value) => {
      
if(userEmail.some((el) => el.email === value)){
  console.log(" exist")

  return true;
}}),
    password: yup.string().required("password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const xyz = async (data) => {
    console.log("insdie func", data);

    //  const user = fetch('http:localhost:8000')

    const response = await fetch(`http://localhost:8000/loginData`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const datauser = await response.json();
    console.log("dataaaa", datauser);
    if (datauser === false) {
      alert("Invalid email or password");
    } else {
      navigate("/");
    }
    // return data;
  };

  return (
    <div className="container">
      {/* <Link to="/table">
        <button style={backBtn}>Back</button>
      </Link> */}

      <form onSubmit={handleSubmit(xyz)}>
        <div>
          <label>Email: </label>
          <input type="text" {...register("email")} />
          <p style={pTag}>{errors.email?.message}</p>
        </div>
        <div className="form-group mt-2">
          <label>Password: </label>
          <input type="password" {...register("password")} />
        </div>
        <p style={pTag}>{errors.password?.message}</p>

        <button type="submit" style={backBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
