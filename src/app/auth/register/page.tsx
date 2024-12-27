import RegisterContainer from "@/containers/auth/register/Register";

export const metadata = {
  title: "회원가입 | NEXTOMO",
  description: "회원이 되어 다양한 서비스를 이용해보세요.",
};

export default function RegisterPage() {
  return <RegisterContainer />;
}
