import Component from "./core/Component";
import MainPage from "./pages/MainPage";

const ROUTE = {
  MAIN: "/",
  MAP: "/map",
  LOGIN: "/login",
};

class App extends Component {
  componentDidMount() {
    window.addEventListener(
      "locationchange",
      this.handlelocationChange.bind(this)
    );
  }

  handlelocationChange({ detail }) {
    const { targetUrl } = detail;
    window.history.pushState(undefined, "타이틀", targetUrl);
    this.renderChildComponent();
  }

  renderChildComponent() {
    const { pathname } = window.location;
    switch (pathname) {
      case ROUTE.MAIN:
        new MainPage(this.$target);
        break;
      default:
        new MainPage(this.$target);
        break;
    }
  }
}

export default App;
