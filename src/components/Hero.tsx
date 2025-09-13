import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";
import analyticsChart from "@/assets/analytics-chart.jpg";

const Hero = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              YOUR PREFERRED 
              <span className="block text-accent">PARTNER</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed max-w-2xl">
              eQuire Technologies offers a wide range of services tailored to suit your individual requirements. 
              We are innovators in the fields of book production, data processing, E-learning, accessibility, 
              transcription and captioning, testing, virtual assistance and data labeling.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-hero hover:shadow-card-hover transition-all transform hover:scale-105"
            >
              READ MORE
            </Button>
          </div>
          <div className="relative animate-scale-in">
            <img 
              src={heroImage} 
              alt="Professional data analytics and digital services"
              className="w-full rounded-lg shadow-hero"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg overflow-hidden shadow-card">
              <img 
                src={analyticsChart} 
                alt="Analytics chart" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;