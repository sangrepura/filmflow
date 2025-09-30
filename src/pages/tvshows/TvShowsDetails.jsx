import { useParams } from 'react-router-dom'
import { useRequest } from '../../hooks/useRequest.jsx'
import Casts from '../../components/Cast/Casts.jsx'
import Status from '../../components/Shared/Status.jsx'
import TitularInfo from '../../components/Shared/TitularInfo.jsx'
import Loader from '../../components/Loader.jsx'
import Error from '../../components/Error.jsx'
import '../../styles/movie-details.css'
import Seasons from '../../components/TvShows/Seasons.jsx'
import Recommended from '../../components/Shared/Recommended.jsx';

/*
  Individual tvshows details page
*/
const TvShowsDetails = () => {
  const { id } = useParams()
  const { data, error } = useRequest(id, '/tv')

  if (!data) return <Loader />
  if (error) return <Error />

  return (
    <main className='movie-details'>
      <div
        className='movie-hero'
        style={{
          background: `linear-gradient(#ddd, transparent), url('https://image.tmdb.org/t/p/original${data.backdrop_path}') no-repeat top/cover`,
        }}></div>

      <section className='info'>
        <TitularInfo {...data} />
        <Status {...data} />
        <Seasons {...data} />
        <Casts {...data.credits} />
        <Recommended {...data.recommendations} />
        <Recommended {...data.similar} />
      </section>
    </main>
  )
}

export default TvShowsDetails
