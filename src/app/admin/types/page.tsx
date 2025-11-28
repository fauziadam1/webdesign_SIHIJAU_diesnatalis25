/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React, { useState, useRef, useEffect } from 'react';
import Button from '@/app/components/ui/Button';
import { Card } from '@/app/components/ui/Card';
import { Plus, X, Trash2, Edit2, TrendingUp, Package, ChevronDown, Check } from 'lucide-react';

export default function JenisSampah() {
    const [showModal, setShowModal] = useState(false);
    const [activeTab, setActiveTab] = useState('all');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const [formData, setFormData] = useState({
        namaJenis: '',
        kategori: '',
        hargaPerKg: ''
    });

    const [categories, setCategories] = useState([
        {
            id: 1,
            name: 'Plastik',
            icon: '♻️',
            color: 'from-blue-500 to-blue-600',
            bgLight: 'bg-blue-50',
            textColor: 'text-blue-600',
            items: [
                { name: 'Botol Plastik (PET)', price: 3000, stock: 1200, trend: '+12%' },
                { name: 'Plastik Keras (HDPE)', price: 2500, stock: 890, trend: '+8%' },
                { name: 'Kantong Plastik', price: 1500, stock: 560, trend: '-3%' }
            ]
        },
        {
            id: 2,
            name: 'Kertas',
            icon: '📄',
            color: 'from-orange-500 to-orange-600',
            bgLight: 'bg-orange-50',
            textColor: 'text-orange-600',
            items: [
                { name: 'Kertas HVS/Koran', price: 2000, stock: 2100, trend: '+15%' },
                { name: 'Kardus', price: 1800, stock: 1450, trend: '+10%' },
                { name: 'Duplex/Tetrapack', price: 1200, stock: 780, trend: '+5%' }
            ]
        },
        {
            id: 3,
            name: 'Logam',
            icon: '🔩',
            color: 'from-gray-600 to-gray-700',
            bgLight: 'bg-gray-50',
            textColor: 'text-gray-600',
            items: [
                { name: 'Kaleng Aluminium', price: 10000, stock: 450, trend: '+20%' },
                { name: 'Besi/Seng', price: 4000, stock: 320, trend: '+7%' },
                { name: 'Tembaga', price: 50000, stock: 85, trend: '+25%' }
            ]
        },
        {
            id: 4,
            name: 'Elektronik',
            icon: '⚡',
            color: 'from-purple-500 to-purple-600',
            bgLight: 'bg-purple-50',
            textColor: 'text-purple-600',
            items: [
                { name: 'Komponen Elektronik', price: 20000, stock: 120, trend: '+18%' },
                { name: 'Kabel Tembaga', price: 35000, stock: 95, trend: '+22%' },
                { name: 'Baterai Bekas', price: 15000, stock: 67, trend: '+9%' }
            ]
        }
    ]);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSelectCategory = (categoryName: string) => {
        setFormData(prev => ({
            ...prev,
            kategori: categoryName
        }));
        setIsDropdownOpen(false);
    };

    const handleSubmit = () => {
        if (!formData.namaJenis || !formData.kategori || !formData.hargaPerKg) {
            alert('Mohon lengkapi semua field!');
            return;
        }

        const categoryIndex = categories.findIndex(cat => cat.name === formData.kategori);

        if (categoryIndex === -1) {
            alert('Kategori tidak ditemukan!');
            return;
        }

        const newItem = {
            name: formData.namaJenis,
            price: parseInt(formData.hargaPerKg),
            stock: 0,
            trend: '+0%'
        };

        const updatedCategories = [...categories];
        updatedCategories[categoryIndex].items.push(newItem);
        setCategories(updatedCategories);

        alert(`Jenis sampah berhasil ditambahkan!\n\nNama: ${formData.namaJenis}\nKategori: ${formData.kategori}\nHarga: Rp ${parseInt(formData.hargaPerKg).toLocaleString('id-ID')}/kg`);

        setFormData({
            namaJenis: '',
            kategori: '',
            hargaPerKg: ''
        });
        setShowModal(false);
    };

    const filteredCategories =
        activeTab === 'all'
            ? categories
            : categories.filter(cat => cat.name.toLowerCase() === activeTab);

    const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
    const totalStock = categories.reduce(
        (sum, cat) => sum + cat.items.reduce((s, item) => s + item.stock, 0),
        0
    );

    const typesData = [
        {
            title: "Total Kategori",
            class: 'p-3 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl',
            content: categories.length,
            icon: <Package size={24} className="text-white" />,

        },
        {
            title: "Jenis Sampah",
            class: 'p-3 bg-linear-to-br from-blue-500 to-blue-600 rounded-xl',
            content: totalItems,
            icon: <TrendingUp size={24} className="text-white" />,

        },
        {
            title: "Total Stok",
            class: 'p-3 bg-linear-to-br from-purple-500 to-purple-600 rounded-xl',
            content: `${totalStock.toLocaleString()} kg`,
            icon: <Package size={24} className="text-white" />,

        },
    ]

    return (
        <div className='p-4 sm:p-7 space-y-6'>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl sm:text-4xl font-bold text-foreground mb-2">Jenis Sampah</h1>
                    <p className="text-gray-600 text-sm">Kelola kategori dan harga sampah dengan mudah</p>
                </div>
                <Button
                    onClick={() => setShowModal(true)}
                    className="group relative bg-primary hover:bg-primary/90 transition-all duration-300 font-medium w-full sm:w-auto"
                >
                    <div className="flex items-center gap-2 justify-center">
                        <Plus size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                        <span className="hidden sm:inline">Tambah Jenis Sampah</span>
                        <span className="sm:hidden">Tambah</span>
                    </div>
                </Button>
            </div>

            <div className="">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                    {typesData.map((item, index) =>
                        <Card key={index} variant='outline' shadow='none' className="p-4 sm:p-6 hover:shadow-eco transition-shadow">
                            <div className="flex items-center gap-4">
                                <div className={item.class}>
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <p className="text-gray-600 text-xs sm:text-sm font-medium">{item.title}</p>
                                    <p className="text-lg sm:text-2xl font-bold text-gray-800">{item.content}</p>
                                </div>
                            </div>
                        </Card>
                    )}
                </div>
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 overflow-x-auto pb-2">
                    <button
                        onClick={() => setActiveTab('all')}
                        className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl cursor-pointer font-medium transition-all whitespace-nowrap ${activeTab === 'all'
                            ? 'bg-linear-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/30'
                            : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                            }`}
                    >
                        Semua Kategori
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.name.toLowerCase())}
                            className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-xl cursor-pointer font-medium transition-all whitespace-nowrap flex items-center gap-2 ${activeTab === cat.name.toLowerCase()
                                ? `bg-linear-to-r ${cat.color} text-white shadow-lg`
                                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                }`}
                        >
                            <span>{cat.icon}</span>
                            <span className="hidden sm:inline">{cat.name}</span>
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {filteredCategories.map((category, idx) => (
                        <Card
                            key={category.id}
                            variant="outline"
                            shadow="none"
                            padding='none'
                            className="overflow-hidden hover:shadow-eco hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className={`bg-linear-to-r ${category.color} p-4 sm:p-6 text-white relative`}>
                                <div className="absolute top-0 right-0 opacity-10 text-6xl sm:text-8xl">
                                    {category.icon}
                                </div>

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="text-xl sm:text-2xl font-bold flex items-center gap-3">
                                            <span className="text-2xl sm:text-3xl">{category.icon}</span>
                                            <span className="truncate">{category.name}</span>
                                        </h3>

                                        <span className="px-3 sm:px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-semibold">
                                            {category.items.length} items
                                        </span>
                                    </div>

                                    <p className="text-white/80 text-xs sm:text-sm">
                                        Total:{" "}
                                        {category.items
                                            .reduce((sum, item) => sum + item.stock, 0)
                                            .toLocaleString()}{" "}
                                        kg
                                    </p>
                                </div>
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="space-y-3">
                                    {category.items.map((item, index) => (
                                        <Card
                                            key={index}
                                            variant="outline"
                                            shadow="none"
                                            className="group/item px-3 sm:px-4 py-3 sm:py-4 bg-gray-50 hover:bg-primary/5 border border-transparent hover:border-primary/25 transition-all"
                                        >
                                            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                                                <div className="w-full sm:w-auto">
                                                    <h4 className="font-semibold text-gray-800 mb-1 group-hover/item:text-green-700 transition-colors text-sm sm:text-base">
                                                        {item.name}
                                                    </h4>

                                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                                        <span className="text-base sm:text-lg font-bold text-green-600">
                                                            Rp {item.price.toLocaleString("id-ID")}
                                                            <span className="text-xs sm:text-sm font-normal text-gray-500">
                                                                /kg
                                                            </span>
                                                        </span>

                                                        <span
                                                            className={`text-xs font-semibold px-2 py-1 rounded-full ${item.trend.startsWith("+")
                                                                ? "bg-green-100 text-green-700"
                                                                : "bg-red-100 text-red-700"
                                                                }`}
                                                        >
                                                            {item.trend}
                                                        </span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center justify-between w-full sm:w-auto sm:flex-col sm:items-end gap-3 sm:gap-4">
                                                    <div className="text-right">
                                                        <p className="text-xs text-gray-500 mb-1">
                                                            Stok Tersedia
                                                        </p>
                                                        <p className="text-base sm:text-lg font-bold text-gray-800">
                                                            {item.stock.toLocaleString()} kg
                                                        </p>
                                                    </div>

                                                    <div className="flex gap-2 opacity-0 group-hover/item:opacity-100 transition-opacity">
                                                        <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-lg text-blue-600 transition-colors">
                                                            <Edit2 size={16} />
                                                        </button>
                                                        <button className="p-2 hover:bg-red-50 cursor-pointer rounded-lg text-red-600 transition-colors">
                                                            <Trash2 size={16} />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md animate-in zoom-in duration-200">
                        <div className="flex items-center justify-between p-6 border-b border-gray-200">
                            <h2 className="text-xl font-semibold text-gray-800">Tambah Jenis Sampah</h2>
                            <button
                                onClick={() => {
                                    setShowModal(false);
                                    setFormData({
                                        namaJenis: '',
                                        kategori: '',
                                        hargaPerKg: ''
                                    });
                                }}
                                className="p-1 cursor-pointer hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Nama Jenis Sampah
                                </label>
                                <input
                                    type="text"
                                    name="namaJenis"
                                    value={formData.namaJenis}
                                    onChange={handleInputChange}
                                    placeholder="Contoh: Plastik PET"
                                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-300 rounded-lg hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Kategori
                                </label>
                                <div className="relative" ref={dropdownRef}>
                                    <button
                                        type="button"
                                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                        className="w-full px-4 py-2.5 text-left bg-white border border-gray-300 rounded-lg hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all flex items-center justify-between"
                                    >
                                        <span className={formData.kategori ? 'text-gray-900' : 'text-gray-500'}>
                                            {formData.kategori || 'Pilih kategori'}
                                        </span>
                                        <ChevronDown
                                            size={18}
                                            className={`text-gray-400 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {isDropdownOpen && (
                                        <div className="absolute z-10 w-full mt-2 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-auto">
                                            {categories.map((cat) => (
                                                <button
                                                    key={cat.id}
                                                    type="button"
                                                    onClick={() => handleSelectCategory(cat.name)}
                                                    className="w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors flex items-center justify-between group"
                                                >
                                                    <span className="text-gray-700 group-hover:text-gray-900 flex items-center gap-2">
                                                        <span>{cat.icon}</span>
                                                        {cat.name}
                                                    </span>
                                                    {formData.kategori === cat.name && (
                                                        <Check size={16} className="text-green-600" />
                                                    )}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Harga per Kg (Rp)
                                </label>
                                <div className="relative">
                                    <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-medium">Rp</span>
                                    <input
                                        type="number"
                                        name="hargaPerKg"
                                        value={formData.hargaPerKg}
                                        onChange={handleInputChange}
                                        placeholder="3000"
                                        className="w-full pl-12 pr-4 py-2.5 text-gray-900 bg-white border border-gray-300 rounded-lg hover:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                    />
                                </div>
                            </div>

                            <Button
                                type='submit'
                                onClick={handleSubmit}
                                className="w-full py-3 mt-2 bg-primary hover:bg-primary/90"
                            >
                                Simpan Transaksi
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}