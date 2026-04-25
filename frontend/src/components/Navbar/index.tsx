import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Sobre', href: '#about' },
    { name: 'Skills', href: '#technologies' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <nav className='fixed top-4 left-4 right-4 2xl:left-56 2xl:right-56 z-50'>
      {/* Container principal da Nav - Mudamos 'lg' para 'xl' para quebrar próximo de 1280-1300px */}
      <div className='flex items-center justify-between px-6 lg:px-8 py-3 glass rounded-3xl h-16 border border-white/10'>
        <div className='logoNavbar text-xl lg:text-2xl'>
          <a href='#home'>&lt;Vinicius_portfólio&gt;</a>
        </div>

        {/* Menu Desktop - Agora aparece apenas em xl (1280px+) */}
        <div className='hidden xl:flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            {menuItems.map(item => (
              <li key={item.name} className='relative group'>
                <a
                  href={item.href}
                  className='text-text-dim uppercase text-[11px] tracking-widest transition-colors group-hover:text-white'
                >
                  {item.name}
                </a>
                <span className='absolute -inset-x-3 -inset-y-1.5 bg-primary opacity-0 group-hover:opacity-15 rounded-lg transition-all duration-300 -z-10' />
              </li>
            ))}
          </ul>

          <button className='group text-[#f8fafc] uppercase text-[10px] glass border-white/10 px-4 py-2 rounded-full flex items-center gap-2 font-bold transition-all hover:border-primary/50 cursor-pointer'>
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
            </span>
            Disponível para jobs
          </button>
        </div>

        {/* Mobile Toggle - Agora visível até 1280px (xl) */}
        <button
          className='xl:hidden z-50 p-2 text-white cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Overlay - Fundo Escuro para Leitura Perfeita */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className='absolute top-20 left-0 right-0 bg-[#080808] border border-white/10 rounded-3xl p-8 flex flex-col items-center gap-6 xl:hidden shadow-2xl'
          >
            {menuItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className='uppercase text-sm tracking-widest font-bold text-text-dim hover:text-primary transition-colors'
              >
                {item.name}
              </a>
            ))}

            <hr className='w-full border-white/5' />

            <button className='w-full text-white uppercase text-xs glass border-white/10 py-4 rounded-2xl flex items-center justify-center gap-3 font-bold hover:border-primary/50 transition-all'>
              <span className='relative flex h-2 w-2'>
                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75'></span>
                <span className='relative inline-flex rounded-full h-2 w-2 bg-green-500'></span>
              </span>
              Disponível para jobs
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
