"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
// import Header from "../Header";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";

const Profile = () => {
  const form = useForm();
  const [personalData, setPersonalData] = useState({
    firstName: "Akshay",
    lastName: "Gawade",
    email: "akshay@gmail.com",
    phone: "+91 5465464645",
    bio: "Software Developer",
    gender: "Male",
  });
  const [address, setAddress] = useState({
    country: "India",
    city: "Pune",
    postalCode: "546465",
    state: "Maharashtra",
  });
  const formSchema = z.object({
    username: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });
  const onSubmit = (values: any) => {
    // console.log(values);
    if (values.country === undefined) {
      values.country = address.country;
    }
    if (values.city === undefined) {
      values.city = address.city;
    }
    if (values.postalCode === undefined) {
      values.postalCode = address.postalCode;
    }
    if (values.state === undefined) {
      values.state = address.state;
    }
    console.log(values);

    setAddress(values);
  };
  const onSubmit2 = (values: any) => {
    if (values.firstName === undefined) {
      values.firstName = personalData.firstName;
    }
    if (values.lastName === undefined) {
      values.lastName = personalData.lastName;
    }
    if (values.email === undefined) {
      values.email = personalData.email;
    }
    if (values.phone === undefined) {
      values.phone = personalData.phone;
    }
    if (values.bio === undefined) {
      values.bio = personalData.bio;
    }
    if (values.gender === undefined) {
      values.gender = personalData.gender;
    }
    console.log(values);

    setPersonalData(values);
  };
  return (
    <div className="items-center justify-center">
      {/* <Header /> */}
      <div className="mx-auto max-w-screen-lg">
        <CardHeader>
          <CardTitle className="text-xl">My profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Card className="flex p-3">
            <div className="flex items-center justiflexfy-center">
              <Avatar className="h-20 w-20">
                {/* <AvatarImage src="https://en.wikipedia.org/wiki/Virat_Kohli#/media/File:Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg" /> */}
                <AvatarFallback>AG</AvatarFallback>
              </Avatar>
            </div>
            <div className="ml-10">
              <small className="p-1 text-sm font-medium leading-none">
                {personalData.firstName + " " + personalData.lastName}
              </small>
              <p className="p-1 text-sm text-muted-foreground">
                {personalData.bio}
              </p>
              <p className="p-1 text-sm text-muted-foreground">
                {" "}
                {personalData.phone}
              </p>
            </div>
          </Card>

          <Card className=" p-3 mt-5 ">
            <div className="text-lg font-semibold">Personal Information</div>

            <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-3 lg:col-span-1">
                <small className="p-2 text-sm font-medium leading-none">
                  First Name
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {personalData.firstName}
                </p>
                <small className="p-2 text-sm font-medium leading-none">
                  Email Address
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {personalData.email}
                </p>

                <small className="p-2 text-sm font-medium leading-none">
                  Bio
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {personalData.bio}
                </p>
              </div>
              <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
                <small className="p-2 text-sm font-medium leading-none">
                  Last Name
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {personalData.lastName}
                </p>
                <small className="p-2 text-sm font-medium leading-none">
                  Phone
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {personalData.phone}
                </p>
                <small className="p-2 text-sm font-medium leading-none">
                  Gender
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {personalData.gender}
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <Dialog onOpenChange={() => form.reset()}>
                  <DialogTrigger asChild>
                    <Button variant={"outline"} className="float-right">
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <h2 className="font-bold text-2xl">
                      Edit Personal Details
                    </h2>

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit2)}
                        className="space-y-8"
                      >
                        <div className="flex justify-center gap-2">
                          <FormField
                            control={form.control}
                            name="firstName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Firstname</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="firstName"
                                    {...field}
                                    defaultValue={personalData.firstName}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="lastName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Lastname</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="city"
                                    {...field}
                                    defaultValue={personalData.lastName}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <div className="flex justify-center gap-2">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="email"
                                    {...field}
                                    defaultValue={personalData.email}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="phone"
                                    {...field}
                                    defaultValue={personalData.phone}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex justify-center gap-2">
                          <FormField
                            control={form.control}
                            name="bio"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Bio</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="bio"
                                    {...field}
                                    defaultValue={personalData.bio}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="gender"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Gender</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="city"
                                    {...field}
                                    defaultValue={personalData.gender}
                                  />
                                </FormControl>

                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <DialogFooter>
                          <DialogClose onClick={() => form.reset()}>
                            Cancel
                          </DialogClose>
                          <DialogClose>
                            <Button type="submit">Submit</Button>
                          </DialogClose>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
          <Card className=" p-3 mt-5 ">
            <div className="text-lg font-semibold">Address</div>
            <div className="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="p-2 col-span-1 md:col-span-2 lg:col-span-1">
                <small className="p-2 text-sm font-medium leading-none">
                  Country
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {address.country}
                </p>
                <small className="p-2 text-sm font-medium leading-none">
                  Postal Code
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {address.postalCode}
                </p>
              </div>
              <div className="p-2 col-span-1 md:col-span-1 lg:col-span-1">
                <small className="p-2 text-sm font-medium leading-none">
                  City
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {address.city}
                </p>
                <small className="p-2 text-sm font-medium leading-none">
                  State
                </small>
                <p className="p-2 text-sm text-muted-foreground">
                  {address.state}
                </p>
              </div>
              <div className="col-span-1 md:col-span-2 lg:col-span-1">
                <Dialog onOpenChange={() => form.reset()}>
                  <DialogTrigger asChild>
                    <Button variant={"outline"} className="float-right">
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <h2 className="font-bold text-2xl">Edit Data</h2>

                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="space-y-8"
                      >
                        <FormField
                          control={form.control}
                          name="country"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Country</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="country"
                                  {...field}
                                  defaultValue={address.country}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="city"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>City</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="city"
                                  {...field}
                                  defaultValue={address.city}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="postalCode"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Postal code</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="postal code"
                                  {...field}
                                  defaultValue={address.postalCode}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="state"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>State</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="state"
                                  {...field}
                                  defaultValue={address.state}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <DialogFooter>
                          <DialogClose onClick={() => form.reset()}>
                            Cancel
                          </DialogClose>
                          <DialogClose>
                            <Button type="submit">Submit</Button>
                          </DialogClose>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </Card>
        </CardContent>
      </div>
    </div>
  );
};

export default Profile;
