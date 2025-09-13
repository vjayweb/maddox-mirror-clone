import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import globeNetwork from "@/assets/globe-network.jpg";
import { Globe, Users, MessageCircle } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Globe,
      title: "Wide range of services",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Highly customer-centric",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "Effective communication",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-6">Why Choose Us?</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Maddox invests a good amount of time to understand you and your business needs. 
              Upfront analysis enables us to create a seamless interface between your workflow 
              and our proven internal processes. We treat every project as a goal-sharing 
              experience with you and strive to produce high-quality products, on time and within budget.
            </p>
            
            <div className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center`}>
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-lg font-semibold text-foreground">
                      {index + 1}. {feature.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              More About Us
            </Button>
          </div>
          
          <div className="relative animate-scale-in">
            <Card className="bg-gradient-card shadow-card">
              <CardContent className="p-0">
                <img 
                  src={globeNetwork} 
                  alt="Global network representing our wide range of services"
                  className="w-full rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;