export function Projects() {
  return (
    <>
      <div className='projectsContainer mx-56 px-8 py-20'>
        <div className='projectsContent'>
          <div className='projectsNav flex flex-row items-center justify-between pb-20'>
            <div className='projectsTilteDescription flex flex-col gap-4'>
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
            <div className='projectsCard group flex flex-row items-center gap-8'>
              <div className='w-full md:w-3/5 relative overflow-hidden rounded-[32px] glass p-1'>
                <div className='projectCardImg rounded-[28px] overflow-hidden aspect-video relative'>
                  <img
                    src='../src/assets/perfil.jpeg'
                    alt=''
                    className='w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity'></div>
                </div>
              </div>
              <div className='projectCardInfo flex flex-col gap-4'>
                <div className='projectCardTechContent flex flex-row items-center gap-4'>
                  <div className='projectCardTech tech-pill px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[0.7rem] font-bold text-primary uppercase tracking-wider'>
                    React
                  </div>
                  <div className='projectCardTech tech-pill px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[0.7rem] font-bold text-primary uppercase tracking-wider'>
                    React
                  </div>
                  <div className='projectCardTech tech-pill px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[0.7rem] font-bold text-primary uppercase tracking-wider'>
                    React
                  </div>
                </div>
                <h3 className='text-5xl text-gradient font-bold'>
                  Project Title
                </h3>
                <p className='text-text-dim text-base'>
                  A brief description of the project, highlighting its features,
                  technologies used, and the problem it solves.
                </p>

                <div className='projectCardBtns flex flex-row items-center gap-6'>
                  <button className='bg-[#f8fafc] rounded-xl py-2 px-6 text-bg cursor-pointer'>
                    Deploy
                  </button>
                  <button className='glass rounded-xl py-2 px-6 cursor-pointer'>
                    Github
                  </button>
                </div>
              </div>
            </div>

            <div className='projectsCard group flex flex-row items-center gap-8'>
              <div className='projectCardInfo flex flex-col gap-4'>
                <div className='projectCardTechContent flex flex-row items-center gap-4'>
                  <div className='projectCardTech tech-pill px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[0.7rem] font-bold text-primary uppercase tracking-wider'>
                    React
                  </div>
                  <div className='projectCardTech tech-pill px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[0.7rem] font-bold text-primary uppercase tracking-wider'>
                    React
                  </div>
                  <div className='projectCardTech tech-pill px-3 py-1 rounded-md bg-primary/10 border border-primary/20 text-[0.7rem] font-bold text-primary uppercase tracking-wider'>
                    React
                  </div>
                </div>
                <h3 className='text-5xl text-gradient font-bold'>
                  Project Title
                </h3>
                <p className='text-text-dim text-base'>
                  A brief description of the project, highlighting its features,
                  technologies used, and the problem it solves.
                </p>

                <div className='projectCardBtns flex flex-row items-center gap-6'>
                  <button className='bg-[#f8fafc] rounded-xl py-2 px-6 text-bg cursor-pointer'>
                    Deploy
                  </button>
                  <button className='glass rounded-xl py-2 px-6 cursor-pointer'>
                    Github
                  </button>
                </div>
              </div>

              <div className='w-full md:w-3/5 relative overflow-hidden rounded-[32px] glass p-1'>
                <div className='projectCardImg rounded-[28px] overflow-hidden aspect-video relative'>
                  <img
                    src='../src/assets/perfil.jpeg'
                    alt=''
                    className='w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity'></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
