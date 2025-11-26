'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader } from '../../components/ui/Card';
import { Loader2, Recycle } from 'lucide-react';

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupFullName, setSignupFullName] = useState('');
  const [signupPhone, setSignupPhone] = useState('');
  const [signupPhoneCode, setSignupPhoneCode] = useState('+62');
  const [signupAddress, setSignupAddress] = useState('');
  const [signupCity, setSignupCity] = useState('');

  const router = useRouter();

  const dummyUsers = [
    { email: 'user@mail.com', password: '123456', role: 'user' },
    { email: 'admin@mail.com', password: 'admin123', role: 'admin' }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const found = dummyUsers.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    setTimeout(() => {
      if (!found) {
        alert('Login gagal! Email atau password salah.');
        setIsLoading(false);
        return;
      }

      if (found.role === 'admin') router.push('/admin');
      else router.push('/dashboard');

      setIsLoading(false);
    }, 1000);
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (signupPassword.length < 6) {
      alert('Password minimal 6 karakter');
      setIsLoading(false);
      return;
    }

    setTimeout(() => {
      alert('Pendaftaran berhasil! Silakan login.');
      setSignupEmail('');
      setSignupPassword('');
      setSignupFullName('');
      setSignupPhone('');
      setSignupPhoneCode('+62');
      setSignupAddress('');
      setSignupCity('');
      setMode('login');
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-10" variant="outline" shadow='none'>
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <Recycle className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className='text-2xl font-bold'>Bank Sampah</h1>
          <CardDescription>Kelola sampah Anda dengan bijak</CardDescription>
        </CardHeader>

        <CardContent>
          {mode === 'login' ? (
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="flex flex-col gap-3">
                <label className='font-medium'>Email</label>
                <input
                  type="email"
                  className="w-full h-10 border border-border-secondary px-3 rounded"
                  placeholder="nama@email.com"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className='font-medium'>Password</label>
                <input
                  type="password"
                  className="w-full h-10 border border-border-secondary px-3 rounded"
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90"
                loading={isLoading}
              >
                Login
              </Button>

              <p className="text-center text-sm">
                Belum punya akun?{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => setMode('signup')}
                >
                  Daftar
                </button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="flex flex-col gap-3">
                <label className='font-medium'>Nama Lengkap</label>
                <input
                  type="text"
                  className="w-full h-10 border border-border-secondary px-3 rounded"
                  placeholder="John Doe"
                  value={signupFullName}
                  onChange={(e) => setSignupFullName(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className='font-medium'>Email</label>
                <input
                  type="email"
                  className="w-full h-10 border border-border-secondary px-3 rounded"
                  placeholder="nama@email.com"
                  value={signupEmail}
                  onChange={(e) => setSignupEmail(e.target.value)}
                  disabled={isLoading}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className='font-medium'>Nomor HP</label>
                <div className="flex gap-2">
                  <select
                    className="h-10 border border-border-secondary px-3 rounded bg-white appearance-none cursor-pointer hover:border-gray-400 transition-colors pr-8 bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.2em] bg-[right_0.5rem_center] bg-no-repeat"
                    value={signupPhoneCode}
                    onChange={(e) => setSignupPhoneCode(e.target.value)}
                    disabled={isLoading}
                  >
                    <option value="+62">🇮🇩 +62</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+65">🇸🇬 +65</option>
                    <option value="+60">🇲🇾 +60</option>
                    <option value="+61">🇦🇺 +61</option>
                  </select>
                  <input
                    type="tel"
                    className="flex-1 h-10 border border-border-secondary px-3 rounded hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="812345678"
                    value={signupPhone}
                    onChange={(e) => setSignupPhone(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <label className='font-medium'>Kota</label>
                <select
                  className="w-full h-10 border border-border-secondary px-3 rounded bg-white appearance-none cursor-pointer hover:border-gray-400 transition-colors pr-8 bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27currentColor%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.2em] bg-[right_0.5rem_center] bg-no-repeat focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  value={signupCity}
                  onChange={(e) => setSignupCity(e.target.value)}
                  disabled={isLoading}
                >
                  <option value="">Pilih Kota</option>
                  <option value="Jakarta">Jakarta</option>
                  <option value="Surabaya">Surabaya</option>
                  <option value="Bandung">Bandung</option>
                  <option value="Medan">Medan</option>
                  <option value="Semarang">Semarang</option>
                  <option value="Makassar">Makassar</option>
                  <option value="Palembang">Palembang</option>
                  <option value="Tangerang">Tangerang</option>
                  <option value="Depok">Depok</option>
                  <option value="Bekasi">Bekasi</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                  <option value="Malang">Malang</option>
                  <option value="Bogor">Bogor</option>
                  <option value="Denpasar">Denpasar</option>
                  <option value="Batam">Batam</option>
                </select>
              </div>

              <div className="flex flex-col gap-3">
                <label className='font-medium'>Alamat Lengkap</label>
                <textarea
                  className="w-full border border-border-secondary px-3 py-2 rounded hover:border-gray-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Jl. Contoh No. 123, RT/RW, Kelurahan, Kecamatan"
                  value={signupAddress}
                  onChange={(e) => setSignupAddress(e.target.value)}
                  disabled={isLoading}
                  rows={3}
                />
              </div>

              <div className="flex flex-col gap-3">
                <label className='font-medium'>Password</label>
                <input
                  type="password"
                  className="w-full h-10 border border-border-secondary px-3 rounded"
                  placeholder="••••••••"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                  disabled={isLoading}
                />
                <p className="text-xs text-gray-500">Minimal 6 karakter</p>
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Daftar
              </Button>

              <p className="text-center text-sm">
                Sudah punya akun?{' '}
                <button
                  type="button"
                  className="text-blue-600 hover:underline cursor-pointer"
                  onClick={() => setMode('login')}
                >
                  Login
                </button>
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}