'use client'
import React, { useState } from 'react';
import Button from '@/app/components/ui/Button';
import { Card } from '@/app/components/ui/Card';
import { Search, UserPlus, X } from 'lucide-react';

export default function AnggotaManagement() {
    const [showModal, setShowModal] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [formData, setFormData] = useState({
        namaLengkap: '',
        nomorTelepon: '',
        email: '',
        alamat: ''
    });

    const [anggotaList, setAnggotaList] = useState([
        {
            id: 'M001',
            nama: 'Ibu Siti Aminah',
            kontak: '0812-3456-7890',
            totalSampah: '145.5 kg',
            saldo: 'Rp 436.500',
            initials: 'IS'
        },
        {
            id: 'M002',
            nama: 'Bapak Ahmad Yani',
            kontak: '0813-4567-8901',
            totalSampah: '128.3 kg',
            saldo: 'Rp 384.900',
            initials: 'BA'
        },
        {
            id: 'M003',
            nama: 'Ibu Dewi Lestari',
            kontak: '0814-5678-9012',
            totalSampah: '167.2 kg',
            saldo: 'Rp 501.600',
            initials: 'ID'
        },
        {
            id: 'M004',
            nama: 'Bapak Joko Susilo',
            kontak: '0815-6789-0123',
            totalSampah: '189.7 kg',
            saldo: 'Rp 569.100',
            initials: 'BJ'
        },
        {
            id: 'M005',
            nama: 'Ibu Rina Wijaya',
            kontak: '0816-7890-1234',
            totalSampah: '142.1 kg',
            saldo: 'Rp 426.300',
            initials: 'IR'
        },
        {
            id: 'M006',
            nama: 'Bapak Hadi Santoso',
            kontak: '0817-8901-2345',
            totalSampah: '156.8 kg',
            saldo: 'Rp 470.400',
            initials: 'BH'
        }
    ]);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        if (!formData.namaLengkap || !formData.nomorTelepon || !formData.email || !formData.alamat) {
            alert('Mohon lengkapi semua field!');
            return;
        }

        const nameParts = formData.namaLengkap.trim().split(' ');
        const initials = nameParts.length >= 2
            ? nameParts[0][0] + nameParts[1][0]
            : formData.namaLengkap.substring(0, 2);

        const newId = `M${String(anggotaList.length + 1).padStart(3, '0')}`;

        const newAnggota = {
            id: newId,
            nama: formData.namaLengkap,
            kontak: formData.nomorTelepon,
            totalSampah: '0 kg',
            saldo: 'Rp 0',
            initials: initials.toUpperCase()
        };

        setAnggotaList(prev => [...prev, newAnggota]);

        alert(`Anggota berhasil ditambahkan!\n\nNama: ${formData.namaLengkap}\nID: ${newId}\nTelepon: ${formData.nomorTelepon}\nEmail: ${formData.email}`);

        setFormData({
            namaLengkap: '',
            nomorTelepon: '',
            email: '',
            alamat: ''
        });
        setShowModal(false);
    };

    const filteredAnggota = anggotaList.filter(anggota =>
        anggota.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
        anggota.id.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-7 space-y-8">
            <div>
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h1 className="text-4xl font-bold text-foreground mb-2">Anggota</h1>
                        <p className="text-gray-600">Kelola data anggota bank sampah</p>
                    </div>
                </div>
            </div>

            <Card variant='outline' shadow='none' className="p-6">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-gray-800">
                        Daftar Anggota ({filteredAnggota.length})
                    </h2>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Cari anggota..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent w-64"
                        />
                    </div>
                </div>

                <div className="space-y-3">
                    {filteredAnggota.map((anggota) => (
                        <div
                            key={anggota.id}
                            className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                            <div className="flex items-center gap-4 flex-1">
                                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                                    {anggota.initials}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">{anggota.nama}</h3>
                                    <p className="text-sm text-gray-500">{anggota.id}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-8">
                                <div className="w-40">
                                    <p className="text-xs text-gray-500 mb-1">Kontak</p>
                                    <p className="text-sm font-medium text-gray-700">{anggota.kontak}</p>
                                </div>

                                <div className="w-32">
                                    <p className="text-xs text-gray-500 mb-1">Total Sampah</p>
                                    <p className="text-sm font-semibold text-green-600">{anggota.totalSampah}</p>
                                </div>

                                <div className="w-28">
                                    <p className="text-xs text-gray-500 mb-1">Saldo</p>
                                    <p className="text-sm font-medium text-gray-700">{anggota.saldo}</p>
                                </div>

                                <Button variant='secondary' className="hover:bg-gray-200">
                                    Detail
                                </Button>
                            </div>

                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
}