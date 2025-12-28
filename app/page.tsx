import ExampleForm from "@/components/ExampleForm";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-8">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Talenzy Frontend
          </h1>
          <p className="text-lg text-muted-foreground">
            Next.js + TypeScript + Tailwind CSS + shadcn/ui + Zod + React Hook Form
          </p>
        </div>
        <ExampleForm />
      </div>
    </div>
  );
}
