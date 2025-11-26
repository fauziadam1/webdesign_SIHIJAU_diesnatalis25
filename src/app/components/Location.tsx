import { Card } from "./ui/Card";
import { MapPin, Clock, Phone, Mail, TrendingUp, Users } from "lucide-react";

export default function LocationInfo() {
  return (
    <section id="kontak" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Lokasi & Jam Operasional
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kunjungi kami atau hubungi untuk informasi lebih lanjut
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 mb-12">
          <Card className="p-8 space-y-6" variant="outline" shadow="none">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Informasi Kontak</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Alamat</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Jl. Lingkungan Hijau No. 123<br />
                      Kelurahan Bersih, Kecamatan Asri<br />
                      Jakarta Selatan 12345
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telepon / WhatsApp</h4>
                    <p className="text-muted-foreground text-sm">
                      +62 812-3456-7890<br />
                      +62 821-9876-5432
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      info@banksampah.id<br />
                      admin@banksampah.id
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 space-y-6" variant="outline" shadow="none">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Jam Operasional</h3>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 shrink-0">
                    <Clock className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-3">Jadwal Buka</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Senin - Jumat</span>
                        <span className="font-semibold text-foreground">08.00 - 16.00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sabtu</span>
                        <span className="font-semibold text-foreground">08.00 - 13.00 WIB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Minggu & Libur</span>
                        <span className="font-semibold text-destructive">Tutup</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Jam Penarikan Saldo</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Penarikan saldo dapat dilakukan setiap hari Senin - Jumat pukul 09.00 - 15.00 WIB. 
                    Bawa buku tabungan dan KTP untuk verifikasi.
                  </p>
                </div>

                <div className="p-4 bg-accent/10 rounded-lg border border-accent/40">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Layanan Jemput Sampah</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Jadwal jemput: Selasa & Kamis, pukul 13.00 - 15.00 WIB. 
                    Hubungi kami H-1 untuk booking jadwal jemput sampah.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="p-6 text-center hover:shadow-eco transition-all duration-300" variant="outline" shadow="none">
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-success/10">
                <TrendingUp className="h-7 w-7 text-success" />
              </div>
            </div>
            <h4 className="text-3xl font-bold text-foreground mb-1">10+ Ton</h4>
            <p className="text-sm text-muted-foreground">Sampah Terolah per Bulan</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-eco transition-all duration-300" variant="outline" shadow="none">
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-7 w-7 text-primary" />
              </div>
            </div>
            <h4 className="text-3xl font-bold text-foreground mb-1">500+</h4>
            <p className="text-sm text-muted-foreground">Anggota Aktif Terdaftar</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-eco transition-all duration-300" variant="outline" shadow="none">
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10">
                <MapPin className="h-7 w-7 text-accent" />
              </div>
            </div>
            <h4 className="text-3xl font-bold text-foreground mb-1">5 Km</h4>
            <p className="text-sm text-muted-foreground">Radius Layanan Gratis</p>
          </Card>
        </div>
      </div>
    </section>
  );
};