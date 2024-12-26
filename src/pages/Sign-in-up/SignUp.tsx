import { Button } from "@/components/ui/button"
import {  CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { User, Mail, Lock } from 'lucide-react'
import { Link } from "react-router-dom"

export default function SignUp() {
  return (
    <div className="min-h-screen md:flex font-plus-jakarta">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-purple-600 to-blue-500 justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-7xl">ZORTUS</h1>
          <p className="text-white mt-4 text-lg">Join our community of innovative educators</p>
        </div>
      </div>
      <div className="flex md:w-1/2 justify-center items-center bg-white p-8">
        <div className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl text-center">Create an Account</CardTitle>
            <p className="text-sm text-muted-foreground text-center">Sign up and start your journey with ZORTUS</p>
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

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm text-gray-400 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I agree to the terms and conditions
              </label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button className="w-full bg-indigo-600 hover:bg-indigo-700" type="submit">
              Sign Up
            </Button>
            <p className="text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to={'/signin'} className="text-sm p-0 text-purple-600 hover:underline">
                Sign In
              </Link>
            </p>
          </CardFooter>
        </div>
      </div>
    </div>
  )
}

