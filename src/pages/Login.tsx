import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto">
              <Card className="p-8 bg-gradient-card border-pregrad-border">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-foreground mb-2">Welcome Back</h1>
                  <p className="text-muted-foreground">Sign in to your Pregrad account</p>
                </div>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Password</label>
                    <Input type="password" placeholder="••••••••" />
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input type="checkbox" className="rounded border-pregrad-border" />
                      <span className="text-muted-foreground">Remember me</span>
                    </label>
                    <button className="text-sm text-primary hover:underline">
                      Forgot password?
                    </button>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Sign In
                  </Button>
                </form>

                <div className="mt-6">
                  <Separator className="my-4" />
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      Don't have an account?{" "}
                      <button 
                        onClick={() => window.location.href = '/signup'}
                        className="text-primary hover:underline"
                      >
                        Sign up
                      </button>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;