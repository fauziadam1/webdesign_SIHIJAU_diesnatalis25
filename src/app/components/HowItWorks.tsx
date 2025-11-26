import { Card } from "./ui/Card";
import { Recycle, Scale, Coins } from "lucide-react";

const steps = [
  {
    icon: Recycle,
    title: "Kumpulkan Sampah",
    description: "Pisahkan sampah daur ulang seperti plastik, kertas, dan logam dari sampah organik di rumah Anda.",
  },
  {
    icon: Scale,
    title: "Timbang & Catat",
    description: "Bawa sampah ke bank sampah terdekat untuk ditimbang dan dicatat dalam buku tabungan Anda.",
  },
  {
    icon: Coins,
    title: "Dapatkan Reward",
    description: "Tukarkan poin Anda dengan uang tunai atau produk kebutuhan sehari-hari.",
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Cara Kerja Bank Sampah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tiga langkah mudah untuk mengubah sampah Anda menjadi penghasilan tambahan
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card
                key={index}
                variant="outline"
                shadow="none"
                className="relative p-8 bg-card hover:shadow-eco transition-all duration-300 hover:-translate-y-1"
              >
                <div className="absolute -top-6 left-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl font-bold text-primary/20">{index + 1}</span>
                    <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};