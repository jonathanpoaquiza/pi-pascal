'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [formState, setFormState] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular login
    setTimeout(() => {
      setIsLoading(false);
      alert('Iniciando sesión...');
    }, 1500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[linear-gradient(135deg,#f8f7f3_0%,#eef3f3_55%,#dce8ed_100%)] px-4 py-12">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-4xl">π</div>
            <h1 className="text-3xl font-black text-[#082b4f]">Pascal</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Iniciar sesión</h2>
          <p className="text-gray-600">
            Accede a tus cursos y continúa aprendiendo
          </p>
        </div>

        {/* Card */}
        <div className="site-panel p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                Correo electrónico
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="site-input"
                placeholder="tu@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="password" className="text-sm font-semibold text-gray-900">
                  Contraseña
                </label>
                <Link
                  href="/recuperar-contraseña"
                  className="site-link text-sm"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                  required
                  className="site-input"
                  placeholder="Tu contraseña"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-600 hover:text-gray-900"
                >
                  {showPassword ? '👁️' : '👁️‍🗨️'}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                checked={formState.rememberMe}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <label htmlFor="rememberMe" className="text-sm text-gray-700 cursor-pointer">
                Recuérdame en este navegador
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              className="w-full mt-6"
            >
              Iniciar sesión
            </Button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">O continúa con</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="space-y-2">
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#c8d8dc] px-4 py-2.5 font-semibold text-[#082b4f] transition-colors hover:bg-[#eef3f3]"
            >
              <span>🔵</span> Google
            </button>
            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#c8d8dc] px-4 py-2.5 font-semibold text-[#082b4f] transition-colors hover:bg-[#eef3f3]"
            >
              <span>🤖</span> GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            ¿No tienes cuenta?{' '}
            <Link href="/registro" className="site-link">
              Regístrate ahora
            </Link>
          </p>

          {/* Info Box */}
          <div className="mt-6 rounded-xl border border-[#c8d8dc] bg-[#eef3f3] p-4">
            <p className="text-xs text-blue-900">
              <span className="font-semibold">Cuenta de demostración:</span> Usa cualquier email y contraseña para probarlo en modo demo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
