import Link from "next/link";
import Button from "./ui/Button";

const Header = () => {
    return (
        <header className="sticky flex items-center justify-center top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="flex items-center py-5">

                <nav className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Beranda
                    </Link>
                    <Link href="#cara-kerja" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Cara Kerja
                    </Link>
                    <Link href="#manfaat" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Manfaat
                    </Link>
                    <Link href="#jenis-sampah" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Jenis Sampah
                    </Link>
                    <Link href="#kontak" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Kontak
                    </Link>
                    <Link href="/auth/login">
                        <Button size="sm" className="ml-4 group bg-primary hover:bg-primary/90">
                            Login
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
