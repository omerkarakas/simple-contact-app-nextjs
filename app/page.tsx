import { Input } from "@nextui-org/react";

export default function Home() {
  return (
    <main className="p-12">
      Hi Next.js project!
      <div className="flex flex-col gap-4 w-1/4">
        <label htmlFor="name">Name</label>
        <input id="name" />

        <Input type="email" label="Email" />
      </div>
    </main>
  );
}
