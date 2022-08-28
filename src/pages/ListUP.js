// List UP with check
import React, { useContext, useState } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import Items from '../components/Items';

const ListUP = observer(() => {
  const { user } = useContext(Context);
  const [np, setNp] = useState(1);

  return (
    <div className="conteiner mx-auto max-w-[800px]  ">
      <div className="flex mx-auto justify-center text-white  from-pink-700 to-orange-300 hover:bg-gradient-to-bl  font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
        Welcome UP {user.addrUP}
      </div>

      <div className="flex mx-auto justify-center text-orange-900  bg-gradient-to-br from-pink-700 to-orange-300 hover:bg-gradient-to-bl font-medium rounded-lg text-xl px-5 py-2.5 text-center ">
        <h1>List of members UP </h1>
      </div>

      <div className="flex space-x-4 pt-5 justify-center">
        <Items key={np} npList={np} />
      </div>

      <div class="inline-flex rounded-md shadow-sm" role="group">
        <button
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-l-lg border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => {
            if (np > 1) {
              setNp(np - 1);
            }
          }}
        >
          Prev
        </button>
        <p className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700">
          {np}
        </p>
        <button
          className="py-2 px-4 text-sm font-medium text-gray-900 bg-transparent rounded-r-md border border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          onClick={() => setNp(np + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
});

export default ListUP;
