import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
// Importe a sua logo aqui (ajuste o caminho se necessário)
import logoImg from '../../assets/logoBranca.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='border-t border-white/5'>
      <div className='footerContainer mx-4 md:mx-12 2xl:mx-56 px-6 lg:px-8 py-12 flex flex-col md:flex-row justify-between items-center gap-8'>
        {/* LADO ESQUERDO: BRANDING COM LOGO */}
        <div className='flex flex-col items-center md:items-start gap-3'>
          <div className='nomeComLogo flex items-center gap-3'>
            {/* Logo inserida com tamanho controlado e filtro de brilho opcional */}
            <img
              src={logoImg}
              alt='Vinicius Logo'
              className='w-10 h-auto opacity-90 brightness-110 drop-shadow-[0_0_8px_rgba(139,92,246,0.3)]'
            />
            <p className='logoNavbar text-2xl font-bold'>&lt;Vinicius/&gt;</p>
          </div>
          <p className='text-text-dim text-sm font-medium text-center md:text-left max-w-[300px] leading-relaxed'>
            Crafting premium digital experiences with precision and speed.
          </p>
        </div>

        {/* CENTRO: REDES SOCIAIS COM HOVER VIOLETA */}
        <div className='redesSociais flex items-center gap-6'>
          <motion.a
            whileHover={{ y: -3, color: '#8b5cf6' }}
            href='https://www.instagram.com/__vinicim__/'
            target='_blank'
            className='text-text-dim text-2xl transition-colors'
          >
            <FontAwesomeIcon icon={faInstagram} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, color: '#8b5cf6' }}
            href='https://linkedin.com/in/viniciusvila'
            target='_blank'
            className='text-text-dim text-2xl transition-colors'
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>
          <motion.a
            whileHover={{ y: -3, color: '#8b5cf6' }}
            href='https://github.com/vinicim002'
            target='_blank'
            className='text-text-dim text-2xl transition-colors'
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>
        </div>

        {/* LADO DIREITO: COPYRIGHT */}
        <div className='copy'>
          <p className='text-xs text-text-dim font-normal tracking-wide text-center md:text-right'>
            © {currentYear}{' '}
            <span className='text-white font-semibold'>Vinicius Vila Nova</span>
            .
            <br /> Todos direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
