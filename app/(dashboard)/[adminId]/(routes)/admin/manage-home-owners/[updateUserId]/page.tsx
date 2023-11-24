"use client";

import Loading from "@/app/loading";
import { useRentUserQuery } from "@/redux/api/rentUsersApi";
import UpdateAdminFrom from "../components/UpdateAdminForm";

const UpdateAdmin = ({ params }: { params: { updateUserId: string } }) => {
  const { data, isLoading } = useRentUserQuery(params.updateUserId);

  console.log(data);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <UpdateAdminFrom initialData={data} />
        </div>
      </div>
    </div>
  );
};

export default UpdateAdmin;
