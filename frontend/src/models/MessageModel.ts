export interface Message {
  id?: number;
  name: string;
  email: string;
  subject: string;
  body: string;
  sendAt?: string;
}