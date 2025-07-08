import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, BarChart3, FileText, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: FileText,
      title: "Posts Management",
      description: "Create, view, and manage posts with a clean interface",
    },
    {
      icon: BarChart3,
      title: "Real-time Data",
      description: "Fetch and display data from JSONPlaceholder API",
    },
    {
      icon: Users,
      title: "User Experience",
      description: "Responsive design with modern UI components",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimized React components with smooth animations",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="relative">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mx-auto">
              Senior React Developer Take-Home
            </Badge>

            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-black">
              Posts Dashboard
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A modern React application demonstrating microfrontend patterns,
              API integration, and professional component architecture.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button
                  size="lg"
                  className="btn-primary gap-2 px-8 cursor-pointer"
                >
                  View Dashboard
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="px-8 cursor-pointer"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Key Features</h2>
          <p className="text-lg text-muted-foreground">
            Built with modern React patterns and best practices
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, _) => (
            <Card key={feature.title} className="card-modern group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-white/50 backdrop-blur-sm border-y border-border/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Built With</h3>
            <p className="text-muted-foreground">
              Modern technologies for optimal performance and developer
              experience
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "React",
              "TypeScript",
              "Tailwind CSS",
              "Shadcn/ui",
              "React Router",
              "Vite",
            ].map((tech) => (
              <Badge key={tech} variant="outline" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
