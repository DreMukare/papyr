import { useForm } from "react-hook-form";
import TextInput from "./TextInput";
import Button from "../common/Button";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-5/12">
      <TextInput
        register={register}
        placeHolder="Enter your email"
        isRequired={true}
        type="email"
        name="Email"
      />
      {/* {errors.email && <span>Email required</span>} */}
      <TextInput
        register={register}
        placeHolder="Enter your password"
        isRequired={true}
        type="password"
        name="Password"
      />
      {/* {errors.email && <span>Password required</span>} */}
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
