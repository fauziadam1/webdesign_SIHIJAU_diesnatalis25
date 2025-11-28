'use client'
import { Card, CardHeader, CardContent } from "@/app/components/ui/Card";
import { Users, TrendingUp, Package, DollarSign } from "lucide-react";
import { Line, LineChart, Bar, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const statsData = [
  {
    title: "Total Anggota",
    value: "523",
    change: "+12%",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/20",
  },
  {
    title: "Sampah Terkumpul",
    value: "2,847 kg",
    change: "+23%",
    icon: Package,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/20",
  },
  {
    title: "Total Transaksi",
    value: "1,234",
    change: "+18%",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/20",
  },
  {
    title: "Nilai Tabungan",
    value: "Rp 45.2 Jt",
    change: "+15%",
    icon: DollarSign,
    color: "text-amber-600",
    bgColor: "bg-amber-50 dark:bg-amber-950/20",
  },
];

const monthlyData = [
  { name: "Jan", sampah: 1800, transaksi: 800 },
  { name: "Feb", sampah: 2100, transaksi: 900 },
  { name: "Mar", sampah: 1950, transaksi: 850 },
  { name: "Apr", sampah: 2400, transaksi: 1000 },
  { name: "Mei", sampah: 2600, transaksi: 1100 },
  { name: "Jun", sampah: 2847, transaksi: 1234 },
];

const wasteTypeData = [
  { name: "Plastik", value: 1200 },
  { name: "Kertas", value: 890 },
  { name: "Logam", value: 450 },
  { name: "Elektronik", value: 307 },
];

const Dashboard = () => {
  return (
    <div className="space-y-4 sm:space-y-6 p-4 sm:p-6 lg:p-7">
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-2">Dashboard Overview</h1>
        <p className="text-sm sm:text-base text-muted-foreground">Ringkasan data bank sampah periode Juni 2024</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {statsData.map((stat, index) => (
          <Card key={index} variant="outline" shadow="none" className="border-border hover:shadow-eco transition-shadow">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1 sm:space-y-2">
                  <p className="text-xs sm:text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-xl sm:text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-primary font-medium">{stat.change} dari bulan lalu</p>
                </div>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                  <stat.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${stat.color}`} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        <Card variant="outline" shadow="none" className="p-4 sm:p-5">
          <CardHeader>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">Tren Pengumpulan Sampah</h1>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border-secondary" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #e7e7e7',
                    borderRadius: '0.5rem'
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sampah"
                  stroke="#1CA152"
                  strokeWidth={2}
                  name="Sampah (kg)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card variant="outline" shadow="none" className="p-4 sm:p-5">
          <CardHeader>
            <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">Sampah per Kategori</h1>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={wasteTypeData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="name" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#FFFFFF',
                    border: '1px solid #e7e7e7',
                    borderRadius: '0.5rem'
                  }}
                />
                <Bar
                  dataKey="value"
                  fill="#1CA152"
                  radius={[8, 8, 0, 0]}
                  name="Jumlah (kg)"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <Card variant="outline" shadow="none" className="p-4 sm:p-5">
        <CardHeader>
          <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold">Transaksi Terbaru</h1>
        </CardHeader>
        <CardContent>
          <div className="space-y-3 sm:space-y-4">
            {[
              { name: "Ibu Siti Aminah", type: "Plastik", weight: "12.5 kg", value: "Rp 37.500", time: "2 jam lalu" },
              { name: "Bapak Ahmad Yani", type: "Kertas", weight: "8.3 kg", value: "Rp 24.900", time: "3 jam lalu" },
              { name: "Ibu Dewi Lestari", type: "Logam", weight: "5.2 kg", value: "Rp 52.000", time: "5 jam lalu" },
              { name: "Bapak Joko Susilo", type: "Plastik", weight: "15.7 kg", value: "Rp 47.100", time: "6 jam lalu" },
            ].map((transaction, index) => (
              <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-3 sm:p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors gap-2 sm:gap-0">
                <div className="flex-1">
                  <p className="text-sm sm:text-base font-medium text-foreground">{transaction.name}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">{transaction.type} • {transaction.weight}</p>
                </div>
                <div className="text-left sm:text-right">
                  <p className="text-sm sm:text-base font-semibold text-primary">{transaction.value}</p>
                  <p className="text-xs text-muted-foreground">{transaction.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
