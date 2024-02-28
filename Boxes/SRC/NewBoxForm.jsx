import React, {useState} from 'react';


const NewBoxForm = ({addBox}) => {
const initialState= {
    width: '',
    height: '',
    color: ''
}

    const [box, setBox] = useState({initialState});

const handleChange = (e) => {
    const { name, value } = e.target;
    setBox({ ...box, [name]: value });
};


const handleSubmit = (e) => {
    e.preventDefault();
    addBox(box.width, box.height, box.color);
    setBox(initialState)
};


return (
    <div>
    <form onSubmit = {handleSubmit}>
        <label htmlFor="width">Width:
        <input id="width" type="number" name="width" value = {box.width || "" } onChange={handleChange}/>
        </label>
        
        <label htmlFor="height">Height:
        <input id="height" type="number" name="height" value = {box.height || "" } onChange={handleChange}/>
        </label>

        <label htmlFor="color">Color:
        <input id ="color"type="text" name="color" value = {box.color || "" } onChange={handleChange}/>
        </label>

        <button>Create new box!</button>
    </form>
    </div>
)
}

export default NewBoxForm; 