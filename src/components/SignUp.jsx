import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Information from '../components/Info'

const SignUp = () => {
  let {Register,setRegister}= useContext(Information)
  const Navigate = useNavigate();
    window.onload = function () {
      Navigate("/");
  };
  const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().min(8,"Must be in letters").required('Required'),
        }),
        onSubmit: values => {
          alert("You have Registered Successfully");
          Navigate("/Signin");
          setRegister([...Register,values])
          console.log(Register);  
        },
      });
  return (
    <>
      <div className="container ">
        <div className="row justify-content-center">
          <div style={{marginTop:"40vh",borderRadius:"25px"}} className="col-sm-12 col-md-6  col-lg-4 col-xl-6 text-white  bg-dark ">
            <div className='h3 mt-3 text-center'>
              SignUp
            </div>
            <div>
              <form  onSubmit={formik.handleSubmit} className=' gap-2 col-8 ms-5 ps-5   d-flex flex-column justify-content-center'>
                <label htmlFor="email">Email</label>
                <input id='email' name="email" type="text"
                {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <label htmlFor="password">Password</label>
                <input className="mt-0" id="password" name="password" type="text"
                {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null} 
                <button type='submit' className='col-6 text-center btn mb-5 btn-primary'>Register</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp