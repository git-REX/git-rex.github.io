import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Calendar, ExternalLink, Github, Play } from "lucide-react"
import { notFound } from "next/navigation"

// Mock detailed project data
const projectsData = {
  "smart-home-automation": {
    title: "Smart Home Automation System",
    description:
      "A comprehensive IoT-based home automation system that allows users to control and monitor their home appliances remotely through a mobile application. The system integrates multiple sensors, actuators, and communication protocols to create a seamless smart home experience.",
    category: "IoT & Embedded Systems",
    date: "2024",
    duration: "6 months",
    tags: ["ESP32", "IoT", "Mobile App", "Sensors", "WiFi", "MQTT"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    overview:
      "This project demonstrates the implementation of a complete smart home ecosystem using ESP32 microcontrollers, various sensors, and a custom mobile application. The system provides real-time monitoring and control capabilities for lighting, temperature, security, and energy management.",
    features: [
      "Remote control of lights, fans, and appliances",
      "Real-time temperature and humidity monitoring",
      "Motion detection and security alerts",
      "Energy consumption tracking",
      "Voice control integration",
      "Automated scheduling and scenes",
    ],
    technologies: [
      { name: "ESP32", description: "Main microcontroller for IoT connectivity" },
      { name: "React Native", description: "Cross-platform mobile application" },
      { name: "MQTT", description: "Lightweight messaging protocol" },
      { name: "Firebase", description: "Real-time database and authentication" },
      { name: "DHT22", description: "Temperature and humidity sensor" },
      { name: "PIR Sensor", description: "Motion detection" },
    ],
    challenges: [
      "Ensuring reliable WiFi connectivity across different network conditions",
      "Implementing secure communication between devices and mobile app",
      "Optimizing power consumption for battery-powered sensors",
      "Creating an intuitive user interface for non-technical users",
    ],
    results: [
      "Successfully controlled 12+ home appliances remotely",
      "Achieved 99.2% uptime for the system",
      "Reduced energy consumption by 23% through automated scheduling",
      "Positive feedback from 15+ beta testers",
    ],
    links: {
      github: "https://github.com/username/smart-home-automation",
      demo: "https://smart-home-demo.vercel.app",
      documentation: "https://docs.smart-home-project.com",
    },
  },
  "solar-mppt-controller": {
    title: "Solar MPPT Charge Controller",
    description:
      "A high-efficiency Maximum Power Point Tracking (MPPT) charge controller designed for solar photovoltaic systems. The controller optimizes power extraction from solar panels and safely charges battery banks with advanced protection features.",
    category: "Power Electronics",
    date: "2023",
    duration: "4 months",
    tags: ["Solar", "MPPT", "Power Electronics", "Microcontroller", "PWM", "Battery Management"],
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
      "/placeholder.svg?height=300&width=400",
    ],
    overview:
      "This project focuses on developing an efficient MPPT charge controller that maximizes power extraction from solar panels while providing comprehensive battery management and protection features. The system achieves 95%+ efficiency and includes real-time monitoring capabilities.",
    features: [
      "Maximum Power Point Tracking algorithm",
      "95%+ conversion efficiency",
      "LCD display for real-time monitoring",
      "Battery overcharge/discharge protection",
      "Temperature compensation",
      "Data logging capabilities",
    ],
    technologies: [
      { name: "Arduino Mega", description: "Main control unit" },
      { name: "Buck Converter", description: "DC-DC power conversion" },
      { name: "Current Sensors", description: "ACS712 for current measurement" },
      { name: "Voltage Dividers", description: "Voltage sensing circuits" },
      { name: "LCD Display", description: "16x2 character display" },
      { name: "MOSFET Drivers", description: "High-side gate drivers" },
    ],
    challenges: [
      "Implementing efficient MPPT algorithm for varying weather conditions",
      "Designing robust power electronics circuits",
      "Ensuring accurate current and voltage measurements",
      "Managing heat dissipation in high-power applications",
    ],
    results: [
      "Achieved 95.3% peak efficiency",
      "Successfully tracked MPP under various irradiance conditions",
      "Implemented comprehensive battery protection",
      "Reduced charging time by 18% compared to PWM controllers",
    ],
    links: {
      github: "https://github.com/username/solar-mppt-controller",
      documentation: "https://mppt-controller-docs.com",
    },
  },
  // Add more projects as needed
}

export default function ProjectDetailPage({ params }: { params: { id: string } }) {
  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <Badge className="bg-blue-500 hover:bg-blue-600">{project.category}</Badge>
            <span className="text-slate-500 flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {project.date}
            </span>
            <span className="text-slate-500">•</span>
            <span className="text-slate-500">{project.duration}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">{project.title}</h1>

          <p className="text-xl text-slate-600 mb-6 max-w-4xl">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3">
            {project.links.github && (
              <Button asChild className="bg-slate-800 hover:bg-slate-900">
                <Link href={project.links.github} target="_blank">
                  <Github className="w-4 h-4 mr-2" />
                  View Code
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button asChild variant="outline">
                <Link href={project.links.demo} target="_blank">
                  <Play className="w-4 h-4 mr-2" />
                  Live Demo
                </Link>
              </Button>
            )}
            {project.links.documentation && (
              <Button asChild variant="outline">
                <Link href={project.links.documentation} target="_blank">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Documentation
                </Link>
              </Button>
            )}
          </div>
        </div>

        {/* Main Image */}
        <div className="mb-12">
          <Image
            src={project.images[0] || "/placeholder.svg"}
            alt={project.title}
            width={800}
            height={500}
            className="w-full h-96 object-cover rounded-xl shadow-lg"
          />
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Overview</h2>
              <p className="text-slate-600 leading-relaxed">{project.overview}</p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Key Features</h2>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Technologies Used</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.technologies.map((tech, index) => (
                  <Card key={index} className="border-0 shadow-sm bg-white/70">
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-slate-800 mb-1">{tech.name}</h3>
                      <p className="text-sm text-slate-600">{tech.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            {/* Challenges & Solutions */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Challenges & Solutions</h2>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <div key={index} className="border-l-4 border-orange-400 pl-4">
                    <p className="text-slate-600">{challenge}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">Results & Impact</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <Card key={index} className="border-0 shadow-sm bg-gradient-to-br from-green-50 to-blue-50">
                    <CardContent className="p-4">
                      <p className="text-slate-700 font-medium">{result}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Additional Images */}
            <section>
              <h3 className="text-lg font-semibold text-slate-800 mb-4">Project Gallery</h3>
              <div className="grid grid-cols-2 gap-3">
                {project.images.slice(1).map((image, index) => (
                  <Image
                    key={index}
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 2}`}
                    width={200}
                    height={150}
                    className="w-full h-24 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  />
                ))}
              </div>
            </section>

            {/* Quick Stats */}
            <Card className="border-0 shadow-sm bg-white/70">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-800 mb-4">Project Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="text-sm text-slate-500">Category</span>
                    <p className="font-medium text-slate-800">{project.category}</p>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Duration</span>
                    <p className="font-medium text-slate-800">{project.duration}</p>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Year</span>
                    <p className="font-medium text-slate-800">{project.date}</p>
                  </div>
                  <div>
                    <span className="text-sm text-slate-500">Technologies</span>
                    <p className="font-medium text-slate-800">{project.tags.length} technologies</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
