import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">Maddox Solutions</h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your preferred partner for innovative business solutions. 
              We deliver quality services tailored to your individual requirements 
              across multiple industries and domains.
            </p>
            <Button 
              variant="secondary" 
              className="bg-accent hover:bg-accent-light text-accent-foreground"
            >
              Get Started
            </Button>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Book Production</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">E-Learning</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Testing</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Virtual Assistance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Data Processing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5" />
                <span>info@maddoxsolutions.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5" />
                <span>Global Services</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Maddox Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;