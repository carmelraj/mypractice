import React,{useState,useRef} from 'react';
import PropTypes from 'prop-types';
import './FormMultiStep.css';
import { useForm } from 'react-hook-form';
const FormMultiStep = () => {

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });

  const {
    register: register2,
    formState: { errors: errors2 },
    handleSubmit: handleSubmit2,
  } = useForm({
    mode: "onBlur",
  });
  
  const ref = useRef()
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const onSubmitEmail = (data) => {
    alert(JSON.stringify(data));
  };
  return(<div className="FormMultiStep" data-testid="FormMultiStep">
    {/* <form key={1} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text" name="firstName" {...register('firstName',{ required: true })}
          />
          {errors.firstName && <p>This is required</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type='text' name="lastName" {...register('emalastNameil',{ required: true })}
          />
          {errors.lastName && <p>This is required</p>}
        </div>
        <input type="submit" />
      </form>

      <form key={2} onSubmit={handleSubmit2(onSubmitEmail)}>
        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email
          </label>
          <input type="text" name="email"  {...register2('email',{ required: true })} />
          {errors2.email && <p>This is required</p>}
        </div>
        <input type="submit" />
      </form> */}
      <form key={1} onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input type="text"
            name="firstName"
            placeholder="bill"
            {...register('firstName',{ required: true })}
          />
          {errors.firstName && <p>This is required</p>}
        </div>

        <div>
          <label htmlFor="lastName">Last Name</label>
          <input type="text"
            name="lastName"
            placeholder="luo"
            {...register('lastName',{ required: true })}
          />
          {errors.lastName && <p>This is required</p>}
        </div>
        <input type="submit" />
      </form>

      <form key={2} onSubmit={handleSubmit2(onSubmitEmail)}>
        <div>
          <label htmlFor="email" placeholder="bluebill1049@hotmail.com">
            Email
          </label>
          <input type="text" name="email" {...register2('email',{ required: true })} />
          {errors2.email && <p>This is required</p>}
        </div>
        <input type="submit" />
      </form>
  </div>)
};

FormMultiStep.propTypes = {};

FormMultiStep.defaultProps = {};

export default FormMultiStep;
