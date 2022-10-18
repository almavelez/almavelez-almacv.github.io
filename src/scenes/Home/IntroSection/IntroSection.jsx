import s from './IntroSection.module.scss';
import avatar from '../../../assets/avatar.svg';
import { AiFillGithub } from 'react-icons/ai';
import {
  FaFacebookSquare,
  FaLinkedinIn,
} from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            DÉJAME <span className={s.purple}> PRESENTARME </span>{' '}
            
          </h1>

          <div className={s.description}>
            <p>
              Me enamore de la programación y almenos algo aprendí, creo… 🤷‍♂️
            </p>

            <p>
              Mi campo de interes es la creación de nuevas
              <i>
                <b className={s.purple}>
                  {' '}
                  Tecnologías y productos Web
                </b>
              </i>
            </p>

            <p>
              Soy una comprometida desarrolladora de software 🚀 <br />
              Tengo experiencia en la creación de aplicaciones{' '}
              <i>
                <b className={s.purple}>Web y Móbiles</b>
              </i>{' '}
              applicaciones con
              <br />
              <i>
                <b className={s.purple}>
                  JavaScript, Reactjs, Nodejs, Angular
                </b>
              </i>{' '}
              y algunas otras bibliotecas geniales.
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={s.introSocial}>
        <h1>ENCUENTRA ME EN</h1>
        <p>
          Siéntase libre de <span className={s.purple}>contactarse </span>con
          migo
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/almavelez"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaFacebookSquare />
            </a>
          </li>
         
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
