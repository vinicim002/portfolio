import type { Message } from "../models/MessageModel";
import httpClient from "./httpClient";

export async function sendMessage(message: Message): Promise<Message> {
  const response = await httpClient.post<Message>('/messages', message);
  return response.data;
}