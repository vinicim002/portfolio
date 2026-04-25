import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
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
    <section id='projects' className='overflow-hidden'>
      <div className='projectsContainer mx-4 md:mx-12 2xl:mx-56 px-6 lg:px-8 py-32'>
        <div className='projectsContent'>
          {/* HEADER DA SEÇÃO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='projectsNav flex flex-col md:flex-row items-center justify-between gap-8 pb-24'
          >
            <div className='projectsTitleDescription flex flex-col gap-4 text-center md:text-left'>
              <h2 className='text-6xl lg:text-7xl font-bold tracking-tight'>
                Proje<span className='text-primary'>tos</span>
              </h2>
              <p className='text-text-dim text-lg max-w-xl'>
                Projetos selecionados que demonstram conhecimento técnico e
                habilidades de resolução de problemas reais.
              </p>
            </div>
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className='
    glass inline-flex items-center justify-center px-8 py-3 rounded-full 
    text-[10px] font-bold uppercase tracking-widest text-white cursor-pointer
    relative overflow-hidden transition-all duration-300
    hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
    before:content-[""] before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent 
    before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
  '
            >
              Ver todos no GitHub
            </motion.button>
          </motion.div>

          {/* LISTA DE PROJETOS */}
          <div className='projectsCardsContainer flex flex-col gap-32'>
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`projectsCard group flex flex-col xl:flex-row items-center gap-12 ${
                  index % 2 !== 0 ? 'xl:flex-row-reverse' : ''
                }`}
              >
                {/* MOLDURA DA IMAGEM */}
                <div className='w-full xl:w-3/5 relative overflow-hidden rounded-[40px] glass p-2 group-hover:border-primary/30 transition-colors duration-500'>
                  <div className='projectCardImg rounded-[32px] overflow-hidden aspect-video relative'>
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className='w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-in-out'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500'></div>
                  </div>
                </div>

                {/* INFO DO PROJETO */}
                <div className='projectCardInfo flex flex-col gap-6 flex-1 text-center xl:text-left'>
                  <div className='projectCardTechContent flex flex-wrap justify-center xl:justify-start gap-3'>
                    {project.skills.map(skill => (
                      <span
                        key={skill.id}
                        className='px-4 py-1.5 rounded-full bg-primary/5 border border-primary/20 text-[10px] font-extrabold text-primary uppercase tracking-tighter'
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>

                  <h3 className='text-5xl lg:text-6xl font-bold text-white tracking-tight'>
                    {project.title}
                  </h3>

                  <p className='text-text-dim text-lg leading-relaxed'>
                    {project.description}
                  </p>

                  <div className='projectCardBtns flex flex-row items-center justify-center xl:justify-start gap-4 mt-4'>
                    {/* BOTÃO DE DEPLOY (Estilo do "Ver Projetos" da Hero) */}
                    <motion.a
                      href={project.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='
      bg-[#f8fafc] text-bg inline-flex gap-2 py-3.5 px-8 rounded-full font-bold cursor-pointer 
      relative overflow-hidden transition-all duration-500 ease-out text-[10px] uppercase tracking-widest
      hover:bg-primary hover:text-white
      hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
      border border-transparent hover:border-white/20
    '
                    >
                      Deploy
                    </motion.a>

                    {/* BOTÃO DO GITHUB (Estilo do "Entrar em Contato" da Hero) */}
                    <motion.a
                      href={project.githubUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className='
      glass inline-flex gap-2 py-3.5 px-8 rounded-full text-[#f8fafc] font-bold cursor-pointer text-[10px] uppercase tracking-widest
      relative overflow-hidden transition-all duration-300
      hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
      before:content-[""] before:absolute before:inset-0 
      before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent 
      before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
    '
                    >
                      Github
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
