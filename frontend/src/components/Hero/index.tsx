export function Hero() {
  return (
    <>
      <div className='heroContainer min-h-screen pb-20 px-8 pt-20 flex flex-col items-center justify-center mx-56'>
        <div className='heroCotent flex flex-col items-center max-w-full'>
          <div className='hero-badge glass text-white px-4 py-1.5 rounded-full flex items-center justify-center gap-2 w-max mb-4'>
            <span className='badge-dot bg-primary'></span>
            Desenvolvedor Full Stack
          </div>

          <h1 className='hero-name mb-4 flex flex-col items-center text-center'>
            <span className='name-plain font-bold text-8xl text-gradient py-4'>
              Construindo sistemas <br /> que sejam escaláveis e elegantes
            </span>
          </h1>

          <p className='mb-10 font-normal text-text-dim text-center'>
            Desenvolvedor Full Stack apaixonado por criar experiências digitais
            elegantes com Java, Spring Boot e React.
          </p>

          <div className='hero-btns flex flex-row items-center gap-3.5'>
            <button className='bg-[#f8fafc] text-bg inline-flex gap-2 py-3 px-7 rounded-full font-semibold'>
              Ver projetos
            </button>
            <button className='glass inline-flex gap-2 py-3 px-7 rounded-full text-[#f8fafc] font-semibold'>
              Entrar em contato
            </button>
          </div>

          <div className='hero-scroll-hint mt-20 flex flex-col items-center'>
            <div className='scroll-pill'>
              <div className='scroll-dot'></div>
            </div>
            <span className='scroll-label'>Scroll para explorar</span>
          </div>
        </div>
      </div>
    </>
  );
}
