class Publisher {
  observers = new Map();
  add(eventType, newObserver) {
    if (!this.observers.has(eventType)) {
      this.observers.set(eventType, [newObserver]);
      return;
    }
    const targetObservers = this.observers.get(eventType);
    targetObservers.push(newObserver);
    this.observers.set(eventType, targetObservers);
  }
  delete(eventType, target) {
    const targetObservers = this.observers.get(eventType);
    this.observers.set(targetObservers.filter((obs) => obs !== target));
  }
  notify(eventType) {
    const targetObservers = this.observers.get(eventType);
    targetObservers.forEach((observer) => observer());
  }
}
