import React from 'react';
import PropTypes from 'prop-types';
import './SingleFormMultipleStep.css';
import { useForm } from "react-hook-form";
const SingleFormMultipleStep = () => {
  // const [state, setState] = useAppState();
  // const {
  //   handleSubmit,
  //   register,
  //   watch,
  //   formState: { errors },
  // } = useForm({ defaultValues: state, mode: "onSubmit" });
  // const watchPassword = watch("password");
  // const navigate = useNavigate();
 
  // const saveData = (data) => {
  //   setState({ ...state, ...data });
  //   navigate("/education");
  // };
  return(<div className="SingleFormMultipleStep" data-testid="SingleFormMultipleStep">
     {/* <form onSubmit={handleSubmit(saveData)}>
      <fieldset>
        <legend>Contact</legend>
        <Field label="First name" error={errors?.firstName}>
          <Input
            {...register("firstName", { required: "First name is required" })}
            id="first-name"
          />
        </Field>
        
        <Field label="Last name" error={errors?.lastName}>
          <Input
            {...register("lastName", { required: "Last name is required" })}
            id="last-name"
          />
        </Field>
        <Field label="Email" error={errors?.email}>
          <Input
            {...register("email", { required: "Email is required" })}
            type="email"
            id="email"
          />
        </Field>
        <Field label="Password" error={errors?.password}>
          <Input
            {...register("password", { required: "Password is required" })}
            type="password"
            id="password"
          />
        </Field>
        <Field label="Confirm password" error={errors?.confirmPassword}>
          <Input
            {...register("confirmPassword", {
              required: "Confirm the password",
              validate: (value) =>
                value === watchPassword || "The passwords do not match",
            })}
            type="password"
            id="password-confirm"
          />
        </Field>
        <Button>Next {">"}</Button>
      </fieldset>
    </form> */}

  </div>)
};

SingleFormMultipleStep.propTypes = {};

SingleFormMultipleStep.defaultProps = {};

export default SingleFormMultipleStep;
