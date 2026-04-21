import { useEffect, useState } from 'react';
import type { Project } from '../../models/ProjectModel';
import { fetchProject } from '../../services/projectService';

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const fetchedProjects = await fetchProject();
        setProjects(fetchedProjects);
      } catch (error) {
        console.error('Erro ao carregar projetos:', error);
      }
    };

    loadProjects();
  }, []);

  return (
    <>
      <div className='projectsContainer mx-56 px-8 py-20'>
        <div className='projectsContent'>
          <div className='projectsNav flex flex-row items-center justify-between pb-20'>
            <div className='projectsTitleDescription flex flex-col gap-4'>
              <h2 className='text-7xl font-bold'>Projects</h2>
              <p className='text-text-dim'>
                Projetos selecionados que demonstram conhecimento técnico e{' '}
                <br /> habilidades de resolução de problemas..
              </p>
            </div>
            <button className='glass border-border-glass p-4 rounded-full text-xs font-semibold'>
              VER TODOS
            </button>
          </div>

          <div className='projectsCardsContainer flex flex-col gap-12'>
            {projects.map(project => (
              <div
                key={project.id}
                className={`projectsCard group flex flex-row items-center gap-8 ${
                  project.id && project.id % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
              >
                <div className='w-full md:w-3/5 relative overflow-hidden rounded-[32px] glass p-1'>
                  <div className='projectCardImg rounded-[28px] overflow-hidden aspect-video relative'>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className='w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity'></div>
                  </div>
                </div>
                <div className='projectCardInfo flex flex-col gap-4'>
                  <div className='projectCardTechContent flex flex-row items-center gap-4'>
                    {project.skills.map(skill => (
                      <div
                        key={skill.id}
                        className='projectCardTech tech-pill px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[0.7rem] font-bold text-primary uppercase tracking-wider'
                      >
                        {skill.name}
                      </div>
                    ))}
                  </div>
                  <h3 className='text-5xl text-gradient font-bold'>
                    {project.title}
                  </h3>
                  <p className='text-text-dim text-base'>
                    {project.description}
                  </p>

                  <div className='projectCardBtns flex flex-row items-center gap-6'>
                    <button className='bg-[#f8fafc] rounded-xl py-2 px-6 text-bg cursor-pointer'>
                      <a
                        href={project.liveUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Deploy
                      </a>
                    </button>
                    <button className='glass rounded-xl py-2 px-6 cursor-pointer'>
                      <a
                        href={project.githubUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Github
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
