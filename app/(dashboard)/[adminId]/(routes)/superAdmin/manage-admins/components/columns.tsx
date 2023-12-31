"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { CellAction } from "./cell-action";

export type AdminColumn = {
  id: string;
  name: string;
  email: string;
  dateOfBirth: string;
  contactNo: string;
  emergencyNo: string;
  gender: string;
  designation: string;
  createdAt: string;
};

export const columns: ColumnDef<AdminColumn>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => (
      <div
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center cursor-pointer"
      >
        ID
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </div>
    ),
    cell: ({ row }) => <div className="text-red-600">{row.original.id}</div>,
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
    header: "Emergency Phone",
  },
  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "designation",
    header: "Designation",
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
