import { AboutMe } from './components/AboutMe';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
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
    </>
  );
}
