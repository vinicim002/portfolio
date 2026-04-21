import { useEffect, useState } from 'react';
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

  return (
    <>
      <div className='technologiesContainer mx-56 py-20 px-8'>
        <div className='technologiesContent flex flex-col items-center max-w-full'>
          <h2 className='text-7xl font-bold text-center pb-4'>Tecnologias</h2>
          <p className='text-base text-text-dim text-center'>
            Um conjunto de ferramentas completo para construir aplicações <br />
            modernas, robustas e escaláveis.
          </p>

          <div className='grid grid-cols-4 gap-8 mt-12'>
            {skills.map(skill => (
              <TechnologiesCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
