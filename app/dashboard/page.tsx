import Header from "@/components/header";
import { AppSidebar } from "@/components/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardNav from "./partials/dashboard-nav";
import DashboardHero from "./partials/deashboard-hero";
import { DataTable } from "./partials/data-table";

export default function Page() {
  return (
    <main>
      <Header />
      <section>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <DashboardNav />
            <DashboardHero />
            <div className="mt-6 m-4 shadow-2xl p-3 rounded-md border border-gray-200 ">
              <DataTable />
            </div>
          </SidebarInset>
        </SidebarProvider>
      </section>
    </main>
  );
}
