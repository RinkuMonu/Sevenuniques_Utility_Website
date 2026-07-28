import MultiStepAuthForm from "../../../components/auth/MultiStepAuthForm";

export const metadata = {
  title: "Sign In | Finunique",
  description: "Sign in to your Finunique account.",
};

export default function LoginPage() {
  return <MultiStepAuthForm mode="login" />;
}
