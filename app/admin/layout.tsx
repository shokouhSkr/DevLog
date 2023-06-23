import { CreatePostButton, Sidebar } from "@/components";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className="flex">
      <Sidebar />
      <main className="p-4">{children}</main>
      <CreatePostButton />
    </section>
  );
}
