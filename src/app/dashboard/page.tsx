"use client";
import Link from "next/link";
import { CircleUser, Menu, Moon, Package2, Search, Sun } from "lucide-react";
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
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
// import Header from "../Header";

const Dashboard = () => {
  const [invoiceData, setInvoiceData] = useState([
    {
      invoice: "inv001",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "inv002",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "inv003",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "inv004",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "inv005",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "inv006",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "inv007",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "inv008",
      paymentStatus: "Paid",
      totalAmount: "$250.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "inv009",
      paymentStatus: "Pending",
      totalAmount: "$150.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "inv010",
      paymentStatus: "Unpaid",
      totalAmount: "$350.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "inv011",
      paymentStatus: "Paid",
      totalAmount: "$450.00",
      paymentMethod: "Credit Card",
    },
    {
      invoice: "inv012",
      paymentStatus: "Paid",
      totalAmount: "$550.00",
      paymentMethod: "PayPal",
    },
    {
      invoice: "inv013",
      paymentStatus: "Pending",
      totalAmount: "$200.00",
      paymentMethod: "Bank Transfer",
    },
    {
      invoice: "inv014",
      paymentStatus: "Unpaid",
      totalAmount: "$300.00",
      paymentMethod: "Credit Card",
    },
  ]);
  const [searchStr, setSearchStr] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [invoices, setInvoices] = useState([]);
  const [totalPages, setTotalPages] = useState();
  const [pageArray, setPageArray] = useState([]);
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
  }, [searchStr, currentPage]);
  useEffect(() => {
    setTotalPages(Math.ceil(invoiceData.length / totalItemsPerPage));
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

  const [formValue, setFormValue] = useState();
  const formSchema = z.object({
    invoice: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    if (
      values.invoice === undefined ||
      values.paymentMethod === undefined ||
      values.paymentStatus === undefined ||
      values.totalAmount === undefined
    ) {
      return;
    } else {
      setInvoiceData([...invoiceData, values]);
    }
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* <Header /> */}

      <main className="flex  flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="">
          <Card>
            <div className="flex justify-between items-center m-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  onChange={(e) => {
                    let searchValue = e.target.value;
                    setSearchStr(searchValue);
                    searchValue = searchValue.trim();
                    if (searchValue === "") {
                      setInvoices(invoiceData);
                    }
                  }}
                />
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="ml-auto">Add Data</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <h2 className="font-bold text-2xl">Add Data</h2>
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
                              <Input
                                placeholder="invoice"
                                {...field}
                                // defaultValue={formValue.invoice}
                              />
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
                            <FormLabel>Status</FormLabel>
                            <FormControl>
                              <Input placeholder="status" {...field} />
                            </FormControl>

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

                      <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => form.reset()}>
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction type="submit">
                          Submit
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </form>
                  </Form>
                </AlertDialogContent>
              </AlertDialog>
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
      <footer className={"text-gray-700"}>
        <div className="container mx-auto py-2 px-4">
          <p className="text-center">© Desinged by Angularminds</p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
