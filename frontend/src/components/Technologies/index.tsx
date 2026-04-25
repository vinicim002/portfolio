import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TechnologiesCard } from '../TechnologiesCard';
import { fetchSkills } from '../../services/skillService';
import type { Skill } from '../../models/SkillModel';

export function Technologies() {
  const [skills, setSkills] = useState<Skill[]>([]);

  useEffect(() => {
    const loadSkills = async () => {
      try {
        const fetchedSkills = await fetchSkills();
        setSkills(fetchedSkills);
      } catch (error) {
        console.error('Erro ao carregar skills:', error);
      }
    };
    loadSkills();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Faz os cards aparecerem um por um
      },
    },
  };

  return (
    <section id='technologies' className='overflow-hidden'>
      {/* Respeitando a mesma quebra de layout do Sobre Mim */}
      <div className='technologiesContainer mx-4 md:mx-12 2xl:mx-56 py-32 px-6'>
        <div className='technologiesContent flex flex-col items-center max-w-full'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='text-center mb-16'
          >
            <h2 className='text-6xl lg:text-7xl font-bold pb-6 tracking-tight'>
              Tecnolo<span className='text-primary'>gias</span>
            </h2>
            <p className='text-lg text-text-dim max-w-2xl mx-auto leading-relaxed'>
              Um arsenal tecnológico focado em performance, escalabilidade{' '}
              <br className='hidden md:block' />e as melhores práticas do
              mercado de desenvolvimento.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            // Grid responsivo: 1 col no mobile, 2 no tablet, 4 no desktop padrão e 5 em 2xl
            className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-6 w-full'
          >
            {skills.map(skill => (
              <TechnologiesCard key={skill.id} skill={skill} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
