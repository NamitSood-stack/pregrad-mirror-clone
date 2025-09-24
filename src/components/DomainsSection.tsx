import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  BarChart3, 
  Settings, 
  Cloud, 
  Code, 
  Smartphone, 
  Megaphone, 
  DollarSign, 
  TrendingUp, 
  Briefcase, 
  Package, 
  Coffee 
} from "lucide-react";

const DomainsSection = () => {
  const domains = [
    {
      title: "AI/ML",
      icon: Brain,
      color: "bg-purple-500"
    },
    {
      title: "Data Science", 
      icon: BarChart3,
      color: "bg-blue-500"
    },
    {
      title: "DevOps",
      icon: Settings,
      color: "bg-green-500"
    },
    {
      title: "Cloud Computing",
      icon: Cloud,
      color: "bg-sky-500"
    },
    {
      title: "Fullstack Development",
      icon: Code,
      color: "bg-orange-500"
    },
    {
      title: "App Development",
      icon: Smartphone,
      color: "bg-indigo-500"
    },
    {
      title: "Digital Marketing",
      icon: Megaphone,
      color: "bg-pink-500"
    },
    {
      title: "Finance",
      icon: DollarSign,
      color: "bg-emerald-500"
    },
    {
      title: "Business Analytics",
      icon: TrendingUp,
      color: "bg-teal-500"
    },
    {
      title: "Investment Banking",
      icon: Briefcase,
      color: "bg-slate-500"
    },
    {
      title: "Product",
      icon: Package,
      color: "bg-amber-500"
    },
    {
      title: "Java Springboot",
      icon: Coffee,
      color: "bg-red-500"
    }
  ];

  return (
    <section className="py-16 bg-pregrad-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Domains We Cover
          </h2>
          
          {/* Powered By Section */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Powered by:</p>
            <div className="flex justify-center flex-wrap gap-4 items-center">
              <Badge variant="outline" className="px-3 py-1">IBM</Badge>
              <Badge variant="outline" className="px-3 py-1">Microsoft</Badge>
              <Badge variant="outline" className="px-3 py-1">Meta</Badge>
              <Badge variant="outline" className="px-3 py-1">Cisco</Badge>
            </div>
          </div>
        </div>

        {/* Video placeholder */}
        <div className="text-center mb-16">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-pregrad-border overflow-hidden">
            <div className="aspect-video bg-pregrad-bg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎥</div>
                <p className="text-muted-foreground">Domain Overview Video</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Domains Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {domains.map((domain, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-pregrad-border hover:shadow-card transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${domain.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <domain.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {domain.title}
                </h3>
                <div className="h-16 bg-pregrad-bg rounded-lg flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">Course Preview</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DomainsSection;