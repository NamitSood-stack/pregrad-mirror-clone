import { useNavigate } from "react-router-dom";
import pregradLogo from "@/assets/pregrad-logo.png";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <footer className="bg-pregrad-bg border-t border-pregrad-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={pregradLogo} alt="Pregrad" className="h-8 w-auto mr-2" />
              <span className="text-xl font-bold text-primary">Pregrad</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>G Block Sector 6, Noida,</p>
              <p>Uttar Pradesh - 201301</p>
              <p>hello@pregrad.in</p>
              <p>+91 9971300194</p>
            </div>
          </div>

          {/* Programs */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Programs</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNavigation("/courses/data-science-and-analytics")}
                  className="hover:text-primary transition-colors"
                >
                  Data Science Course
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/courses/artificial-intelligence-machine-learning")}
                  className="hover:text-primary transition-colors"
                >
                  AI/ML course
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/courses/full-stack-development")}
                  className="hover:text-primary transition-colors"
                >
                  Fullstack development course
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/courses/advance-java")}
                  className="hover:text-primary transition-colors"
                >
                  Java Springboot course
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/courses/business-analytics")}
                  className="hover:text-primary transition-colors"
                >
                  Business Analytics Course
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/courses/digital-marketing")}
                  className="hover:text-primary transition-colors"
                >
                  Marketing Course
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNavigation("/hire-talent")}
                  className="hover:text-primary transition-colors"
                >
                  Hire from us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/refund-policy")}
                  className="hover:text-primary transition-colors"
                >
                  Refund Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/terms-and-conditions")}
                  className="hover:text-primary transition-colors"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation("/privacy-and-policy")}
                  className="hover:text-primary transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button 
                  onClick={() => handleNavigation("/resources")}
                  className="hover:text-primary transition-colors"
                >
                  Free Resources
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-pregrad-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © All right reserved | Pregrad Private Limited
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;