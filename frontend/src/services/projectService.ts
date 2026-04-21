import type { Project } from "../models/ProjectModel";
import httpClient from "./httpClient";

export async function fetchProject(): Promise<Project[]> {
    const response = await httpClient.get<Project[]>('/projects');
    return response.data;
}