import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  GraduationCap, 
  TestTube, 
  Headphones, 
  Database, 
  FileText, 
  BarChart, 
  Eye 
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Book Production Services",
    description: "All your publication needs will be taken care of with our wide range of services. We strive to provide technology driven solutions for print and media production.",
    link: "/book-production"
  },
  {
    icon: GraduationCap,
    title: "E-Learning Services",
    description: "Seeking an overhaul of your curriculum or want your materials to be updated? We handle everything from creating course plans, making and evaluating assessments.",
    link: "/e-learning"
  },
  {
    icon: TestTube,
    title: "Testing",
    description: "Ever feel like your website or game is missing something? Let us take over and test your content on multiple platforms, devices, and provide comprehensive QA reports.",
    link: "/testing"
  },
  {
    icon: Headphones,
    title: "Virtual Assistance",
    description: "A one-stop shop for all business needs. We offer a hassle-free virtual assistant to perform business tasks, including customer relations and content creation.",
    link: "/virtual-assistance"
  },
  {
    icon: Database,
    title: "Data Labeling",
    description: "Do you have lots of raw data but no way to train them on models? Let us do the heavy lifting with data annotation/classification and labelling.",
    link: "/data-labeling"
  },
  {
    icon: FileText,
    title: "Transcription and Captioning",
    description: "Tired of auto-generated captions? We offer captioning services for all your content in multiple formats that is both accessible and content aware.",
    link: "/transcription-captioning"
  },
  {
    icon: BarChart,
    title: "Data Processing Services",
    description: "Aims at fulfilling all your data management needs. Helps in freeing your key resources from routine tasks to concentrate on their core tasks.",
    link: "/data-processing"
  },
  {
    icon: Eye,
    title: "Accessibility",
    description: "We help you make your content concise, appropriate for all platforms and devices, and adhere to accessibility guidelines enabling you to cover a wide range of audience.",
    link: "/accessibility"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions tailored to meet your business needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-lg font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;