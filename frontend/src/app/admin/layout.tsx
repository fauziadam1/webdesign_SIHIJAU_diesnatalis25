"use client";
import DashboardLayout from "../components/ui/Sidebar";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("sihi_user_v1") || "{}");

    if (!user.role) {
      router.push("/auth/login");
    } else if (user.role !== "admin") {
      router.push("/not-authorized");
    }
  }, []);

  return <DashboardLayout>{children}</DashboardLayout>;
}
