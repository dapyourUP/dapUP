// List UP with check
import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import ItemFavorites from '../components/ItemFavorites';

const FavoriteUP = observer(() => {
  const { user } = useContext(Context);

  return (
    <div className="conteiner mx-auto max-w-[800px]  ">
      <div className="flex mx-auto justify-center text-white bg-gradient-to-br from-pink-700 to-orange-300 hover:bg-gradient-to-bl font-medium rounded-lg text-xl px-5 py-2.5 text-center ">
        <h1>List of favorites UP</h1>
      </div>
      <div className="flex space-x-4 pt-5 justify-center">
        <ItemFavorites userIF={user} />
      </div>
    </div>
  );
});

export default FavoriteUP;
