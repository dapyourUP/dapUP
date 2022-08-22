// abi copy / pasted from './build/contracts_FollowersList2_sol_FollowersList2.abi'
//const { CONTRACTUP1 } = process.env;

//require('dotenv').config();
console.log(process.env);

const contractUPABI = [
  {
    inputs: [{ internalType: 'address', name: 'ups', type: 'address' }],
    name: 'addUP',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getSender',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'ups', type: 'address' }],
    name: 'getUPlist',
    outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
    stateMutability: 'view',
    type: 'function',
  },
];

const contractUP = (web3) => {
  //console.log('process.env.CONTRACTUP1: ' + process.env.REACT_CONTRACT_UP);
  return new web3.eth.Contract(
    contractUPABI,
    '0x4Ed332791874A58a4E0f01006D9CCF203a16AFDB'
  );
};

export default contractUP;
