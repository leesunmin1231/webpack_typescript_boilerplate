import Component from "../core/Component";

class MainPage extends Component {
  protected componentDidMount(): void {
    this.testApi();
  }
  async testApi() {
    const response = await fetch("/api/test-api", { method: "GET" });

    const { check } = await response.json();
    this.setState({ check });
  }
  template() {
    return `
      <header class="header">
        header
      </header>
      <main>
        ${this.state.check}
      </main>
      <footer>footer</footer>
    `;
  }
}

export default MainPage;
