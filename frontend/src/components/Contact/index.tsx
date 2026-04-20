import { Mail } from 'lucide-react';
import { useState } from 'react';
import type { Message } from '../../models/MessageModel';
import { sendMessage } from '../../services/messageService';

export function Contact() {
  const [formData, setFormData] = useState<Message>({
    name: '',
    email: '',
    subject: '',
    body: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('teste');
    try {
      await sendMessage(formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', body: '' });
    } catch {
      setError('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className='contactContainer mx-56 px-8 py-20 flex flex-row justify-between items-center gap-12'>
        <div className='contactContent flex flex-col gap-12'>
          <h2 className='text-7xl font-bold'>Contato</h2>
          <p className='text-text-dim text-base'>
            Interessado em escalar sua próxima ideia?
          </p>
          <div className='contactInfo flex flex-col gap-8'>
            <div className='flex items-center gap-4'>
              <div className='contactIcon glass p-4 border-border-glass rounded-xl'>
                <Mail />
              </div>
              <div className='contactInfoDescription flex flex-col gap-2'>
                <h3 className='text-text-dim font-semibold text-xs'>Email</h3>
                <p className='font-bold text-base'>teste@gmail.com</p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='contactIcon glass p-4 border-border-glass rounded-xl'>
                <Mail />
              </div>
              <div className='contactInfoDescription flex flex-col gap-2'>
                <h3 className='text-text-dim font-semibold text-xs'>
                  LinkedIn
                </h3>
                <p className='font-bold text-base'>
                  linkedin.com/in/devportfolio
                </p>
              </div>
            </div>

            <div className='flex items-center gap-4'>
              <div className='contactIcon glass p-4 border-border-glass rounded-xl'>
                <Mail />
              </div>
              <div className='contactInfoDescription flex flex-col gap-2'>
                <h3 className='text-text-dim font-semibold text-xs'>GitHub</h3>
                <p className='font-bold text-base'>github.com/devportfolio</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className='contactForm flex flex-col gap-8 glass p-8 rounded-xl border-border-glass'>
          <div
            className='contactFormInfoPesoal flex flex-row gap-8'
          >
            <label
              htmlFor='name'
              className='flex flex-col gap-2 text-text-dim text-xs'
            >
              Nome Completo
              <input
                type='text'
                name='name'
                value={formData.name}
                onChange={handleChange}
                id='name'
                placeholder='Seu nome'
                required
                className='p-2 glass border-border-glass rounded-xl text-base'
              />
            </label>

            <label
              htmlFor='email'
              className='flex flex-col gap-2 text-text-dim text-xs'
            >
              Email
              <input
                type='text'
                name='email'
                value={formData.email}
                onChange={handleChange}
                id='email'
                placeholder='seu@gmail.com'
                required
                className='p-2 glass border-border-glass rounded-xl text-base'
              />
            </label>
          </div>

          <label
            htmlFor='subject'
            className='flex flex-col gap-2 text-text-dim text-xs'
          >
            Assunto
            <input
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              id='subject'
              required
              placeholder='Assunto da mensagem'
              className='p-2 glass border-border-glass rounded-xl text-base'
            />
          </label>

          <label
            htmlFor='body'
            className='flex flex-col gap-2 text-text-dim text-xs'
          >
            Mensagem
            <textarea
              name='body'
              id='body'
              value={formData.body}
              onChange={handleChange}
              cols={30}
              rows={10}
              placeholder='Escreva sua mensagem aqui'
              required
              className='p-2 glass border-border-glass rounded-xl text-base'
            ></textarea>
          </label>

          {success && (
            <p className='text-green-400 text-sm'>
              Mensagem enviada com sucesso!
            </p>
          )}
          {error && <p className='text-red-400 text-sm'>{error}</p>}

          <button
            type='submit'
            disabled={loading}
            className='bg-[#f8fafc] text-bg p-4 rounded-xl font-bold cursor-pointer'
          >
            {loading ? 'Enviando...' : 'Enviar mensagem 🚀'}
          </button>
        </form>
      </div>
    </>
  );
}
