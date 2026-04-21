import type { Skill } from './SkillModel';

export interface Project {
  id?: number;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  category: string;
  skills: Skill[];
}
