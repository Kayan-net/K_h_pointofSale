import { RegisterSchema } from "@/schemas";
import { supabase } from "../app/lib/session";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const { email, password } = values;
  
  // Use Supabase auth API
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) return { error: error.message };
  if (!data.user?.id) return { error: "Registration failed" };

  // Store additional user data in separate table
  const { error: dbError } = await supabase
    .from('users')
    .insert([{ 
      id: data.user.id,
      email,
      created_at: new Date().toISOString()
    }]);

  return dbError 
    ? { error: "User created but profile setup failed" } 
    : { success: "Confirmation email sent!" };
};