import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const Apper = () =>{

  const schema = yup.object().shape({
    name:yup.string().required("this field is required"),
    enail:yup.string().email("enter valid email").required("this field is required"),
    password:yup.string().required("this field is required"),
    address:yup.string().required("this field is required"),
    phoneNumber:yup.string()
  })


  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();


  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();
 
 
  const onSubmit=()=>{
    console.log("hello")
  }

  return (

    // <form  onSubmit={handleSubmit(onSubmit)}>
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
          <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
          <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
          <MDBInput wrapperClass='mb-4' label='Address' size='lg' id='form4' type='text'/>
          <MDBInput wrapperClass='mb-4' label='PhoneNumber' size='lg' id='form5' type='text'/>

          <div className='d-flex flex-row justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
          </div>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
    // </form>
  );
}

export default Apper;