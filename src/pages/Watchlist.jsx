import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import '../styles/watchlist.css';
import Movie from '../components/Shared/Movie';

/*
  Renders the current user watchlist from supabase
**/
const Watchlist = () => {
  const [watchlist, setWatchlist] = useState([]);

  const deleteMovie = async (id) => {
    await supabase.from('watchlist').delete().match({ id });
    setWatchlist(watchlist.filter((movie) => movie.id !== id));
  };

  useEffect(() => {
    const fetchWatchlist = async () => {
      const { data, error } = await supabase.from('watchlist').select('*');
      if (error) {
        console.error('Error fetching watchlist:', error);
      } else {
        setWatchlist(data);
      }
    };

    fetchWatchlist();
  }, []);

  return (
    <main>
      <section className='watchlist'>
        <div className='container'>
          <h3 className='overall-title'>My watchlist (movie/tvshows)</h3>

          {/* {!watchlist && <Loader />} */}
          <section className='movies'>
            {watchlist.map((list) => (
              <div className='list' key={list.id}>
                <Movie {...list} />
                <button onClick={() => deleteMovie(list.id)}>Remove</button>
              </div>
            ))}
          </section>
        </div>
      </section>
    </main>
  );
};

export default Watchlist;
