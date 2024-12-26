"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { User, Mail, Lock } from 'lucide-react'

export default function SignIn() {
  return (
    <div className="min-h-screen md:flex font-plus-jakarta">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-purple-600 to-blue-500 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-7xl">ZORTUS</h1>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center items-center bg-white p-8">
        <div className="w-full max-w-md border-none">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Welcome!</CardTitle>
            <p className="text-sm text-muted-foreground text-center">Let's get started</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center border-2 rounded-full">
                <User className="h-5 w-5 text-gray-400 ml-3" />
                <Input className="border-none pl-2" type="text" placeholder="Full name" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center border-2 rounded-full">
                <Mail className="h-5 w-5 text-gray-400 ml-3" />
                <Input className="border-none pl-2" type="email" placeholder="Email Address" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center border-2 rounded-full">
                <Lock className="h-5 w-5 text-gray-400 ml-3" />
                <Input className="border-none pl-2" type="password" placeholder="Password" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700 rounded-full" type="submit">
              Login
            </Button>
            <Button variant="link" className="text-sm">
              Forgot Password?
            </Button>
          </CardFooter>
        </div>
      </div>
    </div>
  )
}

