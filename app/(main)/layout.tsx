import MainLayout from "@/components/layout/MainLayout/MainLayout"

export default function MainAppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <MainLayout>{children}</MainLayout>
}

