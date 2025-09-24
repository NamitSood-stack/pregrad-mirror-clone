import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

const DataScience = () => {
  const features = [
    "Hands-on projects with real datasets",
    "Industry-standard tools and technologies",
    "Machine Learning algorithms and implementation",
    "Data visualization and storytelling",
    "Statistical analysis and modeling",
    "Big Data processing with Python and R"
  ];

  const curriculum = [
    "Python for Data Science",
    "Statistics and Probability",
    "Data Cleaning and Preprocessing",
    "Exploratory Data Analysis",
    "Machine Learning Fundamentals",
    "Advanced ML Algorithms",
    "Deep Learning Basics",
    "Data Visualization",
    "Big Data Technologies",
    "Capstone Project"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <Badge className="bg-primary text-primary-foreground">
                Data Science & Analytics Course
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Master Data Science and Analytics
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transform raw data into actionable insights. Learn from industry experts and work on real-world projects to become a certified data scientist.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>6 months duration</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>Live mentorship</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Industry certification</span>
                </div>
              </div>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Enroll Now
              </Button>
            </div>
          </div>
        </section>

        {/* Course Features */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-foreground">
                  What You'll Learn
                </h2>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Card className="p-8 bg-gradient-card border-pregrad-border">
                <h3 className="text-xl font-semibold text-foreground mb-6">Course Highlights</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Duration:</span>
                    <span className="font-medium">6 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span className="font-medium">Online + Live sessions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Projects:</span>
                    <span className="font-medium">5+ real-world projects</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Certification:</span>
                    <span className="font-medium">Industry recognized</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Job Support:</span>
                    <span className="font-medium">Placement assistance</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Curriculum */}
        <section className="py-16 bg-pregrad-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Course Curriculum
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive curriculum designed with industry experts to ensure you learn the most in-demand skills.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {curriculum.map((topic, index) => (
                <Card key={index} className="p-4 bg-gradient-card border-pregrad-border hover:shadow-card transition-all duration-300">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </div>
                    <span className="text-foreground font-medium">{topic}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-foreground">
                Ready to Start Your Data Science Journey?
              </h2>
              <p className="text-muted-foreground">
                Join thousands of students who have successfully launched their careers in data science with our comprehensive program.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Apply Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DataScience;