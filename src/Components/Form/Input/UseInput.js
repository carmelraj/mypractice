import React from 'react';
import {TextField} from '@mui/material';
const UseInput = ({id,name,label,value,type,onChange,required,autoComplete,variant,register,errors,min, max, regs,regs1}) => {      
  console.log('name:',[regs],'id:',id)
  console.log('errors:',errors)
  console.log([name,regs1])
    return(<div><TextField        
        label={label}  
        name={name}
        id={id}
        value={value}
     
        register
        type={type}
        onChange={onChange}     
        inputProps={{          
          autoComplete: {autoComplete},
          maxLength: Number(max)
        }}  
        variant={variant}              
      />
      {errors?.regs1?.name.message}
      {errors?.name && <p className='text-danger'>{errors?.name?.message}</p>}
      {errors?.name?.regs1 && <p className='text-danger'>{errors?.name?.regs1?.message}</p>}
      {errors[name] && <p className='text-danger'>{errors?.[name].message}</p>}
      </div>)
}
export default UseInput; 