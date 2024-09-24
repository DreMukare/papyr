import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import Button from "../common/Button";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/FirebaseService";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const isLoggedIn = login(data.email, data.password);
    if (isLoggedIn) {
      reset();
      navigate("/");
    } else {
      alert("Login failed, please try again");
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-5/12">
      <TextInput
        register={register}
        placeHolder="Enter your email"
        isRequired={true}
        type="email"
        name="email"
      />
      {errors.email && <span>Email required</span>}
      <TextInput
        register={register}
        placeHolder="Enter your password"
        isRequired={true}
        type="password"
        name="password"
      />
      {errors.password && <span>Password required</span>}
      <Button
        moreStyles="mt-5"
        type="submit"
        text="Login"
        isRounded
        fullWidth
      />
    </form>
  );
};

export default LoginForm;
