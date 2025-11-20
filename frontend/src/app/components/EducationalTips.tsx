import { Card } from "./ui/Card";
import { Lightbulb, Droplets, Scissors, PackageCheck } from "lucide-react";

const tips = [
  {
    icon: Droplets,
    title: "Bersihkan & Keringkan",
    description: "Cuci bersih sisa makanan/minuman dari wadah plastik atau kaleng. Keringkan sempurna sebelum disimpan untuk menghindari bau dan jamur.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Scissors,
    title: "Pisahkan Komponen",
    description: "Lepaskan label dari botol plastik, pisahkan tutup dari botol, dan buang bagian yang tidak bisa didaur ulang seperti sedotan atau spons.",
    color: "from-violet-500 to-purple-500"
  },
  {
    icon: PackageCheck,
    title: "Kelompokkan Berdasarkan Jenis",
    description: "Pisahkan sampah berdasarkan kategori: plastik, kertas, logam, kaca. Ini mempercepat proses penimbangan dan Anda dapat harga lebih baik.",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Lightbulb,
    title: "Kumpulkan Dalam Jumlah Banyak",
    description: "Simpan sampah hingga terkumpul minimal 5-10 kg sebelum disetor. Ini lebih efisien dalam biaya transportasi dan waktu Anda.",
    color: "from-amber-500 to-orange-500"
  }
];

const additionalTips = [
  {
    title: "Simpan di Tempat Kering",
    desc: "Gunakan karung atau wadah tertutup, simpan di tempat yang kering dan terhindar dari hujan."
  },
  {
    title: "Hindari Sampah B3",
    desc: "Jangan mencampurkan sampah berbahaya seperti baterai lithium, lampu neon, atau oli bekas."
  },
  {
    title: "Lipat Kardus & Plastik",
    desc: "Lipat kardus agar tidak memakan banyak ruang. Remas botol plastik setelah tutupnya dilepas."
  },
  {
    title: "Jangan Bakar Plastik",
    desc: "Membakar plastik menghasilkan racun berbahaya. Lebih baik disetor ke bank sampah untuk didaur ulang."
  },
  {
    title: "Edukasi Keluarga",
    desc: "Ajari anggota keluarga cara memilah sampah yang benar sejak dini untuk hasil maksimal."
  },
  {
    title: "Manfaatkan Kantong Terpisah",
    desc: "Sediakan tempat sampah terpisah di rumah untuk anorganik dan organik agar tidak tercampur."
  }
];

export default function EducationalTips() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Tips Pemilahan Sampah
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pelajari cara memilah dan mempersiapkan sampah agar mendapat nilai terbaik
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <Card key={index} variant="outline" shadow="none" className="p-6 hover:shadow-eco transition-all duration-300 hover:-translate-y-1">
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${tip.color} mb-4`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{tip.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
              </Card>
            );
          })}
        </div>

        <Card variant="outline" shadow="none" className="p-8 bg-linear-to-br from-primary/5 to-accent/5">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Tips Tambahan untuk Hasil Maksimal
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {additionalTips.map((tip, index) => (
              <div key={index} className="flex gap-3 p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
                <div className="flex h-2 w-2 rounded-full bg-primary shrink-0 mt-2" />
                <div className="space-y-1">
                  <h4 className="font-semibold text-foreground text-sm">{tip.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{tip.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground italic">
            💡 Semakin baik kualitas sampah yang disetor, semakin tinggi harga yang Anda dapatkan!
          </p>
        </div>
      </div>
    </section>
  );
};
