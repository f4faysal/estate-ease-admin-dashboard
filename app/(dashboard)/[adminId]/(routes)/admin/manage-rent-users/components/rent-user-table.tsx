"use client";
import Loading from "@/app/loading";
import { DataTable } from "@/components/data-table";
import { useRentUsersQuery } from "@/redux/api/rentUsersApi";
import dayjs from "dayjs";
import { RentUserColumn, columns } from "./columns";

const RentUserTable = () => {
  const { data, isLoading } = useRentUsersQuery({});
  const { rentUsers, meta } = data || {};

  //   @ts-ignore
  const allAdmin: RentUserColumn[] = rentUsers?.map((item: any) => ({
    id: item?.id,
    name: `${item?.name.firstName} ${item?.name.lastName}`,
    email: item?.email,
    dateOfBirth: item?.dateOfBirth,
    contactNo: item?.contactNo,
    emergencyNo: item?.emergencyContactNo,
    gender: item?.gender,
    bloodGroup: item?.bloodGroup,
    presentAddress: item?.presentAddress,
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

export default RentUserTable;
