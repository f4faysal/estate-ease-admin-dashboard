"use client";

import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./cell-action";

export type RentUserColumn = {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyNo: string;
  gender: string;
  bloodGroup: string;
  presentAddress: string;
  createdAt: string;
};

export const columns: ColumnDef<RentUserColumn>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "dateOfBirth",
    header: "Date of Birth",
  },
  {
    accessorKey: "contactNo",
    header: "Phone",
  },
  {
    accessorKey: "emergencyNo",
    header: "NID No",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  { accessorKey: "bloodGroup", header: "Blood Group" },
  {
    accessorKey: "presentAddress",
    header: "Present Address",
  },
  {
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
