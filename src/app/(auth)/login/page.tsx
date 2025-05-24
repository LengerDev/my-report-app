"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login submitted", { email, password });
    router.push("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-full max-w-4xl shadow-lg rounded-lg overflow-hidden">
        {/* Left Side: SVG Animation */}
        <div className="w-1/2 bg-blue-600 p-8 hidden md:block">
          <svg
            viewBox="0 0 200 200"
            className="w-full h-full"
            preserveAspectRatio="xMidYMid meet"
          >
            <circle
              cx="100"
              cy="100"
              r="50"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
            >
              <animate
                attributeName="r"
                from="50"
                to="70"
                dur="2s"
                repeatCount="indefinite"
                values="50;70;50"
              />
              <animate
                attributeName="opacity"
                from="1"
                to="0.3"
                dur="2s"
                repeatCount="indefinite"
                values="1;0.3;1"
              />
            </circle>
            <circle
              cx="100"
              cy="100"
              r="30"
              fill="none"
              stroke="#ffffff"
              strokeWidth="4"
            >
              <animate
                attributeName="r"
                from="30"
                to="50"
                dur="2s"
                repeatCount="indefinite"
                values="30;50;30"
              />
              <animate
                attributeName="opacity"
                from="0.3"
                to="1"
                dur="2s"
                repeatCount="indefinite"
                values="0.3;1;0.3"
              />
            </circle>
          </svg>
        </div>
        {/* Right Side: Login Form */}
        <div className="w-full md:w-1/2 bg-white p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
                className="mt-1"
              />
            </div>
            <Button type="submit" className="w-full">
              Log In
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
