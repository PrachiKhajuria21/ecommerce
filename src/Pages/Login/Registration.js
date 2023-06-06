import react, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

const Registration = () => {

   const [userEmail,setUserEmail]= useState([])

 
  useEffect(() => {
    fetch("http://localhost:8000/email")
    .then(response => response.json())
      .then(data => setUserEmail(data))
  },[])


  console.log("userEmail",userEmail)

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

  const regex1 = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W]).{6,20})/;
  const schema = yup.object().shape({
    name: yup.string().required("this field is required"),
    email: yup
      .string()
      .email("enter valid email")
      .required("this field is required")
    
      .test("fileRequire", "already exist", (value) => {
        console.log("value",value) 
if(userEmail.some(ele => ele.email === value)){
  console.log("data1")
  return false; 
}
else
{
  console.log("data2")
  return true;
}
      }),

    password: yup.string().required("this field is required").matches(regex1,{message:"Enter valid password"}),
    address: yup.string().required("this field is required"),
    phoneNumber: yup.string().required("required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });


  const xyz = (data) => {
    console.log("insdie func", data);
    const response = fetch("http://localhost:8000/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <div className="container">
      {/* <Link to="/table">
        <button style={backBtn}>Back</button>
      </Link> */}

      <form onSubmit={handleSubmit(xyz)}>
        <div className="form-group mt-2">
          <label>Name: </label>
          <input type="text" {...register("name")} />
          <p style={pTag}>{errors.name?.message}</p>
        </div>
        <div className="form-group mt-2">
          <label>Email: </label>
          <input type="text" {...register("email")} />
          <p style={pTag}>{errors.email?.message}</p>
        </div>
        <div className="form-group mt-2">
          <label>Password: </label>
          <input type="password" {...register("password")} />
        </div>
        <p style={pTag}>{errors.password?.message}</p>

        <div className="form-group mt-2">
          <label>Address: </label>
          <input type="text" {...register("address")} />
          <p style={pTag}>{errors.address?.message}</p>
        </div>
        <div className="form-group mt-2">
          <label>Phone-Number: </label>
          <input type="text" {...register("phoneNumber")} />
          <p style={pTag}>{errors.phoneNumber?.message}</p>
        </div>

        <button type="submit" style={backBtn}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
