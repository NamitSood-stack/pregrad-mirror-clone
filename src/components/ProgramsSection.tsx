import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ProgramsSection = () => {
  return (
    <section className="py-16 bg-pregrad-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Explore the Programs
          </h2>
          <h3 className="text-xl text-muted-foreground">
            Hands-on. Goal Oriented.
          </h3>
          <p className="text-lg text-foreground max-w-2xl mx-auto">
            Learn from experts, Build for Industry, Launch your career
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
          >
            Apply Now
          </Button>
        </div>

        {/* Why Pregrad Section */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Why Pregrad
            </h3>
            <p className="text-xl font-bold text-primary">
              Because, if you can start your career before graduation then, WHY NOT!
            </p>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Invest in your career with our top-of-the-line industry-aligned courses that provide 
              project-based learning, utilizing our time-tested, result-oriented pedagogy. Choose 
              nothing but the best in the industry for your career!
            </p>
          </div>

          {/* Video placeholder */}
          <Card className="max-w-2xl mx-auto bg-gradient-card border-pregrad-border overflow-hidden">
            <div className="aspect-video bg-pregrad-bg flex items-center justify-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                ▶ Watch Video
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;