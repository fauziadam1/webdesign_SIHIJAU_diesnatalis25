import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import Sidebar from "./ui/Sidebar";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-4">
              <h1 className="text-xl font-semibold text-foreground">
                Monitoring Bank Sampah
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-muted-foreground">
                Admin User
              </div>
            </div>
          </header>
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
