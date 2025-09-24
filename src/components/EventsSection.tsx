import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";

const EventsSection = () => {
  const events = [
    {
      title: "Explore AI/ML: Deep Learning, EDA, NLP & More",
      date: "18 May 2025",
      image: "🤖",
      link: "#"
    },
    {
      title: "Data Science Tools Explained in 60 Minutes", 
      date: "25 Apr 2025",
      image: "📊",
      link: "#"
    },
    {
      title: "Getting Started with Backend Development: Database & Cloud Systems",
      date: "26 Apr 2025", 
      image: "☁️",
      link: "#"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Join Our Community and start learning at Zero cost
          </h2>
          <p className="text-xl text-primary font-semibold">
            Learn. Network. Kickstart
          </p>
        </div>

        <div className="mb-12">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm font-medium">
            UPCOMING EVENTS
          </Badge>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <Card 
                key={index}
                className="overflow-hidden bg-gradient-card border-pregrad-border hover:shadow-card transition-all duration-300 hover:scale-105 group"
              >
                <div className="aspect-video bg-pregrad-bg flex items-center justify-center">
                  <div className="text-6xl">{event.image}</div>
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  >
                    Register Now
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Testimonials placeholder */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-card border-pregrad-border overflow-hidden">
            <div className="aspect-video bg-pregrad-bg flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl">🎬</div>
                <p className="text-muted-foreground">Student Testimonials</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;