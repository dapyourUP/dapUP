//connect to UP
import React, { useContext } from 'react';
import { Context } from '../index';
import contractUP from './contractUP';

const Web3 = require('web3');
const web3 = new Web3(window.ethereum);
//const accountsRequest = web3.eth.requestAccounts();

const Auth = () => {
  const { user } = useContext(Context);

  const signIn = async () => {
    const response = await web3.eth.requestAccounts().then();

    user.setIsAuth(true);
    user.setAddrUP(response[0]);
    user.setWeb3(web3);
    const vm = contractUP(web3);
    user.setVmContract(vm);
    //    console.log('fihish');
  };

  return (
    <div className="flex space-x-2 pt-10 justify-center">
      <div>
        <button
          type="button"
          onClick={signIn}
          className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Connect with UP
        </button>
      </div>
    </div>
  );
};

export default Auth;
