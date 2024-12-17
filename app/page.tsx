import Header from "@/components/header";
import { AppSidebar } from "@/components/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function Page() {
  return (
    <main>
      <Header />
      <SidebarProvider>
        <AppSidebar />
      </SidebarProvider>
    </main>
  );
}
