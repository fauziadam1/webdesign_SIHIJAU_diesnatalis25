import Button from "./ui/Button";
import { ArrowRight, Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Siap Memulai Perjalanan Hijau Anda?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Bergabunglah dengan ribuan keluarga yang sudah berkontribusi untuk lingkungan lebih bersih sambil mendapatkan nilai ekonomi dari sampah mereka.
            </p>
          </div>

          <div className="flex gap-4 justify-center items-center">
            <Button size="lg" className="flex items-center group bg-primary">
              Daftar Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" size="lg">
              <Mail className="w-5 h-5" />
              Hubungi Kami
            </Button>
          </div>

          <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-eco bg-clip-text text-secondary-foreground">
                100%
              </div>
              <div className="text-sm text-muted-foreground">Gratis Bergabung</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-eco bg-clip-text text-secondary-foreground">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">Dukungan Komunitas</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold bg-gradient-eco bg-clip-text text-secondary-foreground">
                ∞
              </div>
              <div className="text-sm text-muted-foreground">Dampak Positif</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
