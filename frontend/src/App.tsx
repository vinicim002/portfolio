import { AboutMe } from './components/AboutMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Technologies } from './components/Technologies';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Technologies></Technologies>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
