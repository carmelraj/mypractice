import React from 'react';
import PropTypes from 'prop-types';
import './ReactFormHookesMui.css';
import {useForm} from 'react-hook-form';
import UseInput from '../../../Components/Form/Input/UseInput';
const ReactFormHookesMui = () => {
  // const {register, handleSubmit, formState:{errors}} = useForm({
  //   defaultValues:{name:'',address:''},mode:'onSubmit'
  // })
  const {register, handleSubmit, formState:{errors}} = useForm({
    defaultValues:{name:'',address:{address:''}},mode:'onSubmit'
  })

  const onSubmit = (data) => {
    console.log(data)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    // setFormData((prevFormData) => ({
    //   ...prevFormData,
    //   [name]: value,
    // }));
  };


  return(<div className="ReactFormHookesMui" data-testid="ReactFormHookesMui">
    <form onSubmit={handleSubmit(onSubmit)}>
        <UseInput name="name" id="name" regs="name"    {...register('name',{
          required:'sdsds1'         
      })} errors={errors} required="Enter name" label='Enter Name' type="text"  />
        <UseInput name="address" regs="address" regs1="address" id="address"    {...register('address.address',{
          required:true         
      })} errors={errors} required="Enter address" label='Enter address' type="text"  />
        <button>Submit</button>
    </form>
  </div>);
};

ReactFormHookesMui.propTypes = {};

ReactFormHookesMui.defaultProps = {};

export default ReactFormHookesMui;
