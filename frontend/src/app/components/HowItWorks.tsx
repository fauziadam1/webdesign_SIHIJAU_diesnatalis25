import { Leaf, Scale, Coins, TrendingUp } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

const steps = [
  {
    icon: Leaf,
    title: "Kumpulkan Sampah",
    description: "Pisahkan sampah organik dan anorganik di rumah Anda. Pastikan sampah dalam kondisi bersih dan kering.",
  },
  {
    icon: Scale,
    title: "Timbang & Catat",
    description: "Bawa sampah ke bank sampah untuk ditimbang. Setiap jenis sampah memiliki nilai yang berbeda.",
  },
  {
    icon: Coins,
    title: "Dapatkan Poin",
    description: "Sampah Anda akan dinilai dan dicatat dalam buku tabungan. Poin dapat ditukar dengan uang atau barang.",
  },
  {
    icon: TrendingUp,
    title: "Pantau Tabungan",
    description: "Lihat perkembangan tabungan sampah Anda dan kontribusi Anda terhadap lingkungan.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Cara Kerja Bank Sampah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proses sederhana yang membuat pengelolaan sampah menjadi mudah dan menguntungkan
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card 
              key={index}
              variant="outline"
              shadow="none"
              className="relative overflow-hidden border-border bg-card hover:shadow-eco transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className="absolute top-4 right-4 text-6xl font-bold text-muted/10">
                  {index + 1}
                </div>
                
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};