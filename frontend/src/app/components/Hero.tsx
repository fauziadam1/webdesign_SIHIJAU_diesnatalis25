import Link from "next/link";
import Image from "next/image";
import Button from "./ui/Button";
import { Leaf, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="beranda" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Solusi Lingkungan Berkelanjutan</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Bank Sampah
              <span className="block text-primary mt-2">Untuk Masa Depan Lebih Hijau</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              Kelola sampah Anda dengan bijak, dapatkan nilai ekonomi, dan berkontribusi untuk lingkungan yang lebih bersih dan sehat.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/auth/login">
                <Button size="lg" className="group bg-primary hover:bg-primary/90" rightIcon={<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}>
                  Daftar Sekarang
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button size="lg" variant="secondary">
                  Lihat Dashboard
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Anggota Aktif</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">2.5 Ton</div>
                <div className="text-sm text-muted-foreground">Sampah Terkelola</div>
              </div>
              <div className="h-12 w-px bg-gray-300" />
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Daur Ulang</div>
              </div>
            </div>
          </div>

          <div className="relative">
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
};