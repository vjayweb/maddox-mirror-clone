import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "ANGIE TRAN",
    message: "I am so thankful for your involvement with us. Can't do much without your help. Did you know that your team is the only team I engage for my courses? Can't have anyone else."
  },
  {
    name: "STEVE MACKAY", 
    message: "We do value your work enormously. I appreciate all your hard work and support over many years. And hope we can build on our relationship over the years to come."
  },
  {
    name: "LUZETTE REYNEKE",
    message: "Please let your team know they are awesome! We have actually spoke about it a few times and we are all very impressed with everyone at eQuire Technologies."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What People Say</h2>
          <p className="text-xl text-muted-foreground">
            Hear from our satisfied clients
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-gradient-card border-border shadow-card hover:shadow-card-hover transition-all duration-300 group"
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Quote className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-card-foreground">
                  {testimonial.name}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed italic text-center">
                  "{testimonial.message}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;