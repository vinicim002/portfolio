export function Contact() {
  return (
    <>
      <div className='contactContainer m-auto px-6'>
        <div className='contactContent'>
          <h2>Contato</h2>
          <p>Interessado em escalar sua próxima ideia?</p>
          <div className='contactInfo'>
            <div className='contactIcon'>email</div>
            <div className='contactInfoDescription'>
              <h3>Email</h3>
              <p>teste@gmail.com</p>
            </div>
            <div className='contactInfoDescription'>
              <h3>LinkedIn</h3>
              <p>linkedin.com/in/devportfolio</p>
            </div>
            <div className='contactInfoDescription'>
              <h3>GitHub</h3>
              <p>github.com/devportfolio</p>
            </div>
          </div>
        </div>

        <div className='contactForm'>
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

          <button type='submit'>Enviar mensagem</button>
        </div>
      </div>
    </>
  );
}
