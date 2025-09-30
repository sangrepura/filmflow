import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { toast } from 'react-toastify';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import { IoBookmarks } from 'react-icons/io5';
import { supabase } from '../utils/supabase';

const override = css`
  display: block;
  margin: 0 auto;
`;

const AddWatchListBtn = ({ title, name, id, vote_average, poster_path }) => {
  const { currentUser } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [addedToWatchlist, setAddedToWatchlist] = useState(false);

  // Addding movie/tvshow to database
  const addToWatchlist = async () => {
    setIsSubmitting(true);
    try {
      // Ensure the user exists in the public users table
      await supabase.from('users').upsert({ id: currentUser.id });

      const { error } = await supabase.from('watchlist').upsert([
        {
          name: title ?? name,
          media_id: id,
          vote_average,
          poster_path,
          user_id: currentUser.id,
        },
      ]);
      if (error) throw error;
      setIsSubmitting(false);
      toast.info(`${title ?? name} added to your list 👍`);
      setAddedToWatchlist(true);
    } catch (e) {
      console.error('Error adding document: ', e);
      setIsSubmitting(false);
    }
  };

  const checkBtnDisabled = () => {
    return !currentUser || isSubmitting === true || addedToWatchlist === true;
  };

  // change button text
  const changeBtnText = () => {
    if (addedToWatchlist) {
      return 'Already in your watchlist';
    } else if (currentUser) {
      return 'Add to watchlist';
    } else {
      return 'Login to add to watchlist';
    }
  };

  return (
    <button
      className='add-btn'
      disabled={checkBtnDisabled() ? true : false}
      onClick={() => addToWatchlist()}>
      <IoBookmarks />
      {isSubmitting ? (
        <ClipLoader
          color='#ffffff'
          loading={isSubmitting}
          css={override}
          size={20}
        />
      ) : (
        <span>{changeBtnText()}</span>
      )}
    </button>
  );
};

export default AddWatchListBtn;
