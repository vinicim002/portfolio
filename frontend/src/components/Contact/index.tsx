import { Mail } from 'lucide-react';

export function Contact() {
  return (
    <>
      <div className='contactContainer mx-56 px-8 py-20 flex flex-row justify-between items-center'>
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

        <div className='contactForm flex flex-col gap-8 glass p-8 rounded-xl border-border-glass'>
          <div className='contactFormInfoPesoal'>
            <label htmlFor='nome'>
              Nome:
              <input type='text' name='nome' id='nome' placeholder='Seu nome' />
            </label>

            <label htmlFor='email'>
              Email:
              <input
                type='text'
                name='email'
                id='email'
                placeholder='seu@gmail.com'
              />
            </label>
          </div>

          <label htmlFor='assunto'>
            Assunto:
            <input type='text' name='assunto' id='assunto' />
          </label>

          <label htmlFor='mensagem'>
            <textarea
              name='mensagem'
              id='mensagem'
              cols={30}
              rows={10}
              placeholder='Escreva sua mensagem aqui'
            ></textarea>
          </label>

          <button type='submit' className='bg-[#f8fafc] text-bg p-4 rounded-xl font-bold'>Enviar mensagem 🚀</button>
        </div>
      </div>
    </>
  );
}
