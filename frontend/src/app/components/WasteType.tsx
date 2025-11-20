import { Card } from "./ui/Card";
import { Wine, FileText, Box, Battery } from "lucide-react";

const wasteTypes = [
  {
    icon: Wine,
    name: "Plastik",
    price: "Rp 2.000 - 5.000/kg",
    items: ["Botol plastik", "Gelas plastik", "Kantong plastik", "Ember bekas"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FileText,
    name: "Kertas",
    price: "Rp 1.500 - 3.000/kg",
    items: ["Koran bekas", "Majalah", "Kardus", "Buku tulis"],
    color: "from-amber-500 to-orange-500",
  },
  {
    icon: Box,
    name: "Logam",
    price: "Rp 5.000 - 10.000/kg",
    items: ["Kaleng minuman", "Besi tua", "Aluminium", "Tembaga"],
    color: "from-gray-500 to-slate-600",
  },
  {
    icon: Battery,
    name: "Elektronik",
    price: "Harga bervariasi",
    items: ["Kabel bekas", "Baterai", "PCB", "Komponen elektronik"],
    color: "from-violet-500 to-purple-500",
  },
];

export default function WasteTypes() {
  return (
    <section id="jenis-sampah" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Jenis Sampah yang Diterima
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai jenis sampah daur ulang yang dapat Anda tukarkan dengan reward
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {wasteTypes.map((type, index) => {
            const Icon = type.icon;
            return (
              <Card
                key={index}
                variant="outline"
                shadow="none"
                className="p-6 hover:shadow-eco transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${type.color} mb-4`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2">{type.name}</h3>
                <p className="text-primary font-medium mb-4">{type.price}</p>
                
                <ul className="space-y-2">
                  {type.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2 text-primary">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};