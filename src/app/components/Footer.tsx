import { Recycle } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Recycle className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Bank Sampah</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Solusi pengelolaan sampah modern untuk masa depan yang lebih hijau dan berkelanjutan.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Tentang</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
              <li><Link href="#cara-kerja" className="hover:text-primary transition-colors">Cara Kerja</Link></li>
              <li><Link href="#manfaat" className="hover:text-primary transition-colors">Manfaat</Link></li>
              <li><Link href="#FAQ" className="hover:text-primary transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Layanan</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#" className="hover:text-primary transition-colors">Jemput Sampah</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Drop Point</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Edukasi</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Komunitas</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Kontak</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: info@banksampah.id</li>
              <li>Telepon: (021) 1234-5678</li>
              <li>WhatsApp: 0812-3456-7890</li>
              <li>Senin - Jumat, 08:00 - 17:00</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Bank Sampah. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};