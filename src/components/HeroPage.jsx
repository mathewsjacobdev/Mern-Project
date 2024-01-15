import React from 'react';
// import './HeroPage.css'; // Import your CSS file
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Carousel } from "react-bootstrap"; // Import Carousel component from react-bootstrap
import {Box,Typography} from '@mui/material'
import TypewriterComponent from 'typewriter-effect'

const HeroPage = () => {
 
  return (
    <div className="hero-container" style={{display: "flex" ,height: "400px"}} >
      <div className="hero-left" style={{flex: "1" ,}}>
        
      <Box style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",}} >
  <Typography variant="h4"  style={{color:"white"}}>
      <TypewriterComponent
        options={{
          strings: ['Hello World'],
          autoStart: true,
          loop: true,
         
        }}
        
      />
    </Typography>
    </Box>
      </div>



      <div className="hero-right" style={{flex: "1"}}>
      <div>
      
<Carousel style={{width: '100%',height: 'auto', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="First slide"
    //   style={{ objectFit: 'contain', width: '100%', height: '100%' }}
    style={{ maxHeight: '400px', width: 'auto', display: 'block', margin: '0 auto', marginTop: '10px'}}
      

     
    />
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Second slide"
    //   style={{ objectFit: 'contain', width: '100%', height: '100%' }}
    style={{ maxHeight: '400px', width: 'auto', display: 'block', margin: '0 auto', marginTop: '10px'}}


    />
  </Carousel.Item>

  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Third slide"
      style={{ maxHeight: '400px', width: 'auto', display: 'block', margin: '0 auto', marginTop: '10px'}}
      
    />
  </Carousel.Item>
</Carousel>
</div>
      </div>
    </div>
  );
};

export default HeroPage;
