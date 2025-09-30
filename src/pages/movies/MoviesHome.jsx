import { useEffect, useState } from 'react';
import '../../styles/homepage.css';
import Hero from '../../components/movie/Hero.jsx';
import InifiniteLoader from '../../components/InfiniteLoader.jsx';
import Search from '../../components/Shared/Search.jsx';
import Select from '../../components/movie/Select.jsx';
import useInfiniteLoad from '../../hooks/useInfiniteLoad.jsx';
import { useInView } from 'react-intersection-observer';
import FetchResult from '../../components/FetchResult.jsx';
import Movies from '../../components/Shared/Movies.jsx';

/*
  Renders the Movies Page: when you click 'movies' on the navbar
**/
const MoviesHome = () => {
  const { ref, inView } = useInView();
  const [selectedValue, setSelectedValue] = useState('popular');
  // fetches movies with infinite load ability
  const { movies, error, isLoadingMore, size, setSize } = useInfiniteLoad(
    '/movie',
    selectedValue
  );

  useEffect(() => {
    if (inView) {
      setSize(size + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <main>
      <Hero />

      <section className='section'>
        <div className='container'>
          <div className='form-section'>
            <Select
              selected={selectedValue}
              setSelected={setSelectedValue}
            />
            <Search />
          </div>

          <FetchResult movies={movies} error={error}>
            <h2 className='overall-title'>{selectedValue} Movies</h2>
            {movies.map((movie, index) => (
              <Movies key={index} data={movie} />
            ))}
          </FetchResult>

          <button ref={ref} style={{ margin: 'auto' }}>
            {isLoadingMore ? <InifiniteLoader /> : null}
          </button>
        </div>
      </section>
    </main>
  );
};

export default MoviesHome;
