import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './LocalStorage.css';
import UseLocalStorage from '../../../Components/CustomHookes/UseLocalStorage';
import UseLocalStorageMultiFiled from '../../../Components/CustomHookes/UseLocalStorageMultiFiled';
const LocalStorage = () => {
  const [value, setValue]= useState('');

  const [name, setName] = useState('');
  const [age,setAge] = useState(0);
  const [location, setLocation] = useState('');

  const [print, setPrint] = useState('');
  const [printString, setPrintString] = useState('');

  const {setItem, getItem, removeItem} = UseLocalStorage('name');
  const {setItemOne, getItemOne} = UseLocalStorageMultiFiled()

  const printLocalStorage = ()=>{
      const item = getItem()
      setPrint(item)
  }

  const printObject = () => {
      const item = getItem()
      console.log(item)
      setPrintString(JSON.stringify(item))
  }
  
  return(<div className="LocalStorage" data-testid="LocalStorage">
    <h1>useLocalStorage</h1>
    <input type='text' value={value} placeholder='Name' onChange={(e)=>setValue(e.target.value)} />
    {/* <input type='text' value={value} placeholder='Name' onChange={(e)=>setValue(e.target.value)} /> */}
    <div>
        <button onClick={()=>setItem(value)}>Set</button>
        <button onClick={printLocalStorage}>Get</button>
        <button onClick={()=>removeItem()}>Remove</button>
    </div>
    {print}
    <div></div>
    <h1>useLocalStorage Object</h1>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
    <input type='text' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age' />
    <input type='text' value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Location' /><br></br>
    <button onClick={()=>setItem({name,age,location})}>set Item</button>
    <button onClick={printObject}>get Item</button>
    <button onClick={()=>removeItem()}>remove Item</button><br></br>
    {printString}
    <div></div>
    <h1>useLocalStorage mutiple values</h1>
    <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name' />
    <input type='text' value={age} onChange={(e)=>setAge(e.target.value)} placeholder='Age' />
    <input type='text' value={location} onChange={(e)=>setLocation(e.target.value)} placeholder='Location' /><br></br>
    <button onClick={()=>setItemOne({name:name,age:age,location:location})}>set multi item</button>
    <button onClick={()=>getItemOne()}>set multi item</button>
    

  </div>);
};

LocalStorage.propTypes = {};

LocalStorage.defaultProps = {};

export default LocalStorage;
