import LoginContainer from "@/containers/auth/login/Login";

export const metadata = {
  title: "로그인 | NEXTOMO",
  description: "로그인하여 다양한 서비스를 이용해보세요.",
};

export default function LoginPage() {
  return <LoginContainer />;
}
