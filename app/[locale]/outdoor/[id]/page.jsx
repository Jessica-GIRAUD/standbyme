import SingleOutdoorProject from "@/components/SingleOutdoorProject";
import SingleProject from "@/components/SingleProject";
import { outdoorProjects } from "@/data/outdoorProjects";

export async function generateMetadata({ params }) {
  const dynamicParams = await params;
  const project = outdoorProjects.find((p) => p.id == dynamicParams?.id);
  const title = `${project?.client ?? "Project"} – ${
    project?.title ?? "Outdoor"
  } ${project?.date ?? ""}`;

  return {
    title: `${title} | Stand By Me`,
    description:
      "Stand By Me conçoit et installe des structures outdoor innovantes pour vos événements partout dans le monde. Découvrez nos projets container, airclad, tentes, etc.",
  };
}

export default function Page({ params }) {
  const project = outdoorProjects.find((p) => p.id == params.id);
  return <SingleProject project={project} backLink="/outdoor" />;
}
