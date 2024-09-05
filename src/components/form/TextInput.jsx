const Input = (props) => {
  const { register, type, name, isRequired, placeHolder } = props;

  return (
    <div className="my-5 flex flex-col gap-1 w-full justify-center items-start font-roboto">
      <label htmlFor={name.toLowerCase()} className="text-dark">
        {name}
      </label>
      <input
        className="border-b border-b-dark border-b-1px w-full focus:outline-none"
        type={type}
        placeholder={placeHolder}
        {...register(name, { required: isRequired })}
      />
    </div>
  );
};

export default Input;
