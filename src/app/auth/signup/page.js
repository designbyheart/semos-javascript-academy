import NavigationMenu from "@/components/molecules/NavigationMenu";
import SignUpForm from "@/components/organisms/SignupForm";

export default function SignUpPage() {
    return (
      <div className="auth-page sign-up-page">
        <NavigationMenu/>
        <SignUpForm />
      </div>
    );
}