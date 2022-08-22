import { makeAutoObservable } from 'mobx';
export default class UserStore {
  constructor() {
    this._isAuth = false;
    this._addrUP = '';
    this._web3 = null;
    this._npList = null;
    this._vmContract = null;
    makeAutoObservable(this);
    console.log('user_store', this._isAuth);
  }

  setIsAuth(bool) {
    this._isAuth = bool;
  }
  setAddrUP(addrUP) {
    this._addrUP = addrUP;
  }
  setWeb3(web3) {
    this._web3 = web3;
  }
  setNpList(npList) {
    this._npList = npList;
  }
  setVmContract(vmContract) {
    this._vmContract = vmContract;
  }
  get isAuth() {
    return this._isAuth;
  }
  get web3() {
    return this._web3;
  }
  get npList() {
    return this._npList;
  }
  get vmContract() {
    return this._vmContract;
  }
  get addrUP() {
    return this._addrUP;
  }
}
