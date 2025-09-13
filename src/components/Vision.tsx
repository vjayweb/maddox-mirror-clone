import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart } from "lucide-react";

const Vision = () => {
  const values = [
    {
      icon: Target,
      title: "OUR MISSION",
      description: "We are committed to maintaining customer satisfaction, trust and integrity by delivering quality products and services conforming to the industry's best practices and continuous process improvement."
    },
    {
      icon: Eye,
      title: "OUR VISION", 
      description: "We envision ourselves to be one among the global leaders in every market we serve and to be the preferred partner of our clients by delivering outstanding products and services through state-of-the-art technology."
    },
    {
      icon: Heart,
      title: "OUR VALUES",
      description: "Our values are fundamental to our success. They are the foundation of Maddox and define who we are. Our core values – empathy, integrity and innovation – are all at the heart of Maddox."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border shadow-card hover:shadow-card-hover transition-all duration-300 text-center group"
            >
              <CardHeader>
                <div className="mx-auto w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-10 h-10 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">
                  {value.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Vision;