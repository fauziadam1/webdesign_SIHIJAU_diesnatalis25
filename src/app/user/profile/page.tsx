'use client'
import React, { useState } from 'react';
import { Card } from '@/app/components/ui/Card';
import { User, Wallet, TrendingUp, Award, Calendar, Package, Leaf, Target, Camera } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function UserProfile() {
    const [userData] = useState({
        nama: 'Ibu Siti Aminah',
        memberId: 'M001',
        joinDate: '15 Januari 2023',
        email: 'siti.aminah@email.com',
        phone: '0812-3456-7890',
        alamat: 'Jl. Melati No. 45, Yogyakarta',
        totalSaldo: 436500,
        totalSampah: 145.5,
        totalTransaksi: 42,
        achievement: 'Gold Member'
    });

    const monthlyData = [
        { bulan: 'Jan', sampah: 12.5, target: 15 },
        { bulan: 'Feb', sampah: 15.2, target: 15 },
        { bulan: 'Mar', sampah: 18.3, target: 15 },
        { bulan: 'Apr', sampah: 14.8, target: 15 },
        { bulan: 'Mei', sampah: 16.9, target: 15 },
        { bulan: 'Jun', sampah: 19.5, target: 15 },
        { bulan: 'Jul', sampah: 21.3, target: 15 },
        { bulan: 'Ago', sampah: 17.2, target: 15 },
        { bulan: 'Sep', sampah: 9.8, target: 15 }
    ];

    const categoryData = [
        { name: 'Plastik', value: 45, color: '#3B82F6' },
        { name: 'Kertas', value: 30, color: '#F97316' },
        { name: 'Logam', value: 15, color: '#6B7280' },
        { name: 'Elektronik', value: 10, color: '#A855F7' }
    ];

    const comparisonData = [
        { kategori: 'Saya', pengumpulan: 145.5 },
        { kategori: 'Rata-rata', pengumpulan: 98.3 }
    ];

    const stats = [
        {
            icon: Package,
            label: 'Total Sampah',
            value: `${userData.totalSampah} kg`,
            color: 'from-blue-500 to-blue-600',
            bgLight: 'bg-blue-50',
            textColor: 'text-blue-600'
        },
        {
            icon: Wallet,
            label: 'Total Saldo',
            value: `Rp ${userData.totalSaldo.toLocaleString('id-ID')}`,
            color: 'from-green-500 to-emerald-600',
            bgLight: 'bg-green-50',
            textColor: 'text-green-600'
        },
        {
            icon: TrendingUp,
            label: 'Total Transaksi',
            value: `${userData.totalTransaksi}x`,
            color: 'from-purple-500 to-purple-600',
            bgLight: 'bg-purple-50',
            textColor: 'text-purple-600'
        },
        {
            icon: Award,
            label: 'Status Member',
            value: userData.achievement,
            color: 'from-amber-500 to-orange-600',
            bgLight: 'bg-amber-50',
            textColor: 'text-amber-600'
        }
    ];

    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 via-white to-emerald-50">
            <div className="max-w-7xl mx-auto px-8 py-8">
                <Card variant='outline' shadow='none' padding='none' className="overflow-hidden mb-8">
                    <div className="bg-linear-to-r from-green-600 to-emerald-600 h-32 relative">
                        <div className="absolute -bottom-16 left-8 flex items-end gap-6">
                            <div className="relative group">
                                <div className="w-32 h-32 rounded-2xl bg-white p-1 shadow-xl">
                                    <div className="w-full h-full rounded-xl bg-linear-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                                        <User size={48} className="text-green-600" />
                                    </div>
                                </div>
                                <button className="absolute bottom-2 right-2 p-2 bg-green-600 rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                                    <Camera size={16} />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="pt-20 px-8 pb-8">
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-800 mb-1">{userData.nama}</h2>
                                <p className="text-gray-600 mb-4">Member ID: {userData.memberId}</p>

                                <div className="grid grid-cols-2 gap-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <Calendar size={16} className="text-gray-400" />
                                        <span className="text-gray-600">Bergabung: <span className="font-medium text-gray-800">{userData.joinDate}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <User size={16} className="text-gray-400" />
                                        <span className="text-gray-600">Email: <span className="font-medium text-gray-800">{userData.email}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Package size={16} className="text-gray-400" />
                                        <span className="text-gray-600">Telepon: <span className="font-medium text-gray-800">{userData.phone}</span></span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Leaf size={16} className="text-gray-400" />
                                        <span className="text-gray-600">Alamat: <span className="font-medium text-gray-800">{userData.alamat}</span></span>
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 py-3 bg-linear-to-r from-amber-500 to-orange-600 text-white rounded-xl flex items-center gap-2 shadow-lg">
                                <Award size={20} />
                                <span className="font-bold">{userData.achievement}</span>
                            </div>
                        </div>
                    </div>
                </Card>

                <div className="grid grid-cols-4 gap-6 mb-8">
                    {stats.map((stat, index) => (
                        <Card
                            variant='outline'
                            shadow='none'
                            key={index}
                            className="p-6 hover:shadow-eco transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className={`inline-flex p-3 rounded-xl bg-linear-to-br ${stat.color} mb-4`}>
                                <stat.icon size={24} className="text-white" />
                            </div>
                            <p className="text-gray-600 text-sm font-medium mb-1">{stat.label}</p>
                            <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                        </Card>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-6 mb-8">
                    <Card variant='outline' shadow='none' className="p-6">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-1">Pengumpulan Sampah Bulanan</h3>
                                <p className="text-sm text-gray-600">Perbandingan dengan target bulanan</p>
                            </div>
                            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-lg">
                                <TrendingUp size={16} className="text-green-600" />
                                <span className="text-sm font-semibold text-green-600">+18.5%</span>
                            </div>
                        </div>
                        <ResponsiveContainer width="100%" height={280}>
                            <LineChart data={monthlyData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="bulan"
                                    tick={{ fill: '#6B7280', fontSize: 12 }}
                                    axisLine={{ stroke: '#E5E7EB' }}
                                />
                                <YAxis
                                    tick={{ fill: '#6B7280', fontSize: 12 }}
                                    axisLine={{ stroke: '#E5E7EB' }}
                                    label={{ value: 'kg', angle: -90, position: 'insideLeft', fill: '#6B7280' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                                <Line
                                    type="monotone"
                                    dataKey="sampah"
                                    stroke="#1CA152"
                                    strokeWidth={3}
                                    dot={{ fill: '#1CA152', r: 4 }}
                                    activeDot={{ r: 6 }}
                                    name="Sampah Terkumpul"
                                />
                                <Line
                                    type="monotone"
                                    dataKey="target"
                                    stroke="#F59E0B"
                                    strokeWidth={2}
                                    strokeDasharray="5 5"
                                    dot={false}
                                    name="Target"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>

                    <Card variant='outline' shadow='none' className='p-6'>
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Distribusi Kategori Sampah</h3>
                            <p className="text-sm text-gray-600">Persentase berdasarkan jenis sampah</p>
                        </div>
                        <ResponsiveContainer width="100%" height={280}>
                            <PieChart>
                                <Pie
                                    data={categoryData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, percent = 0 }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    outerRadius={100}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {categoryData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>

                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #e7e7e7',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </Card>
                </div>

                <div className="grid grid-cols-3 gap-6">
                    <Card variant='outline' shadow='none' className="col-span-2 p-6">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Perbandingan dengan Rata-rata</h3>
                            <p className="text-sm text-gray-600">Total pengumpulan sampah Anda vs rata-rata anggota</p>
                        </div>
                        <ResponsiveContainer width="100%" height={240}>
                            <BarChart data={comparisonData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis
                                    dataKey="kategori"
                                    tick={{ fill: '#6B7280', fontSize: 12 }}
                                    axisLine={{ stroke: '#E5E7EB' }}
                                />
                                <YAxis
                                    tick={{ fill: '#6B7280', fontSize: 12 }}
                                    axisLine={{ stroke: '#E5E7EB' }}
                                    label={{ value: 'kg', angle: -90, position: 'insideLeft', fill: '#6B7280' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'white',
                                        border: '1px solid #E5E7EB',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}
                                />
                                <Bar
                                    dataKey="pengumpulan"
                                    fill="#1CA152"
                                    radius={[8, 8, 0, 0]}
                                    name="Total Sampah (kg)"
                                />
                                <defs>
                                    <linearGradient id="colorBar" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#10B981" stopOpacity={0.8} />
                                        <stop offset="100%" stopColor="#059669" stopOpacity={0.8} />
                                    </linearGradient>
                                </defs>
                            </BarChart>
                        </ResponsiveContainer>
                        <div className="mt-4 p-4 bg-green-50 rounded-xl flex items-center gap-3">
                            <div className="p-2 bg-green-100 rounded-lg">
                                <TrendingUp size={20} className="text-green-600" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-green-800">Selamat! 🎉</p>
                                <p className="text-xs text-green-700">Anda mengumpulkan 48% lebih banyak dari rata-rata anggota lain</p>
                            </div>
                        </div>
                    </Card>

                    <Card variant='outline' shadow='none' className="p-6">
                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-1">Pencapaian</h3>
                            <p className="text-sm text-gray-600">Badge yang telah diraih</p>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-linear-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-amber-500 rounded-lg">
                                        <Award size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-amber-800">Gold Member</p>
                                        <p className="text-xs text-amber-700">Level tertinggi</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-linear-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-green-500 rounded-lg">
                                        <Leaf size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-green-800">Eco Warrior</p>
                                        <p className="text-xs text-green-700">100+ kg sampah</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 bg-linear-to-r from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="p-2 bg-blue-500 rounded-lg">
                                        <Target size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-blue-800">Target Master</p>
                                        <p className="text-xs text-blue-700">6x mencapai target</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}