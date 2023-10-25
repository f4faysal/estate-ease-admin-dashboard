import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="p-10">
      <p>Hello admin dashboard</p>
      <Button size={"lg"} variant={"outline"}>
        Click me
      </Button>
    </div>
  );
}
