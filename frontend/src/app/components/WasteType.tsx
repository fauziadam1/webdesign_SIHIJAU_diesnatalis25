import { Card, CardContent } from "./ui/Card";
import { Newspaper, Wine, Package, Battery } from "lucide-react";

const wasteTypes = [
  {
    icon: Newspaper,
    name: "Kertas",
    items: ["Koran", "Majalah", "Kardus", "Buku"],
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
  },
  {
    icon: Wine,
    name: "Plastik",
    items: ["Botol plastik", "Kantong plastik", "Kemasan", "Galon"],
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    icon: Package,
    name: "Logam",
    items: ["Kaleng", "Aluminium", "Besi", "Tembaga"],
    color: "text-slate-600",
    bgColor: "bg-slate-50 dark:bg-slate-950/20",
  },
  {
    icon: Battery,
    name: "Elektronik",
    items: ["Baterai", "Kabel", "Komponen", "Gadget"],
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
];

export default function WasteTypes() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Jenis Sampah yang Diterima
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Berbagai jenis sampah yang dapat Anda setorkan ke bank sampah
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wasteTypes.map((type, index) => (
            <Card 
              key={index}
              variant="outline"
              shadow="none"
              className="border-border bg-card hover:shadow-eco transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-6 space-y-4">
                <div className={`w-16 h-16 rounded-xl ${type.bgColor} flex items-center justify-center`}>
                  <type.icon className={`w-8 h-8 ${type.color}`} />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground">
                  {type.name}
                </h3>
                
                <ul className="space-y-2">
                  {type.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
