"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here (e.g., send login credentials to the server)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  const registration = () => {
    console.log("first");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[350px] space-y-4">
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
        </CardHeader>
        <CardContent>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="input-field mb-4"
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
              className="input-field mb-4"
              required
            />
            <div className="flex justify-center">
              <Button type="submit" className="btn-primary w-[45%]">
                Login
              </Button>
            </div>
            <div className="flex justify-center">OR</div>
            <div className="flex justify-center">
              <Button
                variant="link"
                className="text-blue-500 hover:underline focus:underline"
                onClick={() => registration()}
              >
                Register new account
              </Button>
            </div>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
