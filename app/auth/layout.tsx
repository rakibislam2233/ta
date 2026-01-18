import AuthLayout from "@/components/layout/AuthLayout/AuthLayout";

export default function AuthLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthLayout>{children}</AuthLayout>;
}
