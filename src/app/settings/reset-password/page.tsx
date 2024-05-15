"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [currentPassword, setCurrentPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Password:", password);
  };

  return (
    <div className="flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Change your password</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Old password</Label>
            <Input
              id="currentPassword"
              type="currentPassword"
              placeholder="Enter current passowrd"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Enter new password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter new passowrd"
              value={password?.password}
              onChange={(e) =>
                setPassword({ ...password, password: e.target.value })
              }
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Confirm new password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Enter new passowrd"
              value={password?.confirmPassword}
              onChange={(e) =>
                setPassword({ ...password, confirmPassword: e.target.value })
              }
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full" onClick={(e) => handleSubmit(e)}>
            Change Password
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ChangePassword;
