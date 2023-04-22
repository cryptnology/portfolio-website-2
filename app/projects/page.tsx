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
  return (
    <>
      <TransitionEffect />
      <Container className="my-36">
        <main className="flex w-full flex-col items-center justify-center">
          <AnimatedText
            className="mb-8 !text-4xl sm:mb-16 sm:!text-6xl lg:!text-7xl"
            text={projectsPage.heading}
          />
          <div className="w-full grid grid-col-12 gap-24 gap-y-24 md:gap-y-32 gap-x-0 lg:gap-x-8 xl:gap-x-16">
            {projectsPage.projects.map((project, i) => (
              <div
                key={i}
                className={`col-span-12 ${
                  !project?.summary &&
                  !isOdd(projectsPage.projects.length) &&
                  'xl:w-[650px] xl:mx-auto'
                } ${
                  !project?.summary &&
                  isOdd(projectsPage.projects.length) &&
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
                  />
                ) : (
                  <Project
                    title={project.title}
                    link={project.link}
                    type={project.type}
                    img={project.img}
                    github={project.github}
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
