export function Technologies() {
  return (
    <>
      <div className='technologiesContainer m-auto px-6'>
        <div className='technologiesContent'>
          <h2>Core Technologies</h2>
          <p>
            A comprehensive toolbox for building modern, robust, and scalable
            applications.
          </p>

          <div className="boxTechnologiesContainer">
            <div className="boxTechnologies">
              <h3>React</h3>
              <p>
                A JavaScript library for building user interfaces, enabling
                developers to create reusable UI components and manage the
                application's state efficiently.
              </p>
            </div>

            <div className="boxTechnologies">
              <h3>TypeScript</h3>
              <p>
                A superset of JavaScript that adds static typing, enhancing code
                quality and maintainability by catching errors during development.
              </p>
            </div>

            <div className="boxTechnologies">
              <h3>Node.js</h3>
              <p>
                A runtime environment that allows developers to execute JavaScript
                on the server side, enabling the creation of scalable and
                efficient backend applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
