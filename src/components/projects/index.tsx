import { projectsApi } from "@/utils/api";
import { useEffect, useState } from "react";import ProjectCard from "@/components/projects/ProjectCard";
import AppLayout from "@/components/layout/AppLayout";
import { Project } from "@/types/schema";


export default function ProjectsPage() {

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
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
  }, []);


  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Active Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
