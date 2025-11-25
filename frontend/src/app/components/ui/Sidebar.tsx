'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Users, TrendingUp, Package, LogOut, BarChart3, ChevronLeft, ArrowLeft } from 'lucide-react';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard', href: '/admin/dashboard' },
    { id: 'transaksi', icon: TrendingUp, label: 'Transaksi', href: '/admin/transactions' },
    { id: 'anggota', icon: Users, label: 'Anggota', href: '/admin/members' },
    { id: 'jenis', icon: Package, label: 'Jenis Sampah', href: '/admin/types' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <aside
        className={`bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ease-in-out ${isCollapsed ? 'w-[70px]' : 'w-60'
          }`}
      >
        <div className="border-b border-gray-200 px-4 py-5 flex items-center justify-between">
          <div
            className={`flex items-center gap-3 overflow-hidden transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0' : 'opacity-100 w-auto'
              }`}
          >
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <div className="whitespace-nowrap">
              <h1 className="font-semibold text-gray-900">Bank Sampah</h1>
              <p className="text-xs text-gray-500">Dashboard Admin</p>
            </div>
          </div>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition-all duration-200 ${isCollapsed ? 'mx-auto' : ''
              }`}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            <ChevronLeft
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''
                }`}
            />
          </button>
        </div>
        <div className="flex-1 py-4">
          <p
            className={`px-6 text-xs font-semibold text-gray-400 uppercase mb-3 transition-all duration-300 whitespace-nowrap ${isCollapsed ? 'opacity-0' : 'opacity-100'
              }`}
          >
            Menu Utama
          </p>
          <nav className="space-y-1 px-3">
            {menuItems.map((item) => {
              const isActive = pathname.startsWith(item.href);

              return (
                <Link
                  href={item.href}
                  key={item.id}
                  className={`group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${isActive ? 'bg-green-50 text-green-700' : 'text-gray-600 hover:bg-primary/5'} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
                >
                  <item.icon className={`w-5 h-5 shrink-0 ${isCollapsed ? 'translate-x-1' : 'translate-x-0'}`} />
                  <span
                    className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'}`}
                  >
                    {item.label}
                  </span>

                  {isCollapsed && (
                    <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                      {item.label}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-gray-200 p-4">
          <Link
            href="/user"
            className={`group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 ${isCollapsed ? 'justify-center' : 'justify-start'
              }`}
          >
            <ArrowLeft className={`w-5 h-5 shrink-0 ${isCollapsed ? 'translate-x-1' : 'translate-x-0'}`} />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'
                }`}
            >
              Kembali
            </span>
            {isCollapsed && (
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                Kembali
              </span>
            )}
          </Link>
        </div>
      </aside>

      <div
        className={`flex-1 overflow-auto flex flex-col transition-all duration-300`}
      >
        <div className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Monitoring Bank Sampah</h2>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Admin User</span>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}