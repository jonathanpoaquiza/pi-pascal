'use client';

import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false,
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value, type, checked } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular registro
    setTimeout(() => {
      setIsLoading(false);
      alert('Registro exitoso. Redirigiendo a tu cuenta...');
    }, 1500);
  };

  const isFormValid =
    formState.name &&
    formState.email &&
    formState.password &&
    formState.password === formState.confirmPassword &&
    formState.agreeTerms;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f8f7f3] to-[#dce8ed] py-12 px-4 flex items-center justify-center">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="text-4xl">π</div>
            <h1 className="text-3xl font-bold text-gray-900">Pascal</h1>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Crear cuenta</h2>
          <p className="text-gray-600">
            Únete a miles de estudiantes aprendiendo con nosotros
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                Nombre completo
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Juan Pérez"
              />
            </div>

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
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="tu@email.com"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-900 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  id="password"
                  value={formState.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Mínimo 8 caracteres"
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-semibold text-gray-900 mb-2"
              >
                Confirmar contraseña
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formState.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Confirma tu contraseña"
              />
              {formState.password &&
                formState.confirmPassword &&
                formState.password !== formState.confirmPassword && (
                  <p className="text-sm text-red-600 mt-1">
                    Las contraseñas no coinciden
                  </p>
                )}
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreeTerms"
                id="agreeTerms"
                checked={formState.agreeTerms}
                onChange={handleChange}
                className="mt-1 cursor-pointer"
              />
              <label htmlFor="agreeTerms" className="text-sm text-gray-700 cursor-pointer">
                Acepto los{' '}
                <Link href="/terminos" className="text-blue-600 hover:text-blue-700 font-semibold">
                  términos de servicio
                </Link>{' '}
                y{' '}
                <Link
                  href="/privacidad"
                  className="text-blue-600 hover:text-blue-700 font-semibold"
                >
                  política de privacidad
                </Link>
              </label>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              variant="primary"
              size="lg"
              isLoading={isLoading}
              disabled={!isFormValid}
              className="w-full mt-6"
            >
              Crear cuenta
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

          {/* Social Signup */}
          <div className="space-y-2">
            <button
              type="button"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <span>🔵</span> Google
            </button>
            <button
              type="button"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg font-semibold text-gray-900 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              <span>🤖</span> GitHub
            </button>
          </div>

          {/* Footer */}
          <p className="text-center text-gray-600 mt-6">
            ¿Ya tienes cuenta?{' '}
            <Link href="/login" className="text-blue-600 hover:text-blue-700 font-semibold">
              Inicia sesión
            </Link>
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl mb-2">✓</div>
            <p className="text-sm text-gray-700 font-semibold">Acceso inmediato</p>
          </div>
          <div>
            <div className="text-2xl mb-2">✓</div>
            <p className="text-sm text-gray-700 font-semibold">100% Seguro</p>
          </div>
          <div>
            <div className="text-2xl mb-2">✓</div>
            <p className="text-sm text-gray-700 font-semibold">Gratis</p>
          </div>
        </div>
      </div>
    </div>
  );
}
