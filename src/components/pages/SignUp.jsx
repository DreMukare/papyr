import PageLayout from "../common/PageLayout";
import PageTitle from "../common/PageTitle";
import SignUpForm from "../form/SignUpForm";
import AuthLayout from "../common/AuthLayout";

const SignUp = () => {
  return (
    <PageLayout>
      <AuthLayout>
        <PageTitle titleText="Create an account!" />
        <SignUpForm />
      </AuthLayout>
    </PageLayout>
  );
};

export default SignUp;
