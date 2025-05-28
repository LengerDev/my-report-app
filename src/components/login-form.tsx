"use client";

import animationData from "@/components/lottie/animation.json";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { successToast } from "@/lib/toast";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import Lottie from "lottie-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  username: z.string().nonempty("Username is required").max(50),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginRequest = z.infer<typeof formSchema>;

export default function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginRequest>({
    resolver: zodResolver(formSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = form;

  const username = watch("username");

  function onSubmit(data: LoginRequest) {
    console.log("Login data:", data);
    successToast("Login successful!");
    router.push("/dashboard");
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
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-full max-w-sm"
          >
            <div>
              <Label htmlFor="username">Username</Label>
              <Input
                {...register("username")}
                id="username"
                type="text"
                placeholder="Enter your username"
                className={cn(
                  "mt-1 w-full",
                  errors.username
                    ? "border-red-500 focus:border-red-500 focus-visible:border-ring focus-visible:ring-red-500"
                    : ""
                )}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                {...register("password")}
                id="password"
                type="password"
                placeholder="Enter your password"
                className={cn(
                  "mt-1 w-full",
                  errors.password
                    ? "border-red-500 focus:border-red-500 focus-visible:border-ring focus-visible:ring-red-500"
                    : ""
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
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
