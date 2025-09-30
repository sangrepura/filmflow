import { Routes, Route } from 'react-router-dom'
import MoviesHome from './pages/movies/MoviesHome'
import MovieDetails from './pages/movies/MovieDetails'
import NotFound from './pages/404'
import Header from './components/Header'
import TvShowsHome from './pages/tvshows/TvShowsHome'
import TvShowsDetails from './pages/tvshows/TvShowsDetails'
import CastsDetails from './pages/CastsDetails'
import Home from './pages/index'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Watchlist from './pages/Watchlist'
import Footer from './components/Footer'
import AuthRoute from './components/AuthRoute'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movies' element={<MoviesHome />} />
        <Route exact path='/tvshows' element={<TvShowsHome />} />
        {/* on show if user is logged in */}
        <Route path='/watchlist' exact element={<AuthRoute><Watchlist /></AuthRoute>} />
        <Route exact path='/movie/:id' element={<MovieDetails />} />
        <Route exact path='/tvshow/:id' element={<TvShowsDetails />} />
        <Route exact path='/cast/:id' element={<CastsDetails />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
