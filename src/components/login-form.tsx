"use client";

import animationData from "@/components/lottie/animation.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { errorToast, successToast } from "@/lib/toast";
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
} from "./ui/form";
import { authUser } from "@/constants/data";

const formSchema = z.object({
  username: z.string().nonempty("Username is required").max(50),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginRequest = z.infer<typeof formSchema>;

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginRequest>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const { handleSubmit, watch } = form;

  const username = watch("username");

  function onSubmit(data: LoginRequest) {
    if (
      data.username !== authUser.username ||
      data.password !== authUser.password
    ) {
      errorToast("Invalid username or password");
      return;
    }
    successToast("Login successful!");
    router.replace("/dashboard/overview");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Side: Lottie Animation */}
        <div className="w-1/2 bg-blue-600 p-8 hidden md:block">
          <Lottie
            animationData={animationData}
            loop={true}
            className="w-full h-full"
          />
        </div>
        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col items-center justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Welcome{username && <span>, {username}</span>}!
          </h2>
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
                Login
              </Button>
            </form>
          </Form>
          <p className="mt-4 text-center text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
