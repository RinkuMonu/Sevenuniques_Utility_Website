import MultiStepAuthForm from "../../../components/auth/MultiStepAuthForm";

export const metadata = {
  title: "Sign Up | Finunique",
  description: "Create your personal Finunique account.",
};

export default function SignupPage() {
  return <MultiStepAuthForm mode="signup" />;
}
