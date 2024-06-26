"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Pencil, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function TableDemo({
  invoices,
  setInvoices,
  invoiceData,
  setInvoiceData,
  handlePrevPage,
  handleNextPage,
  pageArray,
  currentPage,
  setCurrentPage = { setCurrentPage },
}: any) {
  const form = useForm();

  const [formValue, setFormValue] = useState<any>();
  const formSchema = z.object({
    country: z.string().min(2, {
      message: "Username must be at least 2 characters.",
    }),
  });

  const onSubmit = (values: any) => {
    if (values.invoice === undefined) {
      values.invoice = formValue.invoice;
    }
    if (values.paymentMethod === undefined) {
      values.paymentMethod = formValue.paymentMethod;
    }
    if (values.paymentStatus === undefined) {
      values.paymentStatus = formValue.paymentStatus;
    }
    if (values.totalAmount === undefined) {
      values.totalAmount = formValue.totalAmount;
    }
    let newInvoices = invoices.map((inv: any) => {
      if (inv.invoice == formValue.invoice) {
        return values;
      }
      return inv;
    });
    setInvoices(newInvoices);
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice: any, i: any) => (
            <TableRow key={invoice.invoice}>
              <TableCell className="font-medium">{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell className="flex space-x-1">
                <Dialog onOpenChange={() => form.reset()}>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      onClick={() => setFormValue(invoices[i])}
                    >
                      <Pencil className="cursor-pointer" size={13} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <h2 className="font-bold text-2xl">Edit Invoice</h2>

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
                                  defaultValue={formValue?.invoice}
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
                                <Input
                                  placeholder="method"
                                  {...field}
                                  defaultValue={formValue?.paymentMethod}
                                />
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
                                defaultValue={
                                  field.value || formValue?.paymentStatus
                                }
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select status" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="Paid">Paid</SelectItem>
                                  <SelectItem value="Pending">
                                    Pending
                                  </SelectItem>
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
                                <Input
                                  placeholder="total"
                                  {...field}
                                  defaultValue={formValue?.totalAmount}
                                />
                              </FormControl>

                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <DialogFooter>
                          <DialogClose asChild>
                            <Button
                              type="button"
                              variant="secondary"
                              onClick={() => form.reset()}
                            >
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

                <AlertDialog>
                  <AlertDialogTrigger asChild className="gap-5">
                    <Button variant="destructive">
                      <Trash2 className="cursor-pointer" size={13} />
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>
                        Are you absolutely sure?
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete invoice from your account.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction
                        onClick={() =>
                          setInvoiceData(
                            invoiceData.filter(
                              (inv: any) => inv.invoice !== invoice.invoice
                            )
                          )
                        }
                      >
                        Continue
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {invoices && invoices.length ? (
        <Pagination className="flex justify-end">
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious onClick={handlePrevPage} />
            </PaginationItem>

            {pageArray?.map((p: any, i: number) => (
              <PaginationItem>
                <PaginationLink
                  isActive={currentPage === i ? true : false}
                  onClick={() => setCurrentPage(i)}
                >
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}

            <PaginationItem className="cursor-pointer">
              <PaginationNext onClick={handleNextPage} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      ) : (
        ""
      )}
    </div>
  );
}
