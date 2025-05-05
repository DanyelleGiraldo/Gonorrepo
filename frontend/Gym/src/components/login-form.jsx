"use client"

import { useState } from "react"
import { Eye, EyeOff, LogIn } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"

export function LoginForm({ onRegisterClick }) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Card className="w-full border-2 border-blue-500/20 bg-white/90 backdrop-blur-sm shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-blue-700">Bienvenido</CardTitle>
        <CardDescription>Ingresa tus credenciales para acceder</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input
            id="email"
            placeholder="tu@ejemplo.com"
            type="email"
            className="border-blue-200 focus:border-blue-500"
            required
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Contraseña</Label>
            <Button variant="link" className="p-0 h-auto text-xs text-blue-600">
              <a href="#">Olvidé mi contraseña</a>
            </Button>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="border-blue-200 focus:border-blue-500 pr-10"
              required
            />
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-blue-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              <span className="sr-only">{showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}</span>
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col space-y-3">
        <Button className="w-full bg-blue-600 hover:bg-blue-700">
          <LogIn className="mr-2 h-4 w-4" />
          Iniciar sesión
        </Button>
        <div className="text-center text-sm">
          ¿No tienes una cuenta?{" "}
          <Button variant="link" className="p-0 h-auto text-blue-600" onClick={onRegisterClick}>
            Regístrate
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}