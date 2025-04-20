import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-blue-100 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-6">
        <CardContent>
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back!</h1>
          <form className="space-y-5">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="you@example.com" className="mt-1" />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input type="password" id="password" placeholder="••••••••" className="mt-1" />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-sm">Remember me</Label>
              </div>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>

            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">Login</Button>

            <p className="text-center text-sm text-gray-600">
              Don't have an account? <a href="#" className="text-blue-600 hover:underline">Sign up</a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
