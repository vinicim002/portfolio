import { motion, type Variants } from 'framer-motion';
import type { Skill } from '../../models/SkillModel';

type TechnologiesCardProps = {
  skill: Skill;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function TechnologiesCard({ skill }: TechnologiesCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className='glass p-8 rounded-2xl flex flex-col items-center justify-between gap-6 min-h-[220px] transition-all duration-300 card-glow border border-white/5'
    >
      <h3 className='uppercase text-text-dim text-[10px] tracking-[0.2em] font-bold'>
        {skill.category}
      </h3>

      <div
        className='w-16 h-16 flex items-center justify-center text-primary fill-current transition-transform duration-500 group-hover:scale-110'
        dangerouslySetInnerHTML={{ __html: skill.imgUrl }}
      />

      <div className='px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-[11px] text-primary font-extrabold uppercase tracking-wider'>
        {skill.name}
      </div>
    </motion.div>
  );
}
