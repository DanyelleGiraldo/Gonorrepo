"use client"

import React, { useState } from "react"
import { Mail, Lock, User, Phone, Calendar } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group"
import { AnimatePresence } from "framer-motion"
import { Fitness3DModel } from "../../components/fitness-3d-model"
import { ThemeToggle } from "../../components/theme-toggle"

export default function RegisterPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phone: "",
    birthdate: "",
    gender: "male",
  })

  const [errors, setErrors] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  })

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))

    // Clear errors when typing
    if (field in errors) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {
      email: "",
      password: "",
      confirmPassword: "",
    }

    let isValid = true

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid email is required"
      isValid = false
    }

    if (!formData.password || formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
      isValid = false
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleNextStep = () => {
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the registration process
    console.log("Registration data:", formData)
    // For now, just show an alert
    alert("Registration successful! Welcome to FitLife Elite!")
  }

  const isStep2Valid = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.birthdate.trim() !== ""
    )
  }

  return (
    <main className="flex min-h-screen flex-col md:flex-row">
      {/* Left Section - Dark with Background Image and 3D Model */}
      <div className="relative flex w-full flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-900 to-blue-900 p-8 dark:from-gray-950 dark:to-blue-950 md:w-1/2 lg:p-12">
        {/* Theme Toggle */}
        <div className="absolute right-4 top-4 z-20">
          <ThemeToggle />
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10 mix-blend-overlay"
            style={{
              backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/80 dark:from-gray-950/90 dark:to-blue-950/90" />
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="mb-2 font-serif text-4xl font-bold text-white md:text-5xl">
            Join <span className="text-amber-400">FitLife Elite</span>
          </h1>
          <p className="mb-6 text-lg font-light tracking-wide text-blue-100/90 dark:text-blue-100/80">
            Begin your premium fitness journey today.
          </p>

          {/* Botón View Membership Plans */}
          <Button className="rounded-full bg-amber-400 px-8 text-gray-900 hover:bg-amber-300 dark:bg-amber-500 dark:hover:bg-amber-400">
            View Elite Plans
          </Button>
        </div>

        {/* 3D Model - Ahora más grande y centrado */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="h-[90%] w-[90%] max-w-[600px]">
            <Fitness3DModel />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 z-0 h-32 w-32 rounded-full bg-amber-400/10"></div>
        <div className="absolute bottom-12 left-12 z-0 h-16 w-16 rounded-full bg-blue-400/10"></div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="flex w-full items-center justify-center bg-gray-50 p-8 dark:bg-gray-900 md:w-1/2 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">Create Account</h2>
            <p className="text-gray-600 dark:text-gray-400">Join our exclusive fitness community</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Step indicator */}
            <div className="mb-6 flex items-center justify-center">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 1
                    ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white dark:from-blue-600 dark:to-blue-800"
                    : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                }`}
              >
                1
              </div>
              <div
                className={`h-1 w-16 ${step >= 2 ? "bg-blue-700 dark:bg-blue-600" : "bg-gray-200 dark:bg-gray-700"}`}
              ></div>
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  step >= 2
                    ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white dark:from-blue-600 dark:to-blue-800"
                    : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                }`}
              >
                2
              </div>
            </div>

            <AnimatePresence mode="wait">
              {step === 1 ? (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        value={formData.email}
                        onChange={(e) => updateFormData("email", e.target.value)}
                        required
                      />
                    </div>
                    {errors.email && <p className="text-sm text-red-500 dark:text-red-400">{errors.email}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        value={formData.password}
                        onChange={(e) => updateFormData("password", e.target.value)}
                        required
                      />
                    </div>
                    {errors.password && <p className="text-sm text-red-500 dark:text-red-400">{errors.password}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="••••••••"
                        className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        value={formData.confirmPassword}
                        onChange={(e) => updateFormData("confirmPassword", e.target.value)}
                        required
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-sm text-red-500 dark:text-red-400">{errors.confirmPassword}</p>
                    )}
                  </div>

                  <Button
                    type="button"
                    className="w-full rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 py-6 text-base font-medium shadow-lg transition-all hover:from-blue-800 hover:to-blue-950 hover:shadow-xl dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900"
                    onClick={handleNextStep}
                  >
                    Continue
                  </Button>
                </motion.div>
              ) : (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        First Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <Input
                          id="firstName"
                          placeholder="John"
                          className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                          value={formData.firstName}
                          onChange={(e) => updateFormData("firstName", e.target.value)}
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="rounded-lg border-gray-300 bg-white shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        value={formData.lastName}
                        onChange={(e) => updateFormData("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        value={formData.phone}
                        onChange={(e) => updateFormData("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="birthdate" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Date of Birth
                    </Label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="birthdate"
                        type="date"
                        className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                        value={formData.birthdate}
                        onChange={(e) => updateFormData("birthdate", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-gray-700 dark:text-gray-300">Gender</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(value) => updateFormData("gender", value)}
                      className="flex space-x-4"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="male" id="male" className="text-amber-400" />
                        <Label htmlFor="male" className="cursor-pointer dark:text-gray-300">
                          Male
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="female" id="female" className="text-amber-400" />
                        <Label htmlFor="female" className="cursor-pointer dark:text-gray-300">
                          Female
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="other" id="other" className="text-amber-400" />
                        <Label htmlFor="other" className="cursor-pointer dark:text-gray-300">
                          Other
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      className="w-1/2 rounded-lg border-gray-300 bg-white shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
                      onClick={() => setStep(1)}
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="w-1/2 rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 py-6 text-base font-medium shadow-lg transition-all hover:from-blue-800 hover:to-blue-950 hover:shadow-xl dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900"
                      disabled={!isStep2Valid()}
                    >
                      Sign Up
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <a
                href="/"
                className="font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
              >
                Sign in
              </a>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}