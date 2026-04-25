import { motion } from 'framer-motion';
import perfilImg from '../../assets/perfil.jpeg';
import { StatsCard } from '../StatsCard';

export function AboutMe() {
  const fadeIn = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section id='about' className='overflow-hidden'>
      {/* Ajuste de Margem: mx-4 para mobile, mx-12 para tablets e mx-56 apenas em telas 2xl (1536px+) */}
      <div className='aboutMeContainer px-6 py-32 flex flex-col xl:flex-row items-center xl:items-start gap-16 xl:gap-24 mx-4 md:mx-12 2xl:mx-56'>
        {/* LADO ESQUERDO: IMAGEM - Quebra para centralizar abaixo de 1280px (xl) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='relative group w-full xl:w-[500px] max-w-[500px] aspect-square rounded-3xl overflow-hidden glass p-4 shrink-0'
        >
          <div className='absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none' />
          <img
            src={perfilImg}
            alt='Vinicius Perfil'
            className='w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out'
          />
        </motion.div>

        {/* LADO DIREITO: TEXTO E DASHBOARD */}
        <div className='flex flex-col flex-1 w-full'>
          <motion.div
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={fadeIn}
            className='aboutMeContent flex flex-col items-center xl:items-start gap-6 mb-12 text-center xl:text-left'
          >
            <h2 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight'>
              Sobre <span className='text-primary'>mim</span>
            </h2>
            <p className='text-text-dim text-lg lg:text-xl leading-relaxed text-justify xl:text-left'>
              Sou um desenvolvedor apaixonado por resolver problemas complexos
              através de código limpo. Meu foco é construir arquiteturas
              robustas no{' '}
              <span className='text-white font-semibold'>Backend</span> que se
              conectam a interfaces
              <span className='text-white font-semibold'> Frontend</span>{' '}
              fluidas e responsivas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className='informationAboutMe w-full'
          >
            <div className='flex items-center justify-between gap-6 mb-6'>
              <StatsCard label='Projects' value='50+' />
              <StatsCard label='Commits' value='10k+' />
            </div>

            <div className='myMission glass-dark p-8 rounded-2xl border border-white/5 relative overflow-hidden group'>
              <div className='absolute top-0 left-0 w-1 h-full bg-primary opacity-50 group-hover:w-full group-hover:opacity-5 transition-all duration-500' />
              <p className='relative z-10 text-text-dim leading-relaxed italic text-base lg:text-lg'>
                "Minha missão é transformar ideias em produtos escaláveis,
                garantindo que cada linha de código contribua para uma
                experiência de usuário excepcional e um sistema de fácil
                manutenção."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
