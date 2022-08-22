// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract FollowersList2 {

    //maps an address to an address array
    //As an example your address to a list of addresses you are interested in.  This supports multiple people having an address book

    mapping(address => address[]) private _addresses;


    //returns the list of addresses in the _addresses map
    function getUPlist(address ups) public view returns (address[] memory) {
        return _addresses[ups];
    }

    //adds address to your list of addresses in the _addresses map.
    //Uses push since it is an array
    function addUP(address ups) public {
        _addresses[msg.sender].push(ups);
    }
     
    function getSender() public view returns (address) {
        return address(msg.sender);
    }


}
