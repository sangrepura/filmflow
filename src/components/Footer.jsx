import '../styles/footer.css'
import {
  FaReact,
  FaVimeoV,
  FaCodepen,
  FaDribbble,
  FaFilm,
} from 'react-icons/fa'
import { SiVite, SiSupabase } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div>
          <p>
            Created by{' '}
            <a
              href='https://scottphelps.dev'
              target='_blank'
              rel='noreferrer'>
              Scott Phelps
            </a>
            .
          </p>
        </div>

        <ul className='tech-stack'>
          <li>
            <a
              href='https://react.dev/'
              target='_blank'
              rel='noreferrer'>
              <FaReact /> React.Js
            </a>
          </li>
          <li>
            <a
              href='https://vitejs.dev/'
              target='_blank'
              rel='noreferrer'>
              <SiVite /> Vite
            </a>
          </li>
          <li>
            <a
              href='https://react.dev/learn/passing-data-deeply-with-context'
              target='_blank'
              rel='noreferrer'>
              <FaCodepen /> Context API
            </a>
          </li>
          <li>
            <a
              href='https://supabase.com/'
              target='_blank'
              rel='noreferrer'>
              <SiSupabase /> Supabase
            </a>
          </li>
          <li>
            <a
              href='https://orm.drizzle.team/'
              target='_blank'
              rel='noreferrer'>
              <FaDribbble /> Drizzle
            </a>
          </li>
          <li>
            <a
              href='https://www.framer.com/motion/'
              target='_blank'
              rel='noreferrer'>
              <FaVimeoV /> Framer Motion
            </a>
          </li>
          <li>
            <a
              href='https://www.themoviedb.org/settings/api'
              target='_blank'
              rel='noreferrer'>
              <FaFilm /> TheMovieDB API
            </a>
          </li>
        </ul>
        <p>
          check out the code on{' '}
          <a
            href='https://github.com/sangrepura/filmflow'
            target='_blank'
            rel='noreferrer'>
            github
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
