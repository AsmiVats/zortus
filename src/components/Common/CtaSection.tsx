import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <div className="w-full mx-auto mb-4 p-4">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-black to-gray-900 p-12">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Ready to Zortify with us ?
          </h2>
          <Button 
            variant="secondary" 
            size="lg"
            className="hidden md:inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-6 py-6 text-lg font-medium"
          >
            Get Started
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
        <Button 
          variant="secondary" 
          size="lg"
          className="mt-6 md:hidden w-full items-center gap-2 bg-white text-black hover:bg-white/90 rounded-full px-6 py-6 text-lg font-medium"
        >
          Get Started
          <ArrowRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

