export function Navbar() {
  return (
    <>
      <nav className='navbarContainer fixed top-4 left-56 right-56 z-50 flex flex-row items-center justify-between px-8 py-3 glass text-white h-16 rounded-3xl border-border-glass'>
        <div className='logoNavbar font-extrabold uppercase text-2xl'>
          &lt;Vinicius_portfólio&gt;
        </div>
        <div className='menuContainer flex flex-row items-center justify-between gap-5'>
          <ul className='menuContent flex flex-row items-center justify-between gap-5'>
            <li className='text-text-dim uppercase text-xs'>
              <a href='#'>Sobre</a>
            </li>
            <li className='text-text-dim uppercase text-xs'>
              <a href='#'>Skills</a>
            </li>
            <li className='text-text-dim uppercase text-xs'>
              <a href='#'>Projetos</a>
            </li>
            <li className='text-text-dim uppercase text-xs'>
              <a href='#'>Contato</a>
            </li>
          </ul>

          <button className='text-[#f8fafc] uppercase text-xs glass border-border-glass px-4 py-1.5 rounded-full flex items-center justify-center gap-2 w-max font-semibold cursor-pointer'>
            <span className='badge-dot bg-green-500'></span>
            Disponível para jobs
          </button>
        </div>
      </nav>
    </>
  );
}
