import AdminTable from "./components/admin-table";
import CreateAdminForm from "./components/create-admin-form";

const ManageAdmins = () => {
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CreateAdminForm />
        <AdminTable />
      </div>
    </div>
  );
};

export default ManageAdmins;
