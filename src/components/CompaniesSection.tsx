import { Card } from "@/components/ui/card";

const CompaniesSection = () => {
  const companies = [
    { name: "GoodWorker", logo: "🏢" },
    { name: "Darwin Box", logo: "📦" },
    { name: "GetWork", logo: "💼" },
    { name: "TechCorp", logo: "⚡" },
    { name: "DataFlow", logo: "📊" },
    { name: "CloudTech", logo: "☁️" },
    { name: "DevSpace", logo: "🚀" },
    { name: "InnovateLab", logo: "🔬" },
    { name: "FutureTech", logo: "🌟" },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Companies you can join (300+)
          </h2>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {companies.map((company, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-pregrad-border hover:shadow-card transition-all duration-300 hover:scale-105 group cursor-pointer"
            >
              <div className="flex flex-col items-center space-y-3">
                <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <h3 className="text-sm font-medium text-center text-foreground">
                  {company.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">24k+</div>
            <div className="text-muted-foreground">Mentees</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">400+</div>
            <div className="text-muted-foreground">Mentors</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">300+</div>
            <div className="text-muted-foreground">Recruiters</div>
          </div>
        </div>

        {/* Ratings */}
        <div className="flex justify-center items-center space-x-8 mt-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center text-white font-bold">T</div>
            <span className="text-sm text-muted-foreground">Trustpilot</span>
            <span className="text-sm font-semibold">Rated 4.4</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center text-white font-bold">G</div>
            <span className="text-sm text-muted-foreground">Google</span>
            <span className="text-sm font-semibold">Rated 4.2</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;