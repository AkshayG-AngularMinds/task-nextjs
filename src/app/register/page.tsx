"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
// import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Email must be at least 2 characters.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  //   contact: z.string().required(2, {
  // message: "Contact number is required.",
  //   }),
  contact: z.string({ message: "Contact number is required" }),
});

const InputForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[400px] space-y-4">
        <CardHeader className="text-center">
          <CardTitle>Register new account</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6 ml-4 "
          >
            <div className="ml-4">
              <div className="flex justify-center mb-5">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      {/* <FormLabel>Username</FormLabel> */}
                      <p className="font-bold">Username</p>
                      <FormControl>
                        <Input placeholder="username" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center mb-5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <p className="font-bold">Email</p>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center mb-5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <p className="font-bold">Password</p>
                      <FormControl>
                        <Input
                          type="password"
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex justify-center mb-5">
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem>
                      <p className="font-bold">Contact</p>
                      <FormControl>
                        <Input type="number" placeholder="contact" {...field} />
                      </FormControl>

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="mb-4" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </Card>
    </div>
  );
};

export default InputForm;
