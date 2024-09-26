import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import  Information  from '../components/Info'

const SignIn = () => {
  let { Register, setRegister } = useContext(Information)
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
      password: Yup.string().min(8, "Must be in letters").required('Required'),
    }),
    onSubmit: values => {
      const match = Register.find((item) => item.email === values.email && item.password === values.password);
      if (match) {
       alert("Login Successful")
        Navigate("/library");
      }else{
        alert("Invalid User")
        formik.resetForm()
        
      }
      
    },
  });
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div
            style={{ marginTop: "40vh", backgroundColor: "tomato",borderRadius:"25px" }}
            className="col-sm-12 col-md-6 col-lg-4 col-xl-5 text-center "
          >
            <center className='mt-3'>
              <h3>Login</h3>
           </center>
            <div>
              <form
                id="form"
                onSubmit={formik.handleSubmit}
                className=" gap-2 col-xl-8 ms-5 ps-3 ps-xl-5 d-flex flex-column "
              >
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" {...formik.getFieldProps('email')} />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <label htmlFor="password">Password</label>
                <input id='password' name="password" type="text"
                  {...formik.getFieldProps('password')}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
                <button
                  type="submit"
                  className="col-6 text-center btn mb-5 btn-primary"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn