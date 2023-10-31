"use client";
import Loading from "@/app/loading";
import { DataTable } from "@/components/data-table";
import { useAdminsQuery } from "@/redux/api/adminApi";
import dayjs from "dayjs";
import { useState } from "react";
import { AdminColumn, columns } from "./columns";

const AdminTable = () => {
  const [admindata, setAdminData] = useState([]);

  const { data, isLoading } = useAdminsQuery({});

  const { admin, meta } = data || {};

  //   @ts-ignore
  const allAdmin: AdminColumn[] = admin?.map((item: any) => ({
    id: item?.id,
    name: `${item?.name.firstName} ${item?.name.lastName}`,
    email: item?.email,
    dateOfBirth: item?.dateOfBirth,
    contactNo: item?.contactNo,
    emergencyNo: item?.emergencyContactNo,
    gender: item?.gender,
    designation: item?.designation,
    createdAt: dayjs(item.createdAt).format("D MMM YYYY hh:mmA"),
  }));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <DataTable searchKey="name" columns={columns} data={allAdmin || []} />
    </div>
  );
};

export default AdminTable;
