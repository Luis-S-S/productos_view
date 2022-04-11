/* eslint-disable max-len */
import Header from '../../components/Header/Header';
import '../../App.css';
import './About.css';

function About() {
  return (
    <>
      <Header />
      <div className="about__container">
        <a className="about__title" href="https://www.linkedin.com/in/luis-salcedo-salas/" target="_blank" rel="noreferrer">
          Luis Alberto Salcedo Salas
        </a>
        <img className="about__profile" src="/profile.jpg" alt="Mia" />
        <h3 className="about__sub-title">Sobre mi</h3>
        <p className="about__text">
          Me encanta el desarrollo web, la tecnología y la programación.
          Además de cursar con MakeItReal, estudio ingeniería de sistemas en la Universidad Nacional Abierta y a Distancia.
          Por fuera de la tecnología, soy piloto comercial de aviones para EEUU y CO.
          Me apasiona aprender nuevas tecnologías, técnicas y métodos para mi vida personal y profesional.
          <strong>Emocionado y con muchas ansias de crecer como Desarrollador Full Stack!</strong>
        </p>
        <h3 className="about__sub-title">Lo que he aprendido</h3>
        <div className="about__list">
          <div className="list__item">
            <img className="item__icon" src="/icons/developer-icon.svg" alt="list icon" />
            <span className="about__text">GitHub</span>
          </div>
          <div className="list__item">
            <img className="item__icon" src="/icons/developer-icon.svg" alt="list icon" />
            <span className="about__text">React JS</span>
          </div>
          <div className="list__item">
            <img className="item__icon" src="/icons/developer-icon.svg" alt="list icon" />
            <span className="about__text">Backend with NodeJS y Mongoose</span>
          </div>
          <div className="list__item">
            <img className="item__icon" src="/icons/developer-icon.svg" alt="list icon" />
            <span className="about__text">Manejo profesional de carpetas en proyecto</span>
          </div>
        </div>
        <h3 className="about__sub-title">Información de contacto</h3>
        <div className="about__contact">
          <a href="mailto:rideluis@hotmail.com">
            <img className="contact__link" src="/icons/email-logo.svg" alt="Correo" />
          </a>
          <a href="https://github.com/Luis-S-S" target="_blank" rel="noreferrer">
            <img className="contact__link" src="/icons/github-icon.svg" alt="Git" />
          </a>
        </div>
      </div>
    </>
  );
}

export default About;
