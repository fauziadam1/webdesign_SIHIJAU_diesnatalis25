import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/Card";
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

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-foreground">Dashboard Overview</h2>
          <p className="text-muted-foreground">Ringkasan data bank sampah periode Juni 2024</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <Card key={index} className="border-border hover:shadow-eco transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-primary font-medium">{stat.change} dari bulan lalu</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg ${stat.bgColor} flex items-center justify-center`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="border-border">
            <CardHeader>
              <CardTitle>Tren Pengumpulan Sampah</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="sampah" 
                    stroke="hsl(var(--primary))" 
                    strokeWidth={2}
                    name="Sampah (kg)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Sampah per Kategori</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={wasteTypeData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '0.5rem'
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="hsl(var(--primary))"
                    radius={[8, 8, 0, 0]}
                    name="Jumlah (kg)"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        <Card className="border-border">
          <CardHeader>
            <CardTitle>Transaksi Terbaru</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "Ibu Siti Aminah", type: "Plastik", weight: "12.5 kg", value: "Rp 37.500", time: "2 jam lalu" },
                { name: "Bapak Ahmad Yani", type: "Kertas", weight: "8.3 kg", value: "Rp 24.900", time: "3 jam lalu" },
                { name: "Ibu Dewi Lestari", type: "Logam", weight: "5.2 kg", value: "Rp 52.000", time: "5 jam lalu" },
                { name: "Bapak Joko Susilo", type: "Plastik", weight: "15.7 kg", value: "Rp 47.100", time: "6 jam lalu" },
              ].map((transaction, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors">
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{transaction.name}</p>
                    <p className="text-sm text-muted-foreground">{transaction.type} • {transaction.weight}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary">{transaction.value}</p>
                    <p className="text-xs text-muted-foreground">{transaction.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};