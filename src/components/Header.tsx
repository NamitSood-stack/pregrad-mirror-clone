import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import pregradLogo from "@/assets/pregrad-logo.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-pregrad-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => handleNavigation("/")}
          >
            <img src={pregradLogo} alt="Pregrad" className="h-8 w-auto mr-2" />
            <span className="text-xl font-bold text-primary">Pregrad</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-foreground hover:text-primary transition-colors">
                Programs
              </button>
            </div>
            <button 
              onClick={() => handleNavigation("/hire-talent")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Hire Talent
            </button>
            <button 
              onClick={() => handleNavigation("/mentor")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Apply as Mentor
            </button>
            <button 
              onClick={() => handleNavigation("/resources")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Free Resources
            </button>
            <button 
              onClick={() => handleNavigation("/login")}
              className="text-foreground hover:text-primary transition-colors"
            >
              Login
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-pregrad-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => handleNavigation("/programs")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-pregrad-surface rounded-md w-full text-left"
              >
                Programs
              </button>
              <button 
                onClick={() => handleNavigation("/hire-talent")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-pregrad-surface rounded-md w-full text-left"
              >
                Hire Talent
              </button>
              <button 
                onClick={() => handleNavigation("/mentor")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-pregrad-surface rounded-md w-full text-left"
              >
                Apply as Mentor
              </button>
              <button 
                onClick={() => handleNavigation("/resources")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-pregrad-surface rounded-md w-full text-left"
              >
                Free Resources
              </button>
              <button 
                onClick={() => handleNavigation("/login")}
                className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-pregrad-surface rounded-md w-full text-left"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;