import Link from "next/link"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Dumbbell } from "lucide-react"

export default function LoginPage() {
  return (
    <div className="relative flex h-screen w-full">
      {/* Background image for the entire page */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          filter: "brightness(0.7)",
        }}
      ></div>

      {/* Content container */}
      <div className="relative z-10 flex w-full">
        {/* Login form section (40% width) */}
        <div className="flex w-[40%] items-center justify-center p-8">
          <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white/95 p-8 shadow-lg backdrop-blur-sm">
            <div className="mb-6 flex flex-col items-center">
              <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Dumbbell className="h-6 w-6 text-blue-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">FitGym Login</h1>
              <p className="text-sm text-gray-500">Accede a tu cuenta para continuar</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="tu@email.com" className="rounded-lg" required />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <Input id="password" type="password" className="rounded-lg" required />
              </div>

              <Button type="submit" className="w-full rounded-lg bg-blue-600 hover:bg-blue-700">
                Iniciar Sesión
              </Button>
            </form>

            <div className="mt-6 flex items-center justify-between">
              <Link href="/register" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                Registrarse
              </Link>
              <Link href="/forgot-password" className="text-sm font-medium text-blue-600 hover:text-blue-800">
                Olvidé mi contraseña
              </Link>
            </div>

            <div className="mt-8">
              <p className="text-center text-xs text-gray-500">
                Entrena duro, vive saludable. Tu camino al éxito comienza aquí.
              </p>
            </div>
          </div>
        </div>

        {/* Welcome text section (60% width) */}
        <div className="flex w-[60%] items-center justify-center p-12">
          <div className="text-white">
            <h2 className="mb-4 text-4xl font-bold">Bienvenido a FitGym</h2>
            <p className="max-w-md text-lg">
              Tu lugar para transformar tu cuerpo y mente. Comienza tu viaje fitness hoy mismo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
