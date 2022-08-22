import React, { Component } from 'react';
import ItemFavorite from './ItemFavorite';

export class ItemFavorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addrUPF: this.props.userIF.addrUP,
      vmContractF: this.props.userIF.vmContract,
      address: [],
    };
    console.log('this.props.userIF.addrUP: ' + this.props.userIF.addrUP);
    console.log(
      'this.props.userIF.vmContract: ' + this.props.userIF.vmContract._address
    );
    console.log('this.props.userIF: ' + this.props.userIF);
    this.fgetUPlist = this.fgetUPlist.bind(this);
    this.iUpList = this.fgetUPlist();
    this.iUpList = '';
    console.log('this.state.address:', this.state.address);
    console.log('iUpList:', this.iUpList);
  }

  //const [npList, setNpList] = useState(null);
  fgetUPlist() {
    return this.state.vmContractF.methods
      .getUPlist(this.state.addrUPF)
      .call()
      .then((data) => {
        this.setState({
          address: data,
        });
        //this.items.address  = data;
        console.log('FavoriteDtata: ', data[0]);
        console.log('this.state.items:', this.state.address);
      });

    //});
  }

  render() {
    return (
      <div>
        <div>
          {this.state.address.map((el) => (
            <ItemFavorite key={el} item={el} />
          ))}
        </div>
      </div>
    );
  }
}

export default ItemFavorites;
