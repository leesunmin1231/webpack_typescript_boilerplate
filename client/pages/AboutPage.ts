import Component from "../core/Component";
import router from "../lib/Router";

class AboutPage extends Component {
  protected componentDidMount(): void {
    this.testApi();
  }
  protected setEvent(): void {
    const backButton = document.getElementById("go-back");
    backButton.addEventListener("click", () => {
      router.back();
    });
  }
  async testApi() {
    const response = await fetch("/api/test-api", { method: "GET" });
    const { check } = await response.json();
    this.setState({ check });
  }
  template() {
    return `
      <div>
        <header>
            <button type="button" id="go-back">back</button>
        </header>
        <section>${this.state.check ? this.state.check : ""}</section>
      </div>
    `;
  }
}

export default AboutPage;
