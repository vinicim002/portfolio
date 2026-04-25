import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { sendMessage } from '../../services/messageService';
import { ContactInfo } from '../ContactInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const contactSchema = z.object({
  name: z.string().min(2, 'O nome deve conter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  subject: z.string().min(5, 'O assunto deve conter pelo menos 5 caracteres'),
  body: z.string().min(10, 'A mensagem deve conter pelo menos 10 caracteres'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function onSubmit(data: ContactFormData) {
    setLoading(true);
    setError('');
    try {
      await sendMessage(data);
      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setError('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id='contact' className='overflow-hidden'>
      {/* Ajuste de Gap e alinhamento para o formulário maior */}
      <div className='contactContainer mx-4 md:mx-12 2xl:mx-56 px-6 lg:px-8 py-32 flex flex-col xl:flex-row justify-between items-center xl:items-start gap-16 lg:gap-24'>
        {/* LADO ESQUERDO: INFOS */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className='contactContent flex flex-col gap-10 w-full xl:w-2/5'
        >
          <div className='flex flex-col gap-4 text-center xl:text-left'>
            <h2 className='text-6xl lg:text-7xl font-bold tracking-tight leading-tight'>
              Conta<span className='text-primary'>to</span>
            </h2>
            <p className='text-text-dim text-lg lg:text-xl leading-relaxed'>
              Interessado em escalar sua próxima ideia?{' '}
              <br className='hidden lg:block' />
              Vamos construir algo incrível juntos.
            </p>
          </div>

          <div className='contactInfo flex flex-col gap-8'>
            <div className='hover:translate-x-2 transition-transform duration-300'>
              <ContactInfo
                title={'Email'}
                description={'viniciusvilanova7@gmail.com'}
                icon={
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className='text-3xl text-primary'
                  />
                }
              />
            </div>
            <div className='hover:translate-x-2 transition-transform duration-300'>
              <ContactInfo
                title={'Github'}
                description={'github.com/vinicim002'}
                icon={
                  <FontAwesomeIcon
                    icon={faGithub}
                    className='text-3xl text-primary'
                  />
                }
              />
            </div>
            <div className='hover:translate-x-2 transition-transform duration-300'>
              <ContactInfo
                title={'Linkedin'}
                description={'linkedin.com/in/viniciusvila'}
                icon={
                  <FontAwesomeIcon
                    icon={faSquareLinkedin}
                    className='text-3xl text-primary'
                  />
                }
              />
            </div>
          </div>
        </motion.div>

        {/* LADO DIREITO: FORMULÁRIO AMPLIADO */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit(onSubmit)}
          /* Aumentado para 650px de largura e p-12 de respiro interno */
          className='contactForm flex flex-col gap-8 glass p-8 lg:p-12 rounded-[40px] border-border-glass w-full xl:w-[650px] shadow-2xl relative overflow-hidden'
        >
          {/* Efeito de brilho de fundo opcional para destacar o form */}
          <div className='absolute -top-24 -right-24 w-48 h-48 bg-primary/10 blur-[80px] pointer-events-none'></div>

          <div className='contactFormInfoPersonal flex flex-col md:flex-row gap-8'>
            <label
              htmlFor='name'
              className='flex flex-col gap-3 text-text-dim text-[11px] uppercase font-bold tracking-[0.15em] flex-1'
            >
              Nome Completo
              <input
                type='text'
                id='name'
                placeholder='Seu nome'
                className='p-4 glass border-border-glass rounded-2xl text-white focus:border-primary/50 outline-none transition-all focus:bg-white/[0.05]'
                {...register('name')}
              />
              {errors.name && (
                <span className='text-red-400 font-medium lowercase tracking-normal'>
                  {errors.name.message}
                </span>
              )}
            </label>

            <label
              htmlFor='email'
              className='flex flex-col gap-3 text-text-dim text-[11px] uppercase font-bold tracking-[0.15em] flex-1'
            >
              Email
              <input
                type='email'
                id='email'
                placeholder='seu@email.com'
                className='p-4 glass border-border-glass rounded-2xl text-white focus:border-primary/50 outline-none transition-all focus:bg-white/[0.05]'
                {...register('email')}
              />
              {errors.email && (
                <span className='text-red-400 font-medium lowercase tracking-normal'>
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>

          <label
            htmlFor='subject'
            className='flex flex-col gap-3 text-text-dim text-[11px] uppercase font-bold tracking-[0.15em]'
          >
            Assunto
            <input
              type='text'
              id='subject'
              placeholder='Qual o motivo do contato?'
              className='p-4 glass border-border-glass rounded-2xl text-white focus:border-primary/50 outline-none transition-all focus:bg-white/[0.05]'
              {...register('subject')}
            />
            {errors.subject && (
              <span className='text-red-400 font-medium lowercase tracking-normal'>
                {errors.subject.message}
              </span>
            )}
          </label>

          <label
            htmlFor='body'
            className='flex flex-col gap-3 text-text-dim text-[11px] uppercase font-bold tracking-[0.15em]'
          >
            Mensagem
            <textarea
              id='body'
              rows={6}
              placeholder='Descreva seu projeto ou ideia...'
              className='p-4 glass border-border-glass rounded-2xl text-white focus:border-primary/50 outline-none transition-all focus:bg-white/[0.05] resize-none'
              {...register('body')}
            ></textarea>
            {errors.body && (
              <span className='text-red-400 font-medium lowercase tracking-normal'>
                {errors.body.message}
              </span>
            )}
          </label>

          <div className='flex flex-col gap-6 mt-2'>
            {success && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className='text-green-400 text-sm font-semibold text-center'
              >
                🚀 Mensagem enviada com sucesso!
              </motion.p>
            )}

            {error && (
              <p className='text-red-400 text-sm font-semibold text-center'>
                {error}
              </p>
            )}

            <motion.button
              type='submit'
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className='
                bg-[#f8fafc] text-bg py-5 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] cursor-pointer
                relative overflow-hidden transition-all duration-500
                hover:bg-primary hover:text-white hover:shadow-[0_10px_30px_rgba(139,92,246,0.4)]
                disabled:opacity-50 disabled:cursor-not-allowed
              '
            >
              {loading ? 'Processando...' : 'Enviar mensagem'}
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
