import Image from 'next/image'
import React from 'react'


const Logo = () => {
    return (
      <div
        className="bg-repeat opacity-30"
        style={{
          backgroundImage: `url('/ElhodaLogo.png')`,
          backgroundSize: '25px 25px',  
          height: '100%',  
          width: '75px',  
        }}
      >
      </div>
    );
  };

export default Logo