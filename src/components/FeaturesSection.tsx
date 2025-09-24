import { Card } from "@/components/ui/card";
import { BookOpen, Users, Trophy, Heart, Award, Network } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Learn by doing",
      description: "Practical Application: Solidify your skills through bi-weekly challenges and competitions.",
      subtitle: "Projects: Gaining valuable hands-on experience, add credibility to your portfolio by working on Industry relevant projects."
    },
    {
      icon: Users,
      title: "Learn from the Best",
      description: "Experienced Mentors: Gain invaluable insights and guidance from mentors who are seasoned industry professionals.",
      subtitle: "Co-Created with Experts: Benefit from a curriculum designed in collaboration with industry mentors, ensuring you learn the most relevant skills for your chosen field."
    },
    {
      icon: Trophy,
      title: "Exclusive Opportunities",
      description: "Guest Sessions from Pioneers: Gain even deeper insights from exclusive guest sessions featuring industry pioneers.",
      subtitle: "Early Career Kickstart: Leverage our placement cell to access exciting Guaranteed early career opportunities before graduation."
    },
    {
      icon: Heart,
      title: "Learning with Community",
      description: "Thriving Community: Participate in community engagement sessions to connect with peers, share ideas, and build valuable soft skills.",
      subtitle: "Soft Skills Enhancement Workshops: Hone your communication, collaboration, and problem-solving skills through dedicated workshops."
    },
    {
      icon: Award,
      title: "Gain Global Recognition & Credentials",
      description: "Industry-Leading Certifications: Earn globally recognized certifications from leading industry giants like IBM, Microsoft, Meta, Intuit, Tally etc.",
      subtitle: "Dual Certification: Earn a PreGraduation Completion Certificate and a Project Completion Certificate from our program, showcasing your Skills, knowledge and project achievements to recruiters."
    },
    {
      icon: Network,
      title: "Build Your Network",
      description: "Connect with Industry Pioneers: Network with leading figures in your industry, opening doors to future opportunities.",
      subtitle: "Direct Access to Recruiters: Get noticed by potential employers through exclusive networking events with industry recruiters."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <p className="text-lg text-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.subtitle}
                  </p>
                </div>
              </div>

              {/* Visual Element */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <Card className="aspect-video bg-gradient-card border-pregrad-border flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <feature.icon className="w-16 h-16 text-primary mx-auto" />
                    <p className="text-muted-foreground">Feature Illustration</p>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;