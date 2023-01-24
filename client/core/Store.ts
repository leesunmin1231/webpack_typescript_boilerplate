/* eslint-disable @typescript-eslint/no-explicit-any */
export default class Store {
  state: any;
  _observers: Set<any>;
  constructor(initState: object) {
    this._observers = new Set();
    this.state = initState;
  }
  private _notify() {
    this._observers.forEach((observer) => observer());
  }
  public subscribe(observer: object) {
    this._observers.add(observer);
  }
  public setState(newState: object) {
    this.state = newState;
    this._notify();
  }
  public getState() {
    return this.state;
  }
}
