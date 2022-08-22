// List UP with check
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Items from '../components/Items';

const ListUP = observer(() => {
  const { user } = useContext(Context);
  const [np, setNp] = [useState(3)];
  return (
    <div className="conteiner mx-auto max-w-[800px]  ">
      <div className="flex mx-auto justify-center text-white  from-pink-700 to-orange-300 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
        Welcome UP {user.addrUP}
      </div>

      <div className="flex mx-auto justify-center text-orange-900  bg-gradient-to-br from-pink-700 to-orange-300 hover:bg-gradient-to-bl font-medium rounded-lg text-xl px-5 py-2.5 text-center ">
        <h1>List of members UP </h1>
      </div>

      <div className="flex space-x-4 pt-5 justify-center">
        <Items npList={np} />
      </div>
      <div>
        <p>{np}</p>
        <button onClick={() => setNp(np + 1)}>Next|</button>
        <button onClick={() => setNp(np - 1)}>Prev</button>
      </div>
    </div>
  );
});

export default ListUP;
