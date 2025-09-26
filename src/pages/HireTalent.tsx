import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { Users, Award, Briefcase, TrendingUp } from "lucide-react";

const HireTalent = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    requiredSkills: '',
    jobRequirements: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.companyName || !formData.contactPerson || !formData.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Request Submitted!",
      description: "We'll get back to you within 24 hours with suitable talent profiles.",
    });

    // Reset form
    setFormData({
      companyName: '',
      contactPerson: '',
      email: '',
      phone: '',
      requiredSkills: '',
      jobRequirements: ''
    });
  };
  const stats = [
    { icon: Users, label: "Pre-trained Talent", value: "24k+" },
    { icon: Award, label: "Industry Certified", value: "300+" },
    { icon: Briefcase, label: "Ready to Deploy", value: "1000+" },
    { icon: TrendingUp, label: "Success Rate", value: "95%" }
  ];

  const skills = [
    "Data Science", "AI/ML", "Full Stack Development", "DevOps", 
    "Cloud Computing", "Digital Marketing", "Business Analytics", 
    "Product Management", "Java Spring Boot", "Mobile Development"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
                Hire Pre-Trained Talent
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access our pool of industry-ready professionals who have completed rigorous training programs and real-world projects. Save time and resources on training.
              </p>

              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                Start Hiring
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-gradient-card border-pregrad-border hover:shadow-card transition-all duration-300">
                  <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-pregrad-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Available Skill Sets
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our talent pool covers a wide range of in-demand technologies and skills across various domains.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge key={index} variant="outline" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get in Touch
                </h2>
                <p className="text-muted-foreground">
                  Tell us about your hiring needs and we'll connect you with the right talent.
                </p>
              </div>

              <Card className="p-8 bg-gradient-card border-pregrad-border">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Company Name *</label>
                      <Input 
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Your company name" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Contact Person *</label>
                      <Input 
                        name="contactPerson"
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Your name" 
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your@email.com" 
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Phone</label>
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 9999999999" 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Required Skills</label>
                    <Input 
                      name="requiredSkills"
                      value={formData.requiredSkills}
                      onChange={handleInputChange}
                      placeholder="e.g., Data Science, React, Python" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Job Requirements</label>
                    <Textarea 
                      name="jobRequirements"
                      value={formData.jobRequirements}
                      onChange={handleInputChange}
                      placeholder="Describe your requirements, number of positions, experience level, etc."
                      rows={4}
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Submit Requirements
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-pregrad-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Why Hire from Pregrad?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 bg-gradient-card border-pregrad-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Pre-trained & Ready</h3>
                <p className="text-muted-foreground">
                  Our candidates have completed intensive training programs and are immediately productive.
                </p>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-pregrad-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Industry Certified</h3>
                <p className="text-muted-foreground">
                  All candidates hold certifications from leading technology companies like IBM, Microsoft, and Meta.
                </p>
              </Card>
              
              <Card className="p-6 bg-gradient-card border-pregrad-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Project Experience</h3>
                <p className="text-muted-foreground">
                  Every candidate has worked on real-world projects and built a portfolio of their work.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HireTalent;