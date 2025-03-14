import { Card, CardContent } from "@/components/ui/card";
import { Project } from "@/types/schema";
import { projectsApi } from "@/utils/api";
import { useEffect, useState } from "react";
import { Activity, Wallet, Calendar, Users } from "lucide-react";

interface ProjectStatsProps {
  projects?: Project[];
}

export default function ProjectStats({ projects: initialProjects }: ProjectStatsProps) {
  const [projects, setProjects] = useState<Project[]>(initialProjects || []);
  const [loading, setLoading] = useState(!initialProjects);
  
  useEffect(() => {
    // If projects were passed as props, use them
    if (initialProjects) {
      setProjects(initialProjects);
      return;
    }
    
    // Otherwise fetch projects from API
    const fetchProjects = async () => {
      try {
        const projectsData = await projectsApi.getAll();
        
        if (projectsData && projectsData.results && Array.isArray(projectsData.results)) {
          setProjects(projectsData.results);
        } else if (Array.isArray(projectsData)) {
          setProjects(projectsData);
        } else {
          console.error("Unexpected API response format:", projectsData);
          setProjects([]);
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [initialProjects]);

  // Skip calculation if still loading
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="h-20 animate-pulse bg-gray-200 rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  // Calculate statistics
  const stats = {
    totalProjects: projects.length,
    activeProjects: projects.filter((p) => p.status === "active").length,
    totalBudget: projects.reduce((sum, p) => sum + (p.budget || 0), 0),
    projectsWithMilestones: projects.filter((p) => p.milestones && p.milestones.length > 0).length,
  };

  // Calculate progress metrics
  const completedMilestones = projects.reduce(
    (sum, project) => {
      if (!project.milestones) return sum;
      return sum + (project.milestones.filter((m) => m && m.completed).length || 0);
    },
    0,
  );

  const totalMilestones = projects.reduce(
    (sum, project) => sum + (project.milestones?.length || 0),
    0,
  );

  const statsCards = [
    {
      title: "Total Projects",
      value: stats.totalProjects,
      subtext: `${stats.activeProjects} active`,
      icon: Activity,
      color: "text-blue-600",
    },
    {
      title: "Total Budget",
      value: `$${stats.totalBudget.toLocaleString()}`,
      subtext: "across all projects",
      icon: Wallet,
      color: "text-green-600",
    },
    {
      title: "Milestone Progress",
      value:
        totalMilestones > 0
          ? `${Math.round((completedMilestones / totalMilestones) * 100)}%`
          : "0%",
      subtext: `${completedMilestones}/${totalMilestones} completed`,
      icon: Calendar,
      color: "text-purple-600",
    },
    {
      title: "Projects with Milestones",
      value: stats.projectsWithMilestones,
      subtext: stats.totalProjects > 0 
        ? `${Math.round((stats.projectsWithMilestones / stats.totalProjects) * 100)}% of total`
        : "0% of total",
      icon: Users,
      color: "text-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statsCards.map((stat, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">
                  {stat.title}
                </p>
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="text-sm text-gray-500">{stat.subtext}</p>
              </div>
              <div className={`${stat.color} bg-gray-50 p-3 rounded-full`}>
                <stat.icon className="w-6 h-6" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}