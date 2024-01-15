import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Carousel } from "react-bootstrap"; // Import Carousel component from react-bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';
import GoogleIcon from "@mui/icons-material/Google";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "../layout/Login.css";
const Login = () => {
  return (
    <div
      className="hero-container"
      style={{ display: "flex",backgroundSize: "cover",minHeight: "100vh" }}
    >
      <div
        className="left"
        style={{ flex: "0.6", backgroundColor: "blue" }}
      >
       <div>
       <Carousel style={{width: '100%',height: '100%'}}>
       <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="First slide"
      style={{ objectFit: 'covo', width: '100%', height: '100%' }}

    
      

     
    />
  </Carousel.Item>


  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Second slide"
      style={{ objectFit: 'contain', width: '100%', height: '100%' }}


    />
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Third slide"
      style={{ objectFit: 'contain', width: '100%', height: '100%' }}
      
    />
  </Carousel.Item>

          </Carousel>
       </div>
      </div>

      {/* login */}
      <div
        className="right"
        style={{
          flex: "0.4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ede4e7",
        }}
      >
        <div className="wrapper">
          <form action="">
            <h1>Welcome To DreamHome</h1>
            <div>
              <p>
                Already have an account? <a href="">Login</a>{" "}
              </p>
            </div>

            <div
              className="button-container"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                alignItems: "center",
              }}
            >
              {/* First box */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  minWidth: "90%",
                  maxWidth: "90%",
                }}
              >
                <GoogleIcon style={{ marginRight: "10px" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  Continue with Google
                </a>
              </div>

              {/* Second box */}
              <div
                style={{
                  backgroundColor: "#fff",
                  padding: "10px",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  minWidth: "90%",
                  maxWidth: "90%",
                }}
              >
                <MoreHorizIcon style={{ marginRight: "10px" }} />
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    textAlign: "center",
                    flex: 1,
                  }}
                >
                  Continue another way
                </a>
              </div>
            </div>

            <div style={{ padding: "40px", borderRadius: "10px" }}>
              <button className="email-button">Continue With Email</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
