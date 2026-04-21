import { Server } from 'lucide-react';
import type { Skill } from '../../models/SkillModel';

type TechnologiesCardProps = {
  skill: Skill;
}

export function TechnologiesCard({skill}: TechnologiesCardProps) {
  return (
    <>
      <div className='glass p-8 rounded-xl flex flex-col items-center gap-6 min-h-[200px] min-w-[300px]'>
        <h3 className='uppercase text-text-dim text-xs'>{skill.category}</h3>
        <Server className='w-10 h-10' />
        <div className='px-3 py-1 bg-primary/10 border border-primary/20 rounded-md text-xs text-primary font-bold'>
          {skill.name}
        </div>
      </div>
    </>
  );
}
