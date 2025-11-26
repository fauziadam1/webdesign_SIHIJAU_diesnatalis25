import { Sprout, DollarSign, Users, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/Card";

const benefits = [
  {
    icon: DollarSign,
    title: "Tambahan Penghasilan",
    description: "Dapatkan uang dari sampah yang Anda kumpulkan. Setiap kilogram bernilai!",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Sprout,
    title: "Lingkungan Lebih Bersih",
    description: "Kurangi pencemaran dan bantu menjaga kelestarian alam untuk generasi mendatang.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Users,
    title: "Komunitas Peduli",
    description: "Bergabung dengan ribuan nasabah yang peduli lingkungan di seluruh Indonesia.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Heart,
    title: "Gaya Hidup Sehat",
    description: "Biasakan pola hidup bersih dan berkelanjutan mulai dari lingkungan sendiri.",
    gradient: "from-orange-500 to-red-600",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 bg-gradient-hero" id="manfaat">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Manfaat Bank Sampah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lebih dari sekadar pengelolaan sampah, ini adalah investasi untuk masa depan
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} variant="outline" shadow="none" className="bg-card hover:shadow-eco hover:-translate-y-1 transition-transform duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-linear-to-br ${benefit.gradient} flex items-center justify-center shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
