"use client"

import React, { useState } from "react"
import { X, Mail, ArrowRight } from "lucide-react"
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Label } from "./ui/label"
import { useTheme } from "./theme-provider"

export function ForgotPasswordModal({ isOpen, onClose }) {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { theme } = useTheme()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the password reset request
    console.log("Password reset requested for:", email)
    setIsSubmitted(true)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-2xl dark:bg-gray-800">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-serif text-2xl font-bold text-gray-900 dark:text-white">Reset Password</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reset-email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  id="reset-email"
                  type="email"
                  placeholder="Enter your email address"
                  className="rounded-lg border-gray-300 bg-white pl-10 shadow-sm transition-all focus:border-amber-400 focus:ring-amber-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                We'll send you a link to reset your password.
              </p>
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="rounded-lg border-gray-300 bg-white shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg transition-all hover:from-blue-800 hover:to-blue-950 hover:shadow-xl dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900"
              >
                Send Reset Link
              </Button>
            </div>
          </form>
        ) : (
          <div className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
              <ArrowRight className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">Check your email</h3>
            <p className="text-gray-600 dark:text-gray-400">
              We've sent a password reset link to <span className="font-medium">{email}</span>
            </p>
            <Button
              onClick={onClose}
              className="w-full rounded-lg bg-gradient-to-r from-blue-700 to-blue-900 shadow-lg transition-all hover:from-blue-800 hover:to-blue-950 hover:shadow-xl dark:from-blue-600 dark:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-900"
            >
              Close
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}