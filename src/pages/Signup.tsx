import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { z } from "zod";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Award, BookOpen } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const signupSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  password: z.string().min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  education: z.string().min(1, "Please select your education level"),
  domain: z.string().min(1, "Please select your area of interest"),
  source: z.string().min(1, "Please select how you heard about us"),
  termsAccepted: z.boolean().refine(val => val === true, "You must accept the terms and conditions"),
});

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    education: "",
    domain: "",
    source: "",
    termsAccepted: false,
    marketingOptIn: false,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { signUp, user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      const validatedData = signupSchema.parse(formData);
      
      const { error } = await signUp(
        validatedData.email,
        validatedData.password,
        validatedData.firstName,
        validatedData.lastName
      );
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Signup failed",
          description: error.message,
        });
      } else {
        toast({
          title: "Account created successfully!",
          description: "Please check your email to verify your account.",
        });
        navigate('/dashboard');
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: { [key: string]: string } = {};
        error.issues.forEach((issue) => {
          if (issue.path[0]) {
            newErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(newErrors);
      }
    } finally {
      setLoading(false);
    }
  };

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

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">First Name</label>
                          <Input 
                            placeholder="John"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className={errors.firstName ? "border-destructive" : ""}
                          />
                          {errors.firstName && (
                            <p className="text-sm text-destructive">{errors.firstName}</p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Last Name</label>
                          <Input 
                            placeholder="Doe"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className={errors.lastName ? "border-destructive" : ""}
                          />
                          {errors.lastName && (
                            <p className="text-sm text-destructive">{errors.lastName}</p>
                          )}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Email</label>
                        <Input 
                          type="email" 
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className={errors.email ? "border-destructive" : ""}
                        />
                        {errors.email && (
                          <p className="text-sm text-destructive">{errors.email}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Phone Number</label>
                        <Input 
                          type="tel" 
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className={errors.phone ? "border-destructive" : ""}
                        />
                        {errors.phone && (
                          <p className="text-sm text-destructive">{errors.phone}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Password</label>
                        <Input 
                          type="password" 
                          placeholder="••••••••"
                          value={formData.password}
                          onChange={(e) => handleInputChange('password', e.target.value)}
                          className={errors.password ? "border-destructive" : ""}
                        />
                        {errors.password && (
                          <p className="text-sm text-destructive">{errors.password}</p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Password must be at least 8 characters with uppercase, lowercase, and number
                        </p>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Educational Background</label>
                        <Select value={formData.education} onValueChange={(value) => handleInputChange('education', value)}>
                          <SelectTrigger className={errors.education ? "border-destructive" : ""}>
                            <SelectValue placeholder="Select your education level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="undergraduate">Undergraduate</SelectItem>
                            <SelectItem value="graduate">Graduate</SelectItem>
                            <SelectItem value="working-professional">Working Professional</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.education && (
                          <p className="text-sm text-destructive">{errors.education}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">Interested Domain</label>
                        <Select value={formData.domain} onValueChange={(value) => handleInputChange('domain', value)}>
                          <SelectTrigger className={errors.domain ? "border-destructive" : ""}>
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
                        {errors.domain && (
                          <p className="text-sm text-destructive">{errors.domain}</p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-foreground">How did you hear about us?</label>
                        <Select value={formData.source} onValueChange={(value) => handleInputChange('source', value)}>
                          <SelectTrigger className={errors.source ? "border-destructive" : ""}>
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
                        {errors.source && (
                          <p className="text-sm text-destructive">{errors.source}</p>
                        )}
                      </div>

                      <div className="flex items-start space-x-3">
                        <input 
                          type="checkbox" 
                          className="mt-1 rounded border-pregrad-border"
                          checked={formData.termsAccepted}
                          onChange={(e) => handleInputChange('termsAccepted', e.target.checked)}
                        />
                        <div className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <button type="button" className="text-primary hover:underline">Terms of Service</button>
                          {" "}and{" "}
                          <button type="button" className="text-primary hover:underline">Privacy Policy</button>
                        </div>
                      </div>
                      {errors.termsAccepted && (
                        <p className="text-sm text-destructive">{errors.termsAccepted}</p>
                      )}

                      <div className="flex items-start space-x-3">
                        <input 
                          type="checkbox" 
                          className="mt-1 rounded border-pregrad-border"
                          checked={formData.marketingOptIn}
                          onChange={(e) => handleInputChange('marketingOptIn', e.target.checked)}
                        />
                        <div className="text-sm text-muted-foreground">
                          I would like to receive updates about courses and career opportunities
                        </div>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        disabled={loading}
                      >
                        {loading ? "Creating Account..." : "Create Account"}
                      </Button>
                    </form>

                    <div className="mt-6">
                      <Separator className="my-4" />
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">
                          Already have an account?{" "}
                          <Link 
                            to="/login"
                            className="text-primary hover:underline"
                          >
                            Sign in
                          </Link>
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