'use client';

import Link from "next/link";
import Button from "./ui/Button";
import { useState, useEffect } from "react";
import { User, LogOut, Menu, X, Recycle } from "lucide-react";
import { getUser, removeUser, DummyUser } from "@/lib/auth";

const Header = () => {
    const [user, setUser] = useState<DummyUser | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const u = getUser();
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setUser(u);
    }, []);

    const handleLogout = () => {
        removeUser();
        setUser(null);
        window.location.href = "/";
    };

    const toggleProfileMenu = () => {
        const el = document.getElementById("profile-menu");
        if (el) el.classList.toggle("hidden");
    };

    return (
        <div className="sticky flex items-center justify-center top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-4">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                            <Recycle className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-bold text-lg text-foreground hidden sm:block">Bank Sampah</span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                        <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Beranda</Link>
                        <Link href="#tentang" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tentang</Link>
                        <Link href="#cara-kerja" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Cara Kerja</Link>
                        <Link href="#manfaat" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Manfaat</Link>
                        <Link href="#kontak" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Kontak</Link>

                        {!user && (
                            <Link href="/auth/login">
                                <Button size="sm" className="bg-primary hover:bg-primary/90">Login</Button>
                            </Link>
                        )}

                        {user && (
                            <div className="relative">
                                <button
                                    className="w-9 h-9 flex cursor-pointer border border-border-secondary items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition"
                                    onClick={toggleProfileMenu}
                                >
                                    <User size={17} className="text-gray-700" />
                                </button>

                                <div
                                    id="profile-menu"
                                    className="hidden absolute right-0 mt-3 w-44 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden"
                                >
                                    <div className="px-4 py-3 space-y-1 border-b border-border-secondary bg-gray-50">
                                        <p className="text-xs text-gray-500">Masuk sebagai</p>
                                        <p className="text-[11px] font-medium text-gray-800">{user.email}</p>
                                    </div>

                                    <Link
                                        href={user.role === "admin" ? "/admin" : "/user/profile"}
                                        className="flex items-center gap-3 px-4 py-3 text-sm hover:bg-gray-100 transition"
                                    >
                                        <User size={16} />
                                        Profil
                                    </Link>

                                    <button
                                        onClick={handleLogout}
                                        className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )}
                    </nav>

                    <button
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border">
                        <nav className="flex flex-col gap-4">
                            <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Beranda</Link>
                            <Link href="#tentang" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Tentang</Link>
                            <Link href="#cara-kerja" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Cara Kerja</Link>
                            <Link href="#manfaat" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Manfaat</Link>
                            <Link href="#kontak" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors" onClick={() => setMobileMenuOpen(false)}>Kontak</Link>

                            {!user && (
                                <Link href="/auth/login" onClick={() => setMobileMenuOpen(false)}>
                                    <Button size="sm" className="w-full bg-primary hover:bg-primary/90">Login</Button>
                                </Link>
                            )}

                            {user && (
                                <div className="flex flex-col gap-2 pt-2 border-t border-border">
                                    <div className="px-3 py-2 bg-gray-50 rounded-lg">
                                        <p className="text-xs text-gray-500">Masuk sebagai</p>
                                        <p className="text-sm font-medium text-gray-800">{user.email}</p>
                                    </div>
                                    <Link
                                        href={user.role === "admin" ? "/admin" : "/user/profile"}
                                        className="flex items-center gap-3 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg transition"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        <User size={16} />
                                        Profil
                                    </Link>
                                    <button
                                        onClick={() => { handleLogout(); setMobileMenuOpen(false); }}
                                        className="flex w-full cursor-pointer items-center gap-3 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition"
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </button>
                                </div>
                            )}
                        </nav>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
