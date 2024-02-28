import React from 'react';

const Box = ({ width, height, color }) => {
  const boxStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color
  };

  return (
    <div>
      
      <div style={boxStyle}>
        <span>
      </span>
      </div>
     
    </div>
  );
  
};

export default Box;
