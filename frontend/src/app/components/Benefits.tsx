import Image from "next/image";
import sortingIcon from "@/assets/sorting-icon.png";
import communityIcon from "@/assets/community-icon.png";
import impactIcon from "@/assets/impact-icon.png";

const benefits = [
  {
    icon: sortingIcon,
    title: "Mengurangi Sampah",
    description: "Membantu mengurangi volume sampah yang berakhir di TPA dan mencemari lingkungan.",
  },
  {
    icon: communityIcon,
    title: "Memberdayakan Masyarakat",
    description: "Memberikan nilai ekonomi dari sampah dan meningkatkan kesadaran lingkungan.",
  },
  {
    icon: impactIcon,
    title: "Dampak Lingkungan",
    description: "Kontribusi nyata untuk bumi yang lebih bersih dan masa depan yang berkelanjutan.",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Manfaat Bank Sampah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kontribusi positif untuk lingkungan dan masyarakat
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center space-y-4 group"
            >
              <div className="relative mx-auto w-48 h-48 mb-6">
                <div className="absolute inset-0 bg-gradient-eco opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity" />
                <Image 
                  src={benefit.icon} 
                  alt={benefit.title}
                  width={2000}
                  height={2000}
                  className="relative w-full h-full object-contain rounded-xl border-2 border-border"
                />
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};