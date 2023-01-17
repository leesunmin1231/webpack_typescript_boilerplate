/* eslint-disable @typescript-eslint/no-explicit-any */
export default class Component {
  state: any;

  constructor(protected $target: HTMLElement, protected props?: any) {
    this.setup();
    this.render();
    this.setEvent();
    this.renderChildComponent();
    this.componentDidMount();
  }
  protected setup() {
    this.state = {};
  }
  protected setEvent() {}
  protected setState(newState: object) {
    this.state = { ...this.state, ...newState };
    this.update();
  }
  protected template() {
    return ``;
  }
  protected render() {
    this.$target.innerHTML = this.template();
  }
  protected update() {
    this.render();
    this.setEvent();
    this.renderChildComponent();
    this.componentDidUpdate();
  }
  protected componentDidMount() {}
  protected componentDidUpdate() {}
  protected renderChildComponent() {}
}
