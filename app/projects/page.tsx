import {
  AnimatedText,
  Container,
  TransitionEffect,
  FeaturedProject,
  Project,
} from '@/components';
import { projectsPage } from '@/constants';
import { isOdd } from '@/utils';

export const metadata = projectsPage.metadata;

const Projects = () => {
  const projects =
    projectsPage.webTwoProjects.filter(
      (project) => project.type === 'Project',
    ) ||
    projectsPage.webThreeProjects.filter(
      (project) => project.type === 'Project',
    );

  return (
    <>
      <TransitionEffect />
      <Container className="my-36">
        <main className="flex w-full flex-col items-center justify-center">
          <AnimatedText
            className="mb-8 !text-4xl sm:mb-16 sm:!text-6xl lg:!text-7xl"
            text={projectsPage.heading}
          />
          <h2 className="mb-6 lg:mb-8 text-2xl lg:text-3xl font-bold uppercase text-dark dark:text-light">
            {projectsPage.webThreeHeading}
          </h2>
          <div className="w-full mb-24 md:mb-32 grid grid-cols-12 gap-24 gap-y-24 md:gap-y-32 gap-x-0 lg:gap-x-8 xl:gap-x-16">
            {projectsPage.webThreeProjects.map((project, i) => (
              <div
                key={i}
                className={`col-span-12 ${
                  !project?.summary &&
                  isOdd(projects.length) &&
                  'xl:w-[650px] xl:mx-auto'
                } ${
                  !project?.summary &&
                  !isOdd(projects.length) &&
                  'lg:col-span-6'
                }`}
              >
                {project?.summary ? (
                  <FeaturedProject
                    title={project.title}
                    summary={project.summary}
                    link={project.link}
                    type={project.type}
                    img={project.img}
                    github={project.github}
                    demo={project.demo}
                  />
                ) : (
                  <Project
                    title={project.title}
                    link={project.link}
                    type={project.type}
                    img={project.img}
                    github={project.github}
                    demo={project.demo}
                  />
                )}
              </div>
            ))}
          </div>
          <h2 className="mb-6 lg:mb-8 text-2xl lg:text-3xl font-bold uppercase text-dark dark:text-light">
            {projectsPage.webTwoHeading}
          </h2>
          <div className="w-full grid grid-cols-12 gap-24 gap-y-24 md:gap-y-32 gap-x-0 lg:gap-x-8 xl:gap-x-16">
            {projectsPage.webTwoProjects.map((project, i) => (
              <div
                key={i}
                className={`col-span-12 ${
                  !project?.summary &&
                  isOdd(projects.length) &&
                  'xl:w-[650px] xl:mx-auto'
                } ${
                  !project?.summary &&
                  !isOdd(projects.length) &&
                  'lg:col-span-6'
                }`}
              >
                {project?.summary ? (
                  <FeaturedProject
                    title={project.title}
                    summary={project.summary}
                    link={project.link}
                    type={project.type}
                    img={project.img}
                    github={project.github}
                    demo={project.demo}
                  />
                ) : (
                  <Project
                    title={project.title}
                    link={project.link}
                    type={project.type}
                    img={project.img}
                    github={project.github}
                    demo={project.demo}
                  />
                )}
              </div>
            ))}
          </div>
        </main>
      </Container>
    </>
  );
};

export default Projects;
