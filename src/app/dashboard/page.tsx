"use client";
import Link from "next/link";
import {
  CircleUser,
  ListFilter,
  Menu,
  Moon,
  Package2,
  Search,
  Sun,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TableDemo } from "../data/Employee";
import { useEffect, useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
// import Header from "../Header";
import { data } from "./invoiceData";

const Dashboard = () => {
  const [invoiceData, setInvoiceData] = useState(data);
  const [searchStr, setSearchStr] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [invoices, setInvoices] = useState<any>([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [pageArray, setPageArray] = useState<any>([]);

  // for filtering data

  let totalItemsPerPage = 5;
  const displayItems = (): any => {
    let start = currentPage * totalItemsPerPage;
    let end = start + totalItemsPerPage;
    let filteredArray = invoiceData
      .slice(start, end)
      .filter((item: any) =>
        item.invoice.toLowerCase().includes(searchStr.toLowerCase())
      );

    setInvoices(filteredArray);
  };
  useEffect(() => {
    displayItems();
  }, [searchStr, currentPage, invoiceData]);
  useEffect(() => {
    setTotalPages(Math.ceil(invoiceData.length / totalItemsPerPage));
  }, [invoiceData]);
  useEffect(() => {
    if (searchStr.length > 0)
      setTotalPages(Math.ceil(invoices.length / totalItemsPerPage));
    else setTotalPages(Math.ceil(invoiceData.length / totalItemsPerPage));
  }, [searchStr]);
  useEffect(() => {
    setInvoiceData(data);
  }, []);
  useEffect(() => {
    setPageArray(Array.from({ length: totalPages }, () => 1));
  }, [totalPages]);
  const handlePrevPage = () => {
    if (currentPage > 0) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) setCurrentPage(currentPage + 1);
  };
  const [btnDisable, setBtnDisable] = useState(true);
  const form = useForm();

  const { register } = useForm();
  const [formValue, setFormValue] = useState();
  const formSchema = z.object({
    invoice: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const onSubmit = (values: any) => {
    console.log(values);
    if (
      values.invoice === undefined ||
      values.paymentMethod === undefined ||
      values.paymentStatus === undefined ||
      values.totalAmount === undefined
    ) {
      return;
    } else {
      setInvoiceData([...invoiceData, values]);
      form.reset();
    }
  };

  const [showStatusBar, setShowStatusBar] = useState<any>(true);
  const [showActivityBar, setShowActivityBar] = useState<any>(false);
  const [showPanel, setShowPanel] = useState<any>(false);
  let [filterArray, setFilterArray] = useState<any>([]);

  useEffect(() => {
    if (filterArray && filterArray.length > 0) {
      setInvoiceData(
        data.filter((d: any) => {
          return filterArray.includes(d.paymentStatus);
        })
      );
    } else {
      setInvoiceData(data);
    }
  }, [filterArray]);
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* <Header /> */}

      <main className="flex  flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="">
          <Card>
            <div className="flex justify-between items-center m-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  onChange={(e) => {
                    let searchValue = e.target.value;
                    setSearchStr(searchValue);
                  }}
                />
              </div>
              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="m-2" asChild>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1 text-sm h-10"
                    >
                      <ListFilter className=" w-3.5" />
                      <span className="sr-only sm:not-sr-only">Filter</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                    <DropdownMenuSeparator />

                    <DropdownMenuCheckboxItem
                      checked={filterArray.includes("Paid") ? true : false}
                      onClick={() => {
                        if (filterArray.includes("Paid")) {
                          setFilterArray(
                            filterArray.filter(
                              (arr: any) => !arr.includes("Paid")
                            )
                          );
                        } else {
                          setFilterArray([...filterArray, "Paid"]);
                        }
                      }}
                    >
                      Paid
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      onClick={() => {
                        if (filterArray.includes("Unpaid")) {
                          setFilterArray(
                            filterArray.filter(
                              (arr: any) => !arr.includes("Unpaid")
                            )
                          );
                        } else {
                          setFilterArray([...filterArray, "Unpaid"]);
                        }
                      }}
                      checked={filterArray.includes("Unpaid") ? true : false}
                    >
                      Unpaid
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem
                      onClick={() => {
                        if (filterArray.includes("Pending")) {
                          setFilterArray(
                            filterArray.filter(
                              (arr: any) => !arr.includes("Pending")
                            )
                          );
                        } else {
                          setFilterArray([...filterArray, "Pending"]);
                        }
                      }}
                      checked={filterArray.includes("Pending") ? true : false}
                    >
                      Pending
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              {filterArray &&
                filterArray.map((ele: any) => {
                  return (
                    <Button size="sm" variant="secondary" className="m-1">
                      {ele}
                      <X
                        onClick={() =>
                          setFilterArray(
                            filterArray.filter((ar: any) => ar != ele)
                          )
                        }
                        className="text-red-500 cursor-pointer"
                      />
                    </Button>
                  );
                })}
              {filterArray && filterArray.length > 0 && (
                <Button size="sm" onClick={() => setFilterArray([])}>
                  Clear
                </Button>
              )}
              <Dialog onOpenChange={() => form.reset()}>
                <DialogTrigger asChild>
                  <Button className="ml-auto">Add invoice</Button>
                </DialogTrigger>
                <DialogContent>
                  <h2 className="font-bold text-2xl">Add Invoice</h2>

                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-8"
                    >
                      <FormField
                        control={form.control}
                        name="invoice"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Invoice</FormLabel>
                            <FormControl>
                              <Input placeholder="invoice" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="paymentMethod"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Method</FormLabel>
                            <FormControl>
                              <Input placeholder="method" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="paymentStatus"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select status" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="Paid">Paid</SelectItem>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="Unpaid">Unpaid</SelectItem>
                              </SelectContent>
                            </Select>

                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="totalAmount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Total</FormLabel>
                            <FormControl>
                              <Input placeholder="total" {...field} />
                            </FormControl>

                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <DialogFooter>
                        <DialogClose onClick={() => form.reset()}>
                          <Button type="button" variant="secondary">
                            Close
                          </Button>
                        </DialogClose>
                        <DialogClose asChild>
                          <Button type="submit">Submit</Button>
                        </DialogClose>
                      </DialogFooter>
                    </form>
                  </Form>
                </DialogContent>
              </Dialog>
            </div>

            <TableDemo
              invoices={invoices}
              setInvoices={setInvoices}
              handleNextPage={handleNextPage}
              handlePrevPage={handlePrevPage}
              pageArray={pageArray}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              invoiceData={invoiceData}
              setInvoiceData={setInvoiceData}
            />
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
