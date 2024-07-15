import { Input } from "@nextui-org/react";
import Contacts from "../component/Contacts";
import { data } from "@/data/fake";

export default function Home() {
  return (
    <main className="p-12">
      <div className="flex flex-col gap-4">
        <Contacts contacts={data} />
      </div>
    </main>
  );
}
