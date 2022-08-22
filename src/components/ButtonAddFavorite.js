//describe to UP
import React, { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../index';
import Items from '../components/Items';

const ButtonAddFavorite = (props) => {
  const { user } = useContext(Context);
  const [error, setError] = useState('');

  const varsetPushAddUP = props.itemFavorite;

  const fgetUPlist = async () => {
    const iUpList = await user.vmContract.methods
      .getUPlist(user.addrUP)
      .call()
      .then((data) => {
        return (
          <div className="flex space-x-4 pt-5 justify-center">
            <Items npList={data} />
          </div>
        );
      });
  };

  const fAddUP = async () => {
    try {
      const iaddUP = await user.vmContract.methods
        .addUP(varsetPushAddUP)

        .send(
          {
            from: user.addrUP,
            gas: 500000,
          },
          function (error, result) {
            console.log('error: ' + error);
            console.log('result:' + result);
          }
        )
        .then(console.log);
    } catch (err) {
      setError(err.message);
    }
    console.log('error:', error);
  };

  return (
    <div className="conteiner mx-auto  pt-5 font-bold ">
      <button
        title="the cost of these actions is 500000 gas "
        onClick={fAddUP}
        className=" inline-flex items-center py-2 px-4 mr-3 text-sm font-medium  text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Add to favorites UP
      </button>
      <li className="inline-flex items-center py-2 px-4 mr-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <Link to="/favoriteup">List of favorites UP</Link>
      </li>
    </div>
  );
};

export default ButtonAddFavorite;
