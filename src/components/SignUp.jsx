import { green } from "@mui/material/colors";
import React from "react";

const SignUp = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh", // Set the height to the full height of the viewport
    backgroundColor: "#f6f8f9",
    // backgroundColor:"#f6f8f9"
  };

  const boxStyle = {
    width: '30%',
    height: '60%',
    margin: '3%',
    border: '1px',
    borderRadius: '10px',
    backgroundColor: '#fff',
    display: 'flex',
    // justifyContent: 'center',
    // alignItems: 'flex-start', // Align items to the top
    // overflow: 'hidden',
  };

  const imageStyle = {
    maxWidth: '50%', // Make the image responsive
    maxHeight: '50%', // Make the image responsive
  };


  return (
    <div style={containerStyle}>
      <div
       style={boxStyle}
      >
       <div style={{minHeight:"10%", maxWidth: '100%', backgroundColor:"green"}}>
       <img
          src="https://static.planner5d.com/assets/images/pro/personal-use.png"
          alt="" style={{imageStyle }}
        />
       </div>
       <div  style={{minHeight:"10%", maxWidth: '100%', backgroundColor:"blue"}}></div>
      </div>
      <div style={boxStyle}>
       <div>
       <img
          src="https://static.planner5d.com/assets/images/pro/professional-use.png"
          alt="" style={{imageStyle }}
        />
       </div>
      </div>
    </div>
  );
};

export default SignUp;
