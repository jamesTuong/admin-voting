import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import SidebarLayout from "../components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <SidebarLayout />
      <main className="px-5 py-4 w-full flex gap-2 items-start">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
