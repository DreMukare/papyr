const PageLayout = (props) => {
  const { children } = props;
  return <div className="px-10 h-full w-full">{children}</div>;
};

export default PageLayout;
