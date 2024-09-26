import React from 'react'
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const Navigate = useNavigate()
  return (
    <div className='container-fluid' style={{ height: "100Vh", backgroundColor: "orchid" }}>
      <div className="row">
        <div className="col-12 ">
          <div style={{ marginTop: "45vh" }} className=" h1  text-center">
            Wecome To My Library
          </div>
          <div className=" h1  text-center">
            <button
              onClick={() => Navigate("/signup")}
              className="btn btn-primary"
            >
              Go to Sign Up<i className=" ms-2 bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome