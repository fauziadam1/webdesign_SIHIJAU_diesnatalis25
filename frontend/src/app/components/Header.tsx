'use client';

import Link from "next/link";
import Button from "./ui/Button";
import { useState, useEffect } from "react";
import { User, LogOut } from "lucide-react";
import { getUser, removeUser, DummyUser } from "@/lib/auth";

const Header = () => {
  const [user, setUser] = useState<DummyUser | null>(null);

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
      <div className="flex items-center py-5">
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground">Beranda</Link>
          <Link href="#cara-kerja" className="text-sm font-medium text-muted-foreground hover:text-foreground">Cara Kerja</Link>
          <Link href="#manfaat" className="text-sm font-medium text-muted-foreground hover:text-foreground">Manfaat</Link>
          <Link href="#jenis-sampah" className="text-sm font-medium text-muted-foreground hover:text-foreground">Jenis Sampah</Link>
          <Link href="#kontak" className="text-sm font-medium text-muted-foreground hover:text-foreground">Kontak</Link>

          {!user && (
            <Link href="/auth/login">
              <Button size="sm" className="ml-4 bg-primary hover:bg-primary/90">Login</Button>
            </Link>
          )}

          {user && (
            <div className="relative ml-4">
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
      </div>
    </div>
  );
};

export default Header;
