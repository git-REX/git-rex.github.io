import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar } from "lucide-react"

// Mock data for electrical engineering projects
const projects = [
  {
    id: "smart-home-automation",
    title: "Smart Home Automation System",
    description: "IoT-based home automation using ESP32, sensors, and mobile app control with real-time monitoring.",
    image: "/placeholder.svg?height=300&width=500",
    category: "IoT & Embedded Systems",
    date: "2024",
    tags: ["ESP32", "IoT", "Mobile App", "Sensors"],
    featured: true,
  },
  {
    id: "solar-mppt-controller",
    title: "Solar MPPT Charge Controller",
    description: "Maximum Power Point Tracking controller for solar panels with 95% efficiency and LCD display.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Power Electronics",
    date: "2023",
    tags: ["Solar", "MPPT", "Power Electronics", "Microcontroller"],
    featured: true,
  },
  {
    id: "wireless-power-transfer",
    title: "Wireless Power Transfer System",
    description: "Inductive power transfer system for electric vehicle charging with safety mechanisms.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Power Systems",
    date: "2023",
    tags: ["Wireless", "Power Transfer", "EV Charging", "Inductive"],
    featured: false,
  },
  {
    id: "motor-speed-controller",
    title: "DC Motor Speed Controller",
    description: "PWM-based speed controller with PID feedback control and regenerative braking.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Control Systems",
    date: "2023",
    tags: ["Motor Control", "PWM", "PID", "Feedback Control"],
    featured: false,
  },
  {
    id: "power-quality-analyzer",
    title: "Power Quality Analyzer",
    description: "Real-time power quality monitoring system with harmonic analysis and data logging.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Power Systems",
    date: "2022",
    tags: ["Power Quality", "Harmonics", "Data Logging", "Analysis"],
    featured: false,
  },
  {
    id: "smart-grid-simulator",
    title: "Smart Grid Simulation",
    description: "MATLAB/Simulink model of smart grid with renewable energy integration and load balancing.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Smart Grid",
    date: "2022",
    tags: ["Smart Grid", "MATLAB", "Simulation", "Renewable Energy"],
    featured: false,
  },
]

export default function ProjectsPage() {
  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="relative max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Engineering Projects
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Explore my journey through innovative electrical engineering solutions, from IoT systems to power
            electronics and smart grid technologies.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {projects.length} Projects
            </span>
            <span>•</span>
            <span>2022 - 2024</span>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        {/* Featured Projects */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full" />
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={500}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-600">{project.category}</Badge>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h3>
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="text-slate-600 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-sm text-slate-500">{project.date}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* All Projects Grid */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-3">
            <span className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full" />
            All Projects
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`}>
                <Card className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-white/70 backdrop-blur-sm h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 left-3 bg-slate-800 hover:bg-slate-900 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="text-xs text-slate-500">{project.date}</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
