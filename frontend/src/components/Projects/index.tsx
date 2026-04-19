export function Projects() {
  return (
    <>
      <div className='projectsContainer m-auto px-6'>
        <div className='projectsContent'>
          <div className='projectsNav'>
            <div className='projectsTilteDescription'>
              <h2>Projects</h2>
              <p>
                A collection of my work, showcasing my skills and expertise in
                various technologies and domains.
              </p>
            </div>
            <button>VER TODOS</button>
          </div>

          <div className='projectsCardsContainer'>
            <div className='projectsCard'>
              <div className='projectCardImg'>
                <img src='' alt='' />
              </div>
              <div className='projectCardInfo'>
                <div className='projectCardTechContent'>
                  <div className='projectCardTech'>React</div>
                  <div className='projectCardTech'>React</div>
                  <div className='projectCardTech'>React</div>
                </div>
                <h3>Project Title</h3>
                <p>
                  A brief description of the project, highlighting its features,
                  technologies used, and the problem it solves.
                </p>

                <div className='projectCardBtns'>
                  <button>Deploy</button>
                  <button>Github</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
