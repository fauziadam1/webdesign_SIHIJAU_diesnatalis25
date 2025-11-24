'use client'
import { useState } from "react";
import { Card } from "@/app/components/ui/Card";
import { Search, Download, Filter, Plus, ChevronDown, X } from "lucide-react";

const dummyMembers = [
  { value: "M001", label: "Ibu Siti Aminah (M001)" },
  { value: "M002", label: "Bapak Ahmad Yani (M002)" },
  { value: "M003", label: "Ibu Dewi Lestari (M003)" },
  { value: "M004", label: "Bapak Joko Susilo (M004)" },
  { value: "M005", label: "Ibu Rina Wijaya (M005)" },
];

const dummyWasteTypes = [
  { value: "W001", label: "Plastik PET - Rp 3.000/kg", name: "Plastik PET", price: 3000 },
  { value: "W002", label: "Kertas HVS - Rp 2.000/kg", name: "Kertas HVS", price: 2000 },
  { value: "W003", label: "Botol Kaca - Rp 1.500/kg", name: "Botol Kaca", price: 1500 },
  { value: "W004", label: "Logam - Rp 10.000/kg", name: "Logam", price: 10000 },
  { value: "W005", label: "Elektronik - Rp 20.000/kg", name: "Elektronik", price: 20000 },
];

const transactions = [
  { id: "TRX001", date: "2024-06-15", member: "Ibu Siti Aminah", type: "Plastik", weight: "12.5", value: "37.500", status: "Selesai" },
  { id: "TRX002", date: "2024-06-15", member: "Bapak Ahmad Yani", type: "Kertas", weight: "8.3", value: "24.900", status: "Selesai" },
  { id: "TRX003", date: "2024-06-14", member: "Ibu Dewi Lestari", type: "Logam", weight: "5.2", value: "52.000", status: "Selesai" },
  { id: "TRX004", date: "2024-06-14", member: "Bapak Joko Susilo", type: "Plastik", weight: "15.7", value: "47.100", status: "Selesai" },
  { id: "TRX005", date: "2024-06-13", member: "Ibu Rina Wijaya", type: "Elektronik", weight: "3.1", value: "62.000", status: "Pending" },
  { id: "TRX006", date: "2024-06-13", member: "Bapak Hadi Santoso", type: "Kertas", weight: "10.8", value: "32.400", status: "Selesai" },
  { id: "TRX007", date: "2024-06-12", member: "Ibu Maya Putri", type: "Plastik", weight: "9.4", value: "28.200", status: "Selesai" },
  { id: "TRX008", date: "2024-06-12", member: "Bapak Rudi Hartono", type: "Logam", weight: "7.6", value: "76.000", status: "Selesai" },
];

const Transactions = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [memberDropdownOpen, setMemberDropdownOpen] = useState(false);
  const [wasteDropdownOpen, setWasteDropdownOpen] = useState(false);
  
  const [memberId, setMemberId] = useState("");
  const [wasteTypeId, setWasteTypeId] = useState("");
  const [weight, setWeight] = useState("");

  const selectedMember = dummyMembers.find(m => m.value === memberId);
  const selectedWaste = dummyWasteTypes.find(w => w.value === wasteTypeId);
  
  const totalValue = selectedWaste && weight 
    ? (selectedWaste.price * parseFloat(weight)).toLocaleString('id-ID')
    : "0";

  const handleSubmit = () => {
    if (!memberId || !wasteTypeId || !weight) {
      alert("Mohon lengkapi semua field");
      return;
    }
    alert(`Transaksi berhasil disimpan dengan total Rp ${totalValue}`);
    setModalOpen(false);
    setMemberId("");
    setWasteTypeId("");
    setWeight("");
  };
  
  return (
    <div className="p-7">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Transaksi</h1>
            <p className="text-gray-600 mt-1">Kelola dan pantau semua transaksi sampah</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Transaksi Baru
            </button>
            <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </button>
          </div>
        </div>

        <Card variant="outline" shadow="none" className="">
          <div className="p-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              <h2 className="text-xl font-semibold text-gray-900">Daftar Transaksi</h2>
              <div className="flex gap-2 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input 
                    placeholder="Cari transaksi..." 
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium border border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">ID Transaksi</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Tanggal</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Anggota</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Jenis Sampah</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Berat (kg)</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-600 uppercase tracking-wider">Nilai (Rp)</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {transactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{transaction.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{transaction.member}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{transaction.type}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600 text-right">{transaction.weight}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-right">{transaction.value}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        transaction.status === "Selesai" 
                          ? "bg-green-100 text-green-800" 
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/60" onClick={() => setModalOpen(false)} />
          <div className="relative z-50 w-full max-w-lg mx-4 bg-white rounded-lg shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Buat Transaksi Baru</h3>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Anggota
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setMemberDropdownOpen(!memberDropdownOpen)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-green-500 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <span className={selectedMember ? "text-gray-900" : "text-gray-500"}>
                      {selectedMember ? selectedMember.label : "Pilih anggota"}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>
                  
                  {memberDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setMemberDropdownOpen(false)} />
                      <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg">
                        {dummyMembers.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => {
                              setMemberId(option.value);
                              setMemberDropdownOpen(false);
                            }}
                            className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 text-gray-900"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Jenis Sampah
                </label>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setWasteDropdownOpen(!wasteDropdownOpen)}
                    className="flex h-10 w-full items-center justify-between rounded-md border border-green-500 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <span className={selectedWaste ? "text-gray-900" : "text-gray-500"}>
                      {selectedWaste ? selectedWaste.label : "Pilih jenis sampah"}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </button>
                  
                  {wasteDropdownOpen && (
                    <>
                      <div className="fixed inset-0 z-40" onClick={() => setWasteDropdownOpen(false)} />
                      <div className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-200 bg-white shadow-lg">
                        {dummyWasteTypes.map((option) => (
                          <div
                            key={option.value}
                            onClick={() => {
                              setWasteTypeId(option.value);
                              setWasteDropdownOpen(false);
                            }}
                            className="cursor-pointer px-3 py-2 text-sm hover:bg-gray-100 text-gray-900"
                          >
                            {option.label}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Berat (kg)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="0.0"
                  className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
              
              {weight && selectedWaste && (
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <p className="text-sm text-gray-600 mb-1">Total Nilai</p>
                  <p className="text-2xl font-bold text-green-600">Rp {totalValue}</p>
                </div>
              )}
              
              <button 
                onClick={handleSubmit}
                className="w-full mt-6 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-green-600 text-white hover:bg-green-700 transition-colors"
              >
                Simpan Transaksi
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;