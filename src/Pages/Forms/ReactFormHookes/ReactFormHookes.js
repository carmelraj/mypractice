import React,{useState} from 'react';
import PropTypes from 'prop-types';
import './ReactFormHookes.css';
import {useForm} from 'react-hook-form';
const ReactFormHookes = () => {
  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{name:'',address:{address:''}},mode:'onSubmit'
  })
  
  const onSubmit = (data) => {
        console.log(data)
  }

  return(<div className="ReactFormHookes" data-testid="ReactFormHookes">
      <form onSubmit={handleSubmit(onSubmit)}>
          <div className='form-group'>
            <input type='text' name='name' {...register("name",{required:true})}  />
            {errors.name &&<p style={{color:'red'}}>Enter your name</p>}          
          </div>
          <div className='form-group'>
            <input type='text' name='address' {...register("address.address",{required:true})}  />
            {errors.address &&<p style={{color:'red'}}>Enter your address</p>}   
          </div>
          <button>Submit</button>
      </form>
  </div>);
};

ReactFormHookes.propTypes = {};

ReactFormHookes.defaultProps = {};

export default ReactFormHookes;
