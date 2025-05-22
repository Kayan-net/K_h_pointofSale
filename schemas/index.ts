import * as z from 'zod';

export const LoginSchema = z.object({
    email: z.string().email({ message: "Valid email required" }),
    password: z.string().min(8, { message: "Minimum 8 characters required" })
});

export const RegisterSchema = z.object({
    email: z.string().email({ message: "Valid email required" }),
    password: z.string().min(8, { message: "Minimum 8 characters required" }),
    confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"]
});

// Add your login function export here
export async function login(values: z.infer<typeof LoginSchema>) {
  // Dummy implementation, replace with your actual login logic
  if (values.email === "test@example.com" && values.password === "password123") {
    return { success: "Login successful!" };
  } else {
    return { error: "Invalid email or password." };
  }
}