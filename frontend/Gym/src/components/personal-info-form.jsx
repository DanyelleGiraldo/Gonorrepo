"use client"

import React, { useState } from "react"
import { Check, Save } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Textarea } from "./ui/textarea"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"
import { DatePicker } from "./date-picker"

// Función simulada para el primer endpoint (login/registro)
const simulateAuthRequest = async (email, password) => {
  console.log("Simulando envío a /api/auth:", { email, password })
  return new Promise(resolve => setTimeout(() => resolve({ success: true }), 1000))
}

// Función simulada para el segundo endpoint (información personal)
const simulateProfileRequest = async (formData) => {
  console.log("Simulando envío a /api/profile:", formData)
  return new Promise(resolve => setTimeout(() => resolve({ success: true }), 1000))
}

export function PersonalInfoForm({ email, password }) {
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Primero enviamos los datos de autenticación
  React.useEffect(() => {
    if (email && password) {
      simulateAuthRequest(email, password)
        .then(response => {
          console.log("Respuesta de /api/auth:", response)
        })
        .catch(error => {
          console.error("Error en /api/auth:", error)
        })
    }
  }, [email, password])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = {
      firstName: e.target['first-name'].value,
      lastName: e.target['last-name'].value,
      birthDate: e.target['birth-date'].value,
      gender: e.target.gender.value,
      phone: e.target.phone.value,
      country: e.target.country.value,
      address: e.target.address.value
    }

    try {
      // Simulamos el envío al segundo endpoint
      const response = await simulateProfileRequest(formData)
      console.log("Respuesta de /api/profile:", response)
      setSubmitted(true)
    } catch (error) {
      console.error("Error en /api/profile:", error)
    } finally {
      setIsLoading(false)
    }
  }

  if (submitted) {
    return (
      <Card className="w-full border-2 border-blue-500/20 bg-white/90 backdrop-blur-sm shadow-xl">
        <CardHeader className="space-y-1 text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
            <Check className="h-10 w-10 text-green-600" />
          </div>
          <CardTitle className="text-2xl font-bold text-blue-700">¡Registro Completo!</CardTitle>
          <CardDescription>Tu cuenta ha sido creada exitosamente</CardDescription>
        </CardHeader>
        <CardFooter>
          <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
            <a href="/">Ir al inicio</a>
          </Button>
        </CardFooter>
      </Card>
    )
  }

  return (
    <Card className="w-full border-2 border-blue-500/20 bg-white/90 backdrop-blur-sm shadow-xl">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold text-blue-700">Información Personal</CardTitle>
        <CardDescription>Por favor completa tus datos personales</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">Nombre</Label>
              <Input id="first-name" name="first-name" placeholder="Juan" className="border-blue-200 focus:border-blue-500" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Apellido</Label>
              <Input id="last-name" name="last-name" placeholder="Pérez" className="border-blue-200 focus:border-blue-500" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="birth-date">Fecha de nacimiento</Label>
            <DatePicker name="birth-date" />
          </div>

          <div className="space-y-2">
            <Label>Género</Label>
            <RadioGroup name="gender" defaultValue="male" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male" className="cursor-pointer">
                  Masculino
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female" className="cursor-pointer">
                  Femenino
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other" className="cursor-pointer">
                  Otro
                </Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Teléfono</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+1 234 567 890"
              className="border-blue-200 focus:border-blue-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="country">País</Label>
            <Select name="country">
              <SelectTrigger className="border-blue-200 focus:border-blue-500">
                <SelectValue placeholder="Selecciona tu país" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mx">México</SelectItem>
                <SelectItem value="us">Estados Unidos</SelectItem>
                <SelectItem value="es">España</SelectItem>
                <SelectItem value="co">Colombia</SelectItem>
                <SelectItem value="ar">Argentina</SelectItem>
                <SelectItem value="cl">Chile</SelectItem>
                <SelectItem value="pe">Perú</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Dirección</Label>
            <Textarea
              id="address"
              name="address"
              placeholder="Calle, número, colonia, ciudad, estado, código postal"
              className="border-blue-200 focus:border-blue-500 min-h-[80px]"
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
            <Save className="mr-2 h-4 w-4" />
            {isLoading ? "Enviando..." : "Guardar información"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}