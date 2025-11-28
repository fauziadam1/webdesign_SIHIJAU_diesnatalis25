'use client'
import { ChevronDown, ChevronUp, Sprout } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-card border-t border-border py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between md:items-start gap-6 md:gap-8 mb-8">
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <Sprout className="w-6 h-6 text-primary" />
              </div>
              <span className="text-xl font-bold text-foreground">Trash2Cash</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Solusi pengelolaan sampah modern untuk masa depan yang lebih hijau dan berkelanjutan.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-start gap-y-8 md:gap-x-30">
            <div className="w-full md:w-auto border-b border-border-secondary pb-4 md:border-0 md:pb-0">
              <div 
                className="flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection('tentang')}
              >
                <h3 className="font-semibold text-foreground mb-2 md:mb-4">Tentang</h3>
                <div className="md:hidden">
                  {openSection === 'tentang' ? (
                    <ChevronUp className="w-5 h-5 text-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground" />
                  )}
                </div>
              </div>
              <ul className={`space-y-2 text-sm text-muted-foreground ${openSection === 'tentang' ? 'block' : 'hidden md:block'}`}>
                <li><Link href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</Link></li>
                <li><Link href="#cara-kerja" className="hover:text-primary transition-colors">Cara Kerja</Link></li>
                <li><Link href="#FAQ" className="hover:text-primary transition-colors">FAQ</Link></li>
              </ul>
            </div>

            <div className="w-full md:w-auto border-b border-border-secondary pb-4 md:border-0 md:pb-0">
              <div  
                className="flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection('edukasi')}
              >
                <h3 className="font-semibold text-foreground mb-2 md:mb-4">Edukasi</h3>
                <div className="md:hidden">
                  {openSection === 'edukasi' ? (
                    <ChevronUp className="w-5 h-5 text-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground" />
                  )}
                </div>
              </div>
              <ul className={`space-y-2 text-sm text-muted-foreground ${openSection === 'edukasi' ? 'block' : 'hidden md:block'}`}>
                <li><Link href="#jenis" className="hover:text-primary transition-colors">Jenis Sampah</Link></li>
                <li><Link href="#manfaat" className="hover:text-primary transition-colors">Manfaat</Link></li>
                <li><Link href="#tips" className="hover:text-primary transition-colors">Tips</Link></li>
              </ul>
            </div>

            <div className="w-full md:w-auto">
              <div 
                className="flex justify-between items-center cursor-pointer md:cursor-default"
                onClick={() => toggleSection('kontak')}
              >
                <h3 className="font-semibold text-foreground mb-2 md:mb-4">Kontak</h3>
                <div className="md:hidden">
                  {openSection === 'kontak' ? (
                    <ChevronUp className="w-5 h-5 text-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-foreground" />
                  )}
                </div>
              </div>
              <ul className={`space-y-2 text-sm text-muted-foreground ${openSection === 'kontak' ? 'block' : 'hidden md:block'}`}>
                <li>Email: info@banksampah.id</li>
                <li>Telepon: (021) 1234-5678</li>
                <li>WhatsApp: 0812-3456-7890</li>
                <li>Senin - Jumat, 08:00 - 17:00</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Trash2Cash. Semua hak dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  );
};