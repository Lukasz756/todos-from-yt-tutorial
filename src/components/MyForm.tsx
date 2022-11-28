import { useState } from 'react';
import ReactDOM from 'react-dom/client';

function MyForm() {
  const [state, setState] = useState({
    name:"",
    age:''
  })
  function handleChange(evt: { target: { value: any; name: any; }; }) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }
  return (
    //multiple input form
    <form>
      <label>Enter name:
        <input
          type="text" 
          name="name"
          value={state.name}
          onChange={handleChange}
        />
      </label>
      <label>Enter age:
        <input
        type="number"
        name="age"
        value={state.age}
        onChange={handleChange}
        />
      </label>
      <h2>
        {state.name}
    </h2>
    <h3>
    {state.age}
    </h3>
    </form>
    
  )
}
export default MyForm
