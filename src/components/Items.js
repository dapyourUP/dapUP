import React, { Component } from 'react';
import Item from './Item';

export class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      nPage: this.props.npList,
      nOffset: 100,
      nUrlContract:
        //'https://explorer.execution.l16.lukso.network/api?module=contract&action=listcontracts',
        'https://explorer.execution.l16.lukso.network/api?module=account&action=listaccounts',
    };

    this.callAPI = this.callAPI.bind(this);
    this.callAPI();
  }

  callAPI(nPage) {
    console.log(
      this.state.nUrlContract +
        '&page=' +
        this.state.nPage +
        '&offset=' +
        this.state.nOffset
    );
    fetch(
      this.state.nUrlContract +
        '&page=' +
        this.state.nPage +
        '&offset=' +
        this.state.nOffset
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.result[0]);
        this.setState({
          items: data.result,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.items.map((el) => (
          <Item key={el.address} item={el} />
        ))}
      </div>
    );
  }
}

export default Items;
