import { Card } from "@/components/ui/card";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Arpita Vishwakarma",
      college: "@CDGI",
      image: student1,
      testimonial: "The course is well-organized and follows a clear structure. I appreciate the consistent schedule which makes it easy to stay on track."
    },
    {
      name: "Akshat Srivastava", 
      college: "@MIT (WPU)",
      image: student2,
      testimonial: "I like that the program is well-organized with planned classes and clear expectations. The structure makes it easy to follow along and learn effectively. I appreciate the program's transparency. We know what to expect and what resources are available to us."
    },
    {
      name: "Deepak",
      college: "@NIT Hamirpur",
      image: student3,
      testimonial: "I like that the explanations provided are clear and easy to understand. I feel like the material is presented in a way that makes it accessible"
    },
    {
      name: "Harshvardhan",
      college: "@IIT Delhi", 
      image: student1,
      testimonial: "I've been impressed by the overall organization of the learning experience. The sessions flow well and build upon each other effectively."
    },
    {
      name: "Gupta Raj Gopalbhai",
      college: "@SPCE",
      image: student2,
      testimonial: "I am Gupta Raj Gopalbhai and got selected as social media manager at Tanza Talks. Learning at Pregrad is a very wholesome experience for me. We get a real hands-on experience of the course while learning. Thank you for this great experience"
    },
    {
      name: "Priyanka Laxmi",
      college: "@NIT Surat",
      image: student3,
      testimonial: "The mentors in the Pregrad program are fantastic! They're knowledgeable and approachable, making learning enjoyable"
    }
  ];

  return (
    <section className="py-16 bg-pregrad-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            HEAR IT FROM OUR LEARNERS
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to Start Your Journey? Read What Others Say
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-pregrad-border hover:shadow-card transition-all duration-300 hover:scale-105"
            >
              <div className="space-y-4">
                {/* Rating Stars */}
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed text-sm">
                  "{testimonial.testimonial}"
                </p>

                {/* User Info */}
                <div className="flex items-center space-x-3 pt-4 border-t border-pregrad-border">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.college}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center space-x-4 mb-16">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="sm">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Final CTA */}
        <div className="text-center space-y-6">
          <h3 className="text-2xl font-bold text-foreground">
            Don't Wait Until Graduation - Change the Game!
          </h3>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;