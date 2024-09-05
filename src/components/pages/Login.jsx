import PageLayout from "../common/PageLayout";
import PageTitle from "../common/PageTitle";
import LoginForm from "../form/LoginForm";
import AuthLayout from "../common/AuthLayout";

const Login = () => {
  return (
    <PageLayout>
      <AuthLayout>
        <PageTitle titleText="Login" />
        <LoginForm />
      </AuthLayout>
    </PageLayout>
  );
};

export default Login;
