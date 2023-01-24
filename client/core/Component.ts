/* eslint-disable @typescript-eslint/no-explicit-any */
export default class Component {
  state: any;

  constructor(protected $target: HTMLElement, protected props?: any) {
    this.setup();
    this._render();
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
  protected render() {
    return ``;
  }
  protected componentDidMount() {}
  protected componentDidUpdate() {}
  protected renderChildComponent() {}

  private _render() {
    this.$target.innerHTML = this.render();
  }
  protected update() {
    this._render();
    this.setEvent();
    this.renderChildComponent();
    this.componentDidUpdate();
  }
}
