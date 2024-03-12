import React,{useRef} from 'react';
import PropTypes from 'prop-types';
import './UseRefForm.css';

const UseRefForm = () => {
  const name = useRef(null);
  const age = useRef(null);
  const gender = useRef(null);
  const city = useRef(null);
  const state = useRef(null);
  const agree = useRef(null);
  
  const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Name : ',name?.current?.value,
      'Age : ',age?.current?.value,
      'Gender : ',gender?.current?.value,
      'City : ',city?.current?.value,
      'State : ',state?.current?.value,
      'Adree : ',agree?.current?.value)
  }  
  return(<div className="UseRefForm" data-testid="UseRefForm">
    <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Name' name="name" ref={name} /> <br></br>
        <input type='text' placeholder='Age' name="age" ref={age} /> <br></br>
        <input type='radio' name="gender" ref={gender} value="male" /> Male <input name="gender" type='radio' ref={gender} value="female" /> Female <br></br>
        <select ref={city}>
            <option value="">Select city</option>
            <option value="city 1">City 1</option>
            <option value="city 2">City 2</option>
            <option value="city 3">City 3</option>
        </select>
        <select ref={state}>
            <option value="">Select state</option>
            <option value="state 1">State 1</option>
            <option value="state 2">State 2</option>
            <option value="state 3">State 3</option>
        </select>
        <input type="checkbox" ref={age} checked={age == true} /> Agree<br></br>
        <button>Submit</button>
    </form>
  </div>);
};

UseRefForm.propTypes = {};

UseRefForm.defaultProps = {};

export default UseRefForm;
