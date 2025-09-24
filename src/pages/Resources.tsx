import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, Video, FileText, Download, ExternalLink } from "lucide-react";

const Resources = () => {
  const resourceCategories = [
    {
      title: "Tutorials & Guides",
      icon: BookOpen,
      resources: [
        { title: "Getting Started with Python", type: "Article", duration: "10 min read" },
        { title: "Data Science Fundamentals", type: "Guide", duration: "15 min read" },
        { title: "Machine Learning Basics", type: "Article", duration: "12 min read" },
        { title: "Web Development Roadmap", type: "Guide", duration: "20 min read" }
      ]
    },
    {
      title: "Video Content",
      icon: Video,
      resources: [
        { title: "AI/ML Workshop Recording", type: "Video", duration: "45 min" },
        { title: "Career Guidance Session", type: "Webinar", duration: "30 min" },
        { title: "Industry Expert Interview", type: "Video", duration: "25 min" },
        { title: "Project Showcase", type: "Video", duration: "20 min" }
      ]
    },
    {
      title: "Downloadable Content",
      icon: Download,
      resources: [
        { title: "Resume Templates", type: "Template", duration: "PDF" },
        { title: "Interview Preparation Kit", type: "Guide", duration: "PDF" },
        { title: "Coding Cheat Sheets", type: "Reference", duration: "PDF" },
        { title: "Project Ideas Collection", type: "List", duration: "PDF" }
      ]
    }
  ];

  const blogs = [
    {
      title: "10 Essential Skills for Data Scientists in 2024",
      excerpt: "Discover the most in-demand skills that every aspiring data scientist should master to succeed in the competitive job market.",
      category: "Data Science",
      readTime: "8 min read",
      date: "March 15, 2024"
    },
    {
      title: "Complete Guide to Full Stack Development",
      excerpt: "A comprehensive roadmap covering frontend, backend, and database technologies for aspiring full stack developers.",
      category: "Development", 
      readTime: "12 min read",
      date: "March 10, 2024"
    },
    {
      title: "Breaking into Tech: A Beginner's Guide",
      excerpt: "Everything you need to know about starting your career in technology, from choosing a path to landing your first job.",
      category: "Career",
      readTime: "6 min read", 
      date: "March 5, 2024"
    }
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
                Free Learning Resources
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Access our comprehensive library of tutorials, guides, templates, and industry insights to accelerate your learning journey.
              </p>
            </div>
          </div>
        </section>

        {/* Resource Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              {resourceCategories.map((category, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-pregrad-border">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-lg bg-primary/10">
                        <category.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {category.title}
                      </h3>
                    </div>

                    <div className="space-y-3">
                      {category.resources.map((resource, resourceIndex) => (
                        <div key={resourceIndex} className="flex items-center justify-between p-3 rounded-lg bg-pregrad-surface hover:bg-pregrad-border transition-colors cursor-pointer">
                          <div className="space-y-1">
                            <p className="text-sm font-medium text-foreground">{resource.title}</p>
                            <div className="flex items-center space-x-2">
                              <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                              <span className="text-xs text-muted-foreground">{resource.duration}</span>
                            </div>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="py-16 bg-pregrad-surface">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Latest Blog Posts
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Stay updated with the latest trends, insights, and tips from industry experts.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-pregrad-border hover:shadow-card transition-all duration-300 cursor-pointer">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{blog.category}</Badge>
                      <span className="text-xs text-muted-foreground">{blog.date}</span>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground line-clamp-2">
                      {blog.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3">
                      {blog.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-2 border-t border-pregrad-border">
                      <span className="text-xs text-muted-foreground">{blog.readTime}</span>
                      <Button variant="ghost" size="sm">
                        Read More
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                View All Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto p-8 text-center bg-gradient-card border-pregrad-border">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Stay Updated
              </h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter to get the latest resources and industry insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-background border border-pregrad-border text-foreground"
                />
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Subscribe
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;