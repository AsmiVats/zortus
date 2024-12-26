import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

export default function BlogSection() {
  return (
    <div className="min-h-screen p-6 bg-transparent font-plus-jakarta">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 mb-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl/none ">
            Welcome to the <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"> ZORTUS</span> Blog,
            <br/> where innovation in education meets insightful discussions.
          </h1>
          <div className="space-y-6">
            <p className="text-muted-foreground text-lg">
              Dive into a world of expert insights, thought leadership, and the latest trends shaping the future of learning. Our blog is designed to inspire educators, provide practical tips, and explore how cutting-edge technologies like AI and 3D simulations are revolutionizing classrooms across the globe.
            </p>
            <Button variant="outline" className="rounded-full hover:bg-black hover:text-zinc-200" size="lg">
              See more
            </Button>
          </div>
        </div>

        <div className="grid p-4 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <BlogCard
            color="bg-sky-400"
            title="The Future of Education with Generative AI"
            description="Discover how AI is transforming the way content is created and delivered in education, making..."
          />
          <BlogCard
            color="bg-red-400"
            title="Creating Immersive Learning Experiences with 3D Simulations"
            description="Learn how 3D simulations are enhancing student engagement by providing interactive and im..."
          />
          <BlogCard
            color="bg-violet-400"
            title="Breaking Language Barriers in Education"
            description="Explore the power of multilingual support in ZORTUS and how it's enabling educators to reach a d..."
          />
        </div>
      </div>
    </div>
  )
}

interface BlogCardProps {
  color: string
  title: string
  description: string
}

function BlogCard({ color, title, description }: BlogCardProps) {
  return (
    <Card className="shadow-lg bg-white font-plus-jakarta p-2 rounded-lg  ">
      <CardContent className="p-6 space-y-4">
      <div className="flex justify-between">
      <div className={`w-3 h-3 rounded-full ${color}`} />
      <div className="text-sm text-muted-foreground">5 min read</div>
      </div>
        
        <h2 className="text-2xl font-semibold">{title}</h2>
        <div className="flex justify-between items-center py-3">
        <p className="text-muted-foreground">{description}</p>
        <Button variant="ghost" size={'lg'} className="p-0 h-auto hover:bg-transparent" aria-label="Read more">
          <ArrowRight className="h-5 w-5" />
        </Button>
        </div>
        
      </CardContent>
    </Card>
  )
}

