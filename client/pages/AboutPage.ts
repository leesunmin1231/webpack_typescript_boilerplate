import Component from "../core/Component";

class AboutPage extends Component {
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
      <div>${this.state.check ? this.state.check : ""}</div>
    `;
  }
}

export default AboutPage;
