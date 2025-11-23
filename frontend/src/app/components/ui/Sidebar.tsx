'use client'
import React, { useState } from 'react';
import { Users, TrendingUp, Package, DollarSign, Settings, LogOut, User, BarChart3, ChevronLeft } from 'lucide-react';

export default function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', icon: BarChart3, label: 'Dashboard' },
    { id: 'transaksi', icon: TrendingUp, label: 'Transaksi' },
    { id: 'anggota', icon: Users, label: 'Anggota' },
    { id: 'jenis', icon: Package, label: 'Jenis Sampah' },
    { id: 'pengaturan', icon: Settings, label: 'Pengaturan' },
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
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
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
            className={`p-2 rounded-lg hover:bg-gray-100 transition-all duration-200 ${isCollapsed ? 'mx-auto' : ''
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
            className={`px-6 text-xs font-semibold text-gray-400 uppercase mb-3 transition-all duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'
              }`}
          >
            Menu Utama
          </p>
          <nav className="space-y-1 px-3">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${activeMenu === item.id
                    ? 'bg-green-50 text-green-700'
                    : 'text-gray-600 hover:bg-gray-50'
                  } ${isCollapsed ? 'justify-center' : 'justify-start'}`}
              >
                <item.icon className="w-5 h-5 flex-shrink-0" />
                <span
                  className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'
                    }`}
                >
                  {item.label}
                </span>
                {isCollapsed && (
                  <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                    {item.label}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-200 p-4">
          <p
            className={`px-3 text-xs font-semibold text-gray-400 uppercase mb-3 transition-all duration-300 ${isCollapsed ? 'opacity-0' : 'opacity-100'
              }`}
          >
            Akun
          </p>

          <button
            className={`group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 mb-1 ${isCollapsed ? 'justify-center' : 'justify-start'
              }`}
          >
            <User className="w-5 h-5 flex-shrink-0" />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'
                }`}
            >
              Profil
            </span>
            {isCollapsed && (
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                Profil
              </span>
            )}
          </button>

          <button
            className={`group relative w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 ${isCollapsed ? 'justify-center' : 'justify-start'
              }`}
          >
            <LogOut className="w-5 h-5 flex-shrink-0" />
            <span
              className={`whitespace-nowrap transition-all duration-300 ${isCollapsed ? 'opacity-0 w-0 overflow-hidden' : 'opacity-100 w-auto'
                }`}
            >
              Logout
            </span>
            {isCollapsed && (
              <span className="absolute left-full ml-2 px-2 py-1 bg-gray-900 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50 shadow-lg">
                Logout
              </span>
            )}
          </button>
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