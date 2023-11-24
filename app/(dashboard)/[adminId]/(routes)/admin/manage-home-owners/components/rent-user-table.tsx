"use client";
import Loading from "@/app/loading";
import { DataTable } from "@/components/data-table";
import { useHomeOwnersQuery } from "@/redux/api/homeOwnersApi";
import dayjs from "dayjs";
import { RentUserColumn, columns } from "./columns";

const RentUserTable = () => {
  const { data, isLoading } = useHomeOwnersQuery({});
  const { homeOwners, meta } = data || {};

  //   @ts-ignore
  const allAdmin: RentUserColumn[] = homeOwners?.map((item: any) => ({
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
