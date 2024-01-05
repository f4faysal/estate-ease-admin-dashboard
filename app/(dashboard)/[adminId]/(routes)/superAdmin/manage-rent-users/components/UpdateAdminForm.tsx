"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import * as z from "zod";

import Container from "@/components/container";
import ImageUpload from "@/components/image-upload";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import FormHading from "@/components/ui/form-hading";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useUpdateRentUsersMutation } from "@/redux/api/rentUsersApi";
import { adminSchema } from "@/schemas/admin";

interface UpdateAdminProps {
  initialData: any | null;
}

const UpdateAdminFrom: React.FC<UpdateAdminProps> = ({ initialData }) => {
  const [updateAdmin] = useUpdateRentUsersMutation();

  const form = useForm<z.infer<typeof adminSchema>>({
    resolver: zodResolver(adminSchema),
    defaultValues: initialData || {},
  });

  const onSubmit = async (values: z.infer<typeof adminSchema>) => {
    const paylod = {
      id: initialData?.id,
      data: values,
    };
    try {
      const res: any = await updateAdmin(paylod);
      if (res?.data) {
        toast.success("Rent User Updated successfully");
      } else {
        toast.error(res?.error);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
    }
  };

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <Heading
        title="Edit Admin"
        description="Update admin information and manage admin permissions"
      />
      <Separator />
      <Container>
        <div className="space-y-4 py-2 pb-4">
          <div className="space-y-2">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                {/* Personal Info */}
                <div className="border px-3 py-5 rounded-md shadow">
                  <FormHading title="Personal Information" />
                  <div className=" grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="">
                      <FormField
                        control={form.control}
                        name="name.firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="First Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className="">
                      <FormField
                        control={form.control}
                        name="name.middleName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Middle Name</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Middle Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="name.lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Last Name"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input
                                disabled={true}
                                placeholder="exmpole@gmail.com"
                                type="email"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="dateOfBirth"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Det of Birth</FormLabel>
                            <FormControl>
                              <Input
                                disabled={true}
                                placeholder="Select Date"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="contactNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Contact No</FormLabel>
                            <FormControl>
                              <Input
                                disabled={true}
                                placeholder="Contact No"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="emergencyContactNo"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Emergency Contact No</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Emergency Contact No"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                    <div className="">
                      <FormField
                        control={form.control}
                        name="gender"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Gender</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Gender"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>
                {/* Admin info */}
                <div className="border mt-3 px-3 py-5 rounded-md shadow">
                  <FormHading title="Admin Information" />

                  <div className="grid grid-cols-2 gap-8">
                    <div className="">
                      <FormField
                        control={form.control}
                        name="profileImage"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Profile image</FormLabel>
                            <FormControl>
                              <ImageUpload
                                value={field.value ? [field.value] : []}
                                // disabled={loading}
                                onChange={(url) => field.onChange(url)}
                                onRemove={() => field.onChange("")}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <div className=".">
                      <FormField
                        control={form.control}
                        name="designation"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Designation</FormLabel>
                            <FormControl>
                              <Input
                                // disabled={loading}
                                placeholder="Designation"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                  <Button type="submit">Save changes</Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default UpdateAdminFrom;
