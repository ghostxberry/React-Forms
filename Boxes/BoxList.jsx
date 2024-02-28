import React, {useState} from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box'

const BoxList = () => {
    const InitialList = [
        {width: 100, height: 100, color: 'blue' }
    ]

const [boxes, setBoxes] = useState(InitialList);

const addBox = (width, height, color) => {
    setBoxes(boxes => [...boxes, {width, height, color}])
}


return (
    <div>
      <h1>Box Land</h1>
      <NewBoxForm addBox = {addBox}/>
      <div>
        {boxes.map(({ width, height, color }, index) => (
          <Box key={index} width={width} height={height} color={color} />
        ))}
      </div>
    </div>
  );
  
}





export default BoxList;