import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const HeroSection = () => {
  const studentsData = [
    { id: 1, image: student1, color: "bg-blue-500" },
    { id: 2, image: student2, color: "bg-red-500" },
    { id: 3, image: student3, color: "bg-orange-500" },
    { id: 4, image: student1, color: "bg-red-600" },
    { id: 5, image: student2, color: "bg-green-500" },
    { id: 6, image: student3, color: "bg-teal-500" },
    { id: 7, image: student1, color: "bg-blue-600" },
    { id: 8, image: student2, color: "bg-red-700" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-slide-up">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Start your career{" "}
              <span className="text-primary">before Graduation</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
              Become Industry relevant, Build credibility and launch your career in less than a semester.{" "}
              <span className="font-semibold">Become Pre-Graduated</span>
            </p>
          </div>

          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-glow"
          >
            Apply Now
          </Button>

          {/* Powered By Section */}
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Powered by:</p>
            <div className="flex flex-wrap gap-4 items-center">
              <Badge variant="outline" className="px-3 py-1">IBM</Badge>
              <Badge variant="outline" className="px-3 py-1">Microsoft</Badge>
              <Badge variant="outline" className="px-3 py-1">Meta</Badge>
              <Badge variant="outline" className="px-3 py-1">Cisco</Badge>
            </div>
          </div>
        </div>

        {/* Right Content - Student Cards */}
        <div className="relative h-96 lg:h-[500px]">
          <div className="absolute inset-0 grid grid-cols-3 gap-4 p-4">
            {studentsData.map((student, index) => (
              <Card 
                key={student.id}
                className={`relative overflow-hidden bg-gradient-card border-pregrad-border hover:shadow-card transition-all duration-300 transform hover:scale-105 ${
                  index % 2 === 0 ? 'animate-float' : ''
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="p-4 flex flex-col items-center space-y-3">
                  <div className="relative">
                    <img 
                      src={student.image} 
                      alt={`Student ${student.id}`}
                      className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                    />
                  </div>
                  <Badge 
                    className={`${student.color} text-white border-none`}
                  >
                    Hired
                  </Badge>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default HeroSection;