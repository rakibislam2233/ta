import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <section className="min-h-screen bg-background flex justify-center items-center">
      <div className="w-full relative z-10">{children}</div>
    </section>
  );
}
