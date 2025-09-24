import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, BookOpen } from "lucide-react";

const Signup = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Left Side - Benefits */}
                <div className="space-y-8">
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                      Join <span className="text-primary">Pregrad</span> Today
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      Start your journey to land your dream job with expert guidance, 
                      practical projects, and industry connections.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Expert-Led Courses</h3>
                        <p className="text-muted-foreground">Learn from industry professionals with real-world experience</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">1:1 Mentorship</h3>
                        <p className="text-muted-foreground">Get personalized guidance from industry mentors</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">Job Placement</h3>
                        <p className="text-muted-foreground">95% placement rate with top companies</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Badge variant="secondary">No Experience Required</Badge>
                    <Badge variant="secondary">Flexible Learning</Badge>
                    <Badge variant="secondary">Industry Recognized</Badge>
                  </div>

                  <div className="p-6 bg-gradient-card border border-pregrad-border rounded-lg">
                    <h4 className="text-lg font-semibold text-foreground mb-3">What's Included:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Access to all course materials</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Live interactive sessions</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Career counseling & job placement</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">Industry projects & portfolio building</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - Sign Up Form */}
                <div className="lg:sticky lg:top-24">
                  <Card className="p-8 bg-gradient-card border-pregrad-border">
                    <div className="text-center mb-8">
                      <h2 className="text-2xl font-bold text-foreground mb-2">Create Your Account</h2>
                      <p className="text-muted-foreground">Join thousands of successful students</p>
                    </div>

                    <form className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
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
                        <label className="text-sm font-medium text-foreground">Password</label>
                        <Input type="password" placeholder="••••••••" />
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Educational Background</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="working-professional">Working Professional</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Interested Domain</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Choose your area of interest" />
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
                        <label className="text-sm font-medium text-foreground">How did you hear about us?</label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select source" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="friend">Friend/Referral</SelectItem>
                            <SelectItem value="college">College/University</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex items-start space-x-3">
                        <input type="checkbox" className="mt-1 rounded border-pregrad-border" />
                        <div className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <button className="text-primary hover:underline">Terms of Service</button>
                          {" "}and{" "}
                          <button className="text-primary hover:underline">Privacy Policy</button>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <input type="checkbox" className="mt-1 rounded border-pregrad-border" />
                        <div className="text-sm text-muted-foreground">
                          I would like to receive updates about courses and career opportunities
                        </div>
                      </div>

                      <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                        Create Account
                      </Button>
                    </form>

                    <div className="mt-6">
                      <Separator className="my-4" />
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Already have an account?{" "}
                          <button 
                            onClick={() => window.location.href = '/login'}
                            className="text-primary hover:underline"
                          >
                            Sign in
                          </button>
                        </p>
                      </div>
                    </div>
                  </Card>
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

export default Signup;