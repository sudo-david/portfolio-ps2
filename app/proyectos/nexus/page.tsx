import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/lib/data";

export default function Page() {
  const project = projects.find((p) => p.slug === "nexus")!;
  return <ProjectDetail project={project} />;
}
