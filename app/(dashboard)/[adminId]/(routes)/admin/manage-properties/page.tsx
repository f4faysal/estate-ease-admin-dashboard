import { Heading } from "@/components/ui/heading";
import PropertisTable from "./component/PropertisTable";

const MyProperties = () => {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="py-2 flex items-center justify-between">
        <Heading
          title="Manage Properties"
          description="Manage all properties in your estate ease account"
        />
        {/* <Button
            // disabled={loading}
            variant="secondary"
            size="sm"
            // onClick={() => setOpen(true)}
            // onClick={() => dispatch(openModal())}
            >
            <PlusSquare className="h-4 w-4" />
          </Button> */}
        {/* <Link href={`/en/dashboard/add-property`}>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Property
          </Button>
        </Link> */}
      </div>
      <div>
        <PropertisTable />
      </div>
    </div>
  );
};

export default MyProperties;
