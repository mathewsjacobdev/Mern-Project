import React from 'react';
import HomePage from './pages/HomePage';


function App() {
  return (
    
      <div className="App" style={{ 
        // backgroundImage: "url('https://images.pexels.com/photos/1819650/pexels-photo-1819650.jpeg?auto=compress&cs=tinysrgb&w=600')",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh", }}>
        <HomePage />
      </div>

  );
}

export default App;
