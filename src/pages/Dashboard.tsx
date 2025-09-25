import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Star, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut();
    navigate('/login');
  };

  const courses = [
    {
      id: 1,
      title: "Data Science & Analytics",
      description: "Master data analysis, machine learning, and statistical modeling with hands-on projects",
      duration: "12 weeks",
      students: 150,
      rating: 4.8,
      image: "/src/assets/student-1.jpg",
      level: "Beginner",
      price: "$299"
    },
    {
      id: 2,
      title: "Software Engineering",
      description: "Learn full-stack development with modern frameworks and best practices",
      duration: "16 weeks",
      students: 200,
      rating: 4.9,
      image: "/src/assets/student-2.jpg",
      level: "Intermediate",
      price: "$399"
    },
    {
      id: 3,
      title: "Product Management",
      description: "Build product strategy, roadmaps, and lead cross-functional teams",
      duration: "10 weeks",
      students: 120,
      rating: 4.7,
      image: "/src/assets/student-3.jpg",
      level: "Advanced",
      price: "$349"
    },
    {
      id: 4,
      title: "UI/UX Design",
      description: "Create user-centered designs and master design thinking principles",
      duration: "14 weeks",
      students: 180,
      rating: 4.8,
      image: "/src/assets/student-1.jpg",
      level: "Beginner",
      price: "$279"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img 
                src="/src/assets/pregrad-logo.png" 
                alt="Pregrad" 
                className="h-8 w-auto"
              />
              <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">
                Welcome, {user?.email}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Available Courses</h2>
          <p className="text-muted-foreground">Choose from our expertly crafted courses to advance your career</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                <BookOpen className="w-12 h-12 text-primary" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{course.level}</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm text-muted-foreground">{course.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">{course.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{course.price}</span>
                  <Button size="sm">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-gradient-card border-pregrad-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Need Help Choosing?</h3>
            <p className="text-muted-foreground mb-6">
              Schedule a free consultation with our career advisors to find the perfect course for your goals.
            </p>
            <Button size="lg">
              Schedule Consultation
            </Button>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;