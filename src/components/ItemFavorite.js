import React, { Component } from 'react';
import Web3 from 'web3';
import { ERC725 } from '@erc725/erc725.js';
import 'isomorphic-fetch';
import erc725schema from '@erc725/erc725.js/schemas/LSP3UniversalProfileMetadata.json';
import { Link } from 'react-router-dom';

// Our static variables
const RPC_ENDPOINT = 'https://rpc.l16.lukso.network';
const IPFS_GATEWAY = 'https://2eff.lukso.dev/ipfs/';

// Parameters for ERC725 Instance
const provider = new Web3.providers.HttpProvider(RPC_ENDPOINT);
const config = { ipfsGateway: IPFS_GATEWAY };

export class ItemFavorite extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isErc725: true,
      upProfile: [],
      upName: '',
      upDescription: '',
      upUrl: '',
      upImageUrl: '',
    };
    this.fetchProfile = this.fetchProfile.bind(this);
    //console.log('initItem ', this.props.item);
    this.fetchProfile(this.props.item);
  }

  async fetchProfile(address) {
    try {
      const profile = new ERC725(erc725schema, address, provider, config);
      return await profile.fetchData('LSP3Profile').then((data) => {
        this.setState({
          upProfile: data,
          upName: data.value.LSP3Profile.name,
          upDescription: data.value.LSP3Profile.description,
          isErc725: true,
        });
        if (data.value.LSP3Profile.links.hasOwnProperty('0')) {
          this.setState({
            upUrl: data.value.LSP3Profile.links[0].url,
            isErc725: true,
          });
        } else {
          this.setState({ upUrl: '' });
        }

        if (data.value.LSP3Profile.profileImage.hasOwnProperty('0')) {
          this.setState({
            upImageUrl: data.value.LSP3Profile.profileImage[0].url.replace(
              'ipfs://',
              'https://2eff.lukso.dev/ipfs/'
            ),
            //isErc725: true,
          });
        } else {
          this.setState({
            upImageUrl: '', //,
            //isErc725: false,
          });
        }
        //console.log(this.state.upData);
      });
    } catch (error) {
      this.setState({ isErc725: false });
      console.log(error);
      return console.log('This is not an ERC725 Contract');
    }
  }

  render() {
    if (this.state.isErc725) {
      return (
        <div className="max-w-full bg-white rounded-lg border border-gray-200 shadow-md dark:border-gray-700 bg-gradient-to-br from-pink-400 to-orange-100">
          <a href="/listup">
            <img
              className="rounded-t-lg shadow-lg"
              src={this.state.upImageUrl}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="/listup">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {this.state.upName}
              </h5>
            </a>
            <a href="/listup">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {this.state.upDescription}
              </h5>
            </a>
            <button
              className="text-white bg-gradient-to-br from-pink-700 to-orange-300 hover:bg-gradient-to-bl focus:ring-8 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              onClick={() =>
                window.open(
                  this.state.upUrl,
                  'sharer',
                  'toolbar=0,status=0,width=800,height=600'
                )
              }
            >
              Open Url: {this.state.upUrl}
            </button>
            <button className="text-white w-64 bg-gradient-to-br from-pink-700 to-orange-300 hover:bg-gradient-to-bl focus:ring-8 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-20 mb-2">
              <li>
                <Link to="/listup"> List of members UP </Link>
              </li>
            </button>
          </div>
        </div>
      );
    }
  }
}

export default ItemFavorite;
