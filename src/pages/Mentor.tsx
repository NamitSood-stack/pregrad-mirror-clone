import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Calendar, Award } from "lucide-react";

const Mentor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Become a <span className="text-primary">Mentor</span> at Pregrad
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Share your expertise and shape the next generation of tech professionals. 
                Join our community of industry leaders and make an impact.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="px-4 py-2">
                  <Users className="w-4 h-4 mr-2" />
                  500+ Students Mentored
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Flexible Schedule
                </Badge>
                <Badge variant="secondary" className="px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  Industry Recognition
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Why Mentor with Pregrad?
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="p-6 bg-gradient-card border-pregrad-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Make an Impact</h3>
                  <p className="text-muted-foreground">
                    Guide aspiring professionals and help them achieve their career goals in tech.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-card border-pregrad-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Flexible Commitment</h3>
                  <p className="text-muted-foreground">
                    Choose your availability and mentor according to your schedule.
                  </p>
                </Card>
                <Card className="p-6 bg-gradient-card border-pregrad-border">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Recognition & Growth</h3>
                  <p className="text-muted-foreground">
                    Build your personal brand and expand your professional network.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-pregrad-surface/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <Card className="p-8 bg-gradient-card border-pregrad-border">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-foreground mb-2">Apply to Become a Mentor</h2>
                  <p className="text-muted-foreground">Tell us about yourself and your expertise</p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">First Name</label>
                      <Input placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Last Name</label>
                      <Input placeholder="Doe" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="john@example.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input type="tel" placeholder="+1 (555) 123-4567" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Current Position</label>
                    <Input placeholder="Senior Software Engineer at Google" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Years of Experience</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3-5">3-5 years</SelectItem>
                        <SelectItem value="5-8">5-8 years</SelectItem>
                        <SelectItem value="8-12">8-12 years</SelectItem>
                        <SelectItem value="12+">12+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Areas of Expertise</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your primary expertise" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="data-science">Data Science & Analytics</SelectItem>
                        <SelectItem value="software-engineering">Software Engineering</SelectItem>
                        <SelectItem value="product-management">Product Management</SelectItem>
                        <SelectItem value="design">UI/UX Design</SelectItem>
                        <SelectItem value="marketing">Digital Marketing</SelectItem>
                        <SelectItem value="consulting">Management Consulting</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">LinkedIn Profile</label>
                    <Input placeholder="https://linkedin.com/in/yourprofile" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Why do you want to mentor?</label>
                    <Textarea 
                      placeholder="Share your motivation for mentoring students..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Availability</label>
                    <Textarea 
                      placeholder="Describe your preferred schedule and time commitment..."
                      className="min-h-[80px]"
                    />
                  </div>

                  <div className="flex items-start space-x-3">
                    <input type="checkbox" className="mt-1 rounded border-pregrad-border" />
                    <div className="text-sm text-muted-foreground">
                      I agree to Pregrad's mentor guidelines and commit to providing quality mentorship to students.
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Submit Application
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </section>

        {/* Requirements Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-foreground mb-12">
                Mentor Requirements
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Minimum 3 years of industry experience</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Strong communication and teaching skills</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Passion for helping others grow</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Commitment to regular mentoring sessions</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Professional background verification</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">Willingness to follow our mentoring guidelines</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Mentor;