import DashboardLayout from "../components/ui/Sidebar";

export default async function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode; }>) {
  return (
    <>
      <DashboardLayout>
        {children}
      </DashboardLayout>
    </>
  );
}
