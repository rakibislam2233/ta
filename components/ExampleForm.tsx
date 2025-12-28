"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { cn } from "@/lib/utils";

// Zod schema for form validation
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ExampleForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form data:", data);
    alert(`Form submitted: ${JSON.stringify(data, null, 2)}`);
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-card rounded-lg border border-border shadow-sm">
      <h2 className="text-2xl font-semibold mb-4 text-foreground">
        Example Form with React Hook Form + Zod
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Name
          </label>
          <input
            id="name"
            {...register("name")}
            className={cn(
              "w-full px-3 py-2 border rounded-md",
              "bg-background text-foreground",
              "border-input focus:outline-none focus:ring-2 focus:ring-ring",
              errors.name && "border-destructive"
            )}
            placeholder="Enter your name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground mb-1"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className={cn(
              "w-full px-3 py-2 border rounded-md",
              "bg-background text-foreground",
              "border-input focus:outline-none focus:ring-2 focus:ring-ring",
              errors.email && "border-destructive"
            )}
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

