import { motion, type Variants } from 'framer-motion';

export function Hero() {
  // Tipando explicitamente como Variants para o TS não reclamar do 'ease' ou 'stagger'
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // Agora o TS entende que isso é um Cubic Bezier
      },
    },
  };

  return (
    <section id='home'>
      <motion.div
        className='heroContainer min-h-screen pb-20 px-8 pt-20 flex flex-col items-center justify-center lg:mx-56'
        variants={containerVariants}
        initial='hidden'
        animate='visible'
      >
        <div className='heroContent flex flex-col items-center max-w-full text-center'>
          {/* BADGE ANIMADA */}
          <motion.div
            variants={itemVariants}
            className='hero-badge glass text-white px-4 py-1.5 rounded-full flex items-center justify-center gap-2 w-max mb-4'
          >
            <span className='relative flex h-2 w-2'>
              <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75'></span>
              <span className='relative inline-flex rounded-full h-2 w-2 bg-primary'></span>
            </span>
            <span className='text-[11px] uppercase tracking-wider font-medium'>
              Desenvolvedor Full Stack
            </span>
          </motion.div>

          {/* TÍTULO */}
          <motion.h1 variants={itemVariants} className='hero-name mb-4'>
            <span className='font-bold text-4xl md:text-7xl lg:text-8xl text-gradient py-4 inline-block leading-tight'>
              Construindo sistemas <br /> que sejam escaláveis e elegantes
            </span>
          </motion.h1>

          {/* DESCRIÇÃO */}
          <motion.p
            variants={itemVariants}
            className='mb-10 font-normal text-text-dim text-center max-w-2xl'
          >
            Desenvolvedor Full Stack apaixonado por criar experiências digitais
            elegantes com <span className='text-white'>Java</span>,{' '}
            <span className='text-white'>Spring Boot</span> e{' '}
            <span className='text-white'>React</span>.
          </motion.p>

          {/* BOTÕES */}
          <motion.div
            variants={itemVariants}
            className='hero-btns flex flex-row items-center gap-3.5'
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className='
    bg-[#f8fafc] text-bg inline-flex gap-2 py-3.5 px-8 rounded-full font-bold cursor-pointer 
    relative overflow-hidden transition-all duration-500 ease-out
    hover:bg-primary hover:text-white
    hover:shadow-[0_0_25px_rgba(139,92,246,0.5)]
    border border-transparent hover:border-white/20
  '
            >
              Ver projetos
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
              }}
              whileTap={{ scale: 0.95 }}
              className='
    glass inline-flex gap-2 py-3 px-7 rounded-full text-[#f8fafc] font-semibold cursor-pointer
    relative overflow-hidden transition-all duration-300
    hover:border-primary/50 hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]
    before:content-[""] before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-transparent before:via-primary/10 before:to-transparent 
    before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
  '
            >
              Entrar em contato
            </motion.button>
          </motion.div>

          {/* SCROLL INDICATOR */}
          <motion.div
            variants={itemVariants}
            className='hero-scroll-hint mt-20 flex flex-col items-center gap-2'
          >
            <div className='w-6 h-10 border-2 border-white/10 rounded-full flex justify-center p-1.5'>
              <motion.div
                animate={{
                  y: [0, 15, 0],
                  opacity: [1, 0, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className='w-1 h-2 bg-primary rounded-full'
              />
            </div>
            <span className='text-[10px] uppercase tracking-[0.3em] text-text-dim'>
              Scroll
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
