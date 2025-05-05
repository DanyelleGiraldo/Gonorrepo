"use client"

import React, { useState } from "react"
import { Facebook, Instagram, Mail, Lock } from "lucide-react"
import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
import { Separator } from "../../components/ui/separator"
import { ForgotPasswordModal } from "../../components/forgot-password-modal"
import { Fitness3DModel } from "../../components/fitness-3d-model"
import { ThemeToggle } from "../../components/theme-toggle"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Login attempt with:", { email, password })
    // Handle login logic here
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
          <img
            src="/placeholder.svg?height=1080&width=1920"
            alt="Gym Background"
            className="absolute h-full w-full object-cover opacity-10 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 to-blue-900/80 dark:from-gray-950/90 dark:to-blue-950/90" />
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="mb-2 font-serif text-4xl font-bold text-white md:text-5xl">
            FitLife <span className="text-amber-400">Elite</span>
          </h1>
          <p className="mb-6 text-lg font-light tracking-wide text-blue-100/90 dark:text-blue-100/80">
            Elevate your fitness journey with our premium experience.
          </p>

          {/* Learn More Button */}
          <Button className="rounded-full bg-amber-400 px-8 text-gray-900 hover:bg-amber-300 dark:bg-amber-500 dark:hover:bg-amber-400">
            Discover More
          </Button>
        </div>

        {/* 3D Model - Now bigger and centered */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="h-[90%] w-[90%] max-w-[600px]">
            <Fitness3DModel />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute left-0 top-0 z-0 h-32 w-32 rounded-full bg-amber-400/10"></div>
        <div className="absolute bottom-12 left-12 z-0 h-16 w-16 rounded-full bg-blue-400/10"></div>
      </div>

      {/* Right Section - Sign In Form */}
      <div className="flex w-full items-center justify-center bg-gray-50 p-8 dark:bg-gray-900 md:w-1/2 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
            <p className="text-gray-600 dark:text-gray-400">Sign in to access your premium membership</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="email"
                  placeholder="Email"
                  className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="password"
                  placeholder="Password"
                  className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex justify-end">
                <Button
                  variant="link"
                  className="h-auto p-0 text-sm text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
                  onClick={() => setShowForgotPasswordModal(true)}
                >
                  Forgot password?
                </Button>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 py-6 text-base font-medium shadow-lg transition-all hover:from-blue-800 hover:to-blue-950 hover:shadow-xl dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900"
            >
              Sign In
            </Button>

            <div className="relative my-6">
              <Separator className="bg-gray-200 dark:bg-gray-700" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2 text-sm text-gray-500 dark:bg-gray-900 dark:text-gray-400">
                or continue with
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button
                variant="outline"
                className="rounded-lg border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Facebook size={20} className="text-blue-600 dark:text-blue-400" />
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                  <path d="M1 1h22v22H1z" fill="none" />
                </svg>
              </Button>
              <Button
                variant="outline"
                className="rounded-lg border-gray-300 bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Instagram size={20} className="text-pink-600 dark:text-pink-400" />
              </Button>
            </div>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <a
                href="../register/page.jsx"
                className="font-medium text-amber-600 hover:text-amber-700 dark:text-amber-400 dark:hover:text-amber-300"
              >
                Sign up
              </a>
            </div>
          </form>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <ForgotPasswordModal isOpen={showForgotPasswordModal} onClose={() => setShowForgotPasswordModal(false)} />
      )}
    </main>
  )
}