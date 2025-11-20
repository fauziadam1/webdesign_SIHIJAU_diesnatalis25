import { Recycle } from "lucide-react";
import Button from "./ui/Button";

const Header = () => {
    return (
        <header className="sticky flex items-center justify-center top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex items-center py-5">

                <nav className="hidden md:flex items-center gap-8">
                    <a href="#beranda" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Beranda
                    </a>
                    <a href="#cara-kerja" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Cara Kerja
                    </a>
                    <a href="#manfaat" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Manfaat
                    </a>
                    <a href="#jenis-sampah" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Jenis Sampah
                    </a>
                    <a href="#kontak" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Kontak
                    </a>
                    <Button size="sm" className="ml-4">
                        Gabung Sekarang
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Header;
