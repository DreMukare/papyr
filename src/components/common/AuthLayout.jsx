const AuthLayout = (props) => {
  const { children } = props;
  return (
    <div className="flex justify-center items-center flex-col w-full h-full gap-16">
      {children}
    </div>
  );
};

export default AuthLayout;
