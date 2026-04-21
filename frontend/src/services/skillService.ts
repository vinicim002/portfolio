import type { Skill } from "../models/SkillModel";
import httpClient from "./httpClient";

export async function fetchSkills(): Promise<Skill[]> {
    const response = await httpClient.get<Skill[]>('/skills');
    return response.data;
}