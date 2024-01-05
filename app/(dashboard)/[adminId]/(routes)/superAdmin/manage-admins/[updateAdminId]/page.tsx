"use client";

import Loading from "@/app/loading";
import { useAdminQuery } from "@/redux/api/adminApi";
import UpdateAdminFrom from "../components/UpdateAdminForm";

const UpdateAdmin = ({ params }: { params: { updateAdminId: string } }) => {
  const { data, isLoading } = useAdminQuery(params.updateAdminId);

  console.log(data);
  console.log(params);

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
