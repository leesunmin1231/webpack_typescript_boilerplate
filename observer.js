class Observer {
  update(newState) {
    console.log(newState);
  }
}

class Subject {
  #state;
  constructor() {
    this._observers = new Set();
  }
  subscribe(observer) {
    this._observers.add(observer);
  }
  notify() {
    this._observers.forEach((observer) => observer.update(this.#state));
  }
  setState(newState) {
    console.log("set", newState);
    this.#state = newState;
    this.notify();
  }
  useState(initState) {
    this.#state = initState;
    return [this.#state, this.setState];
  }
}

const state1 = new Observer();
const state2 = new Observer();

const Publisher = new Subject();
Publisher.subscribe(state1);
Publisher.subscribe(state2);

const [s1, setS1] = Publisher.useState(3);
console.log("처음 상태: ", s1);
Publisher.setState(5);
