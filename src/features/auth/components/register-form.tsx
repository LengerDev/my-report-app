"use client";

import animationData from "@/components/lottie/animation.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { successToast } from "@/lib/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  username: z.string().nonempty("Username is required").max(50),
  email: z
    .string()
    .email("Invalid email address")
    .nonempty("Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegisterRequest = z.infer<typeof formSchema>;

export default function RegisterForm() {
  const router = useRouter();
  const form = useForm<RegisterRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = (data: RegisterRequest) => {
    console.log("Register data:", data);
    successToast("Registration successful!");
    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Side: Register Form */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <Form {...form}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 w-full max-w-sm"
            >
              <div>
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your email"
                          type="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div>
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your password"
                          type="password"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit" className="w-full">
                Register
              </Button>
            </form>
          </Form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
        {/* Right Side: SVG Animation */}
        <div className="w-1/2 bg-blue-600 p-8 hidden md:block">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
