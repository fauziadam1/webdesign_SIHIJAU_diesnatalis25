"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import { Leaf, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Hero() {
  const [dashboardUrl, setDashboardUrl] = useState("/auth/login");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("sihi_user_v1");
      if (!saved) return;

      const parsed = JSON.parse(saved);
      if (!parsed?.role) return;

      if (parsed.role === "admin") {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setDashboardUrl("/admin/dashboard");
      } else {
        setDashboardUrl("/user/profile");
      }
    } catch { }
  }, []);


  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-eco">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            {/* <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Solusi Lingkungan Berkelanjutan</span>
            </div> */}

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Trash2Cash
              <span className="block text-primary mt-2">Untuk Masa Depan Lebih Hijau</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Kelola sampah Anda dengan bijak, dapatkan nilai ekonomi, dan berkontribusi untuk lingkungan yang lebih bersih dan sehat.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/auth/login">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90"
                  rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                >
                  Daftar Sekarang
                </Button>
              </Link>

              <Link href={dashboardUrl}>
                <Button size="lg" variant="secondary">
                  Lihat Dashboard
                </Button>
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">500+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Anggota Aktif</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">2.5 Ton</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Sampah Terkelola</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-primary">95%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Daur Ulang</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute -inset-4 bg-gradient-eco opacity-20 blur-3xl rounded-full" />
            <Image
              src="/hero-waste-bank.png"
              width={2000}
              height={2000}
              alt="Bank Sampah - Pengelolaan sampah modern"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
