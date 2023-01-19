import Component from "./core/Component";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";

const ROUTE = {
  MAIN: "/",
  ABOUT: "/about",
};

class App extends Component {
  componentDidMount() {
    window.addEventListener("pushstate", this.renderChildComponent.bind(this));
    window.addEventListener("popstate", this.renderChildComponent.bind(this));
  }

  renderChildComponent() {
    const { pathname } = window.location;
    switch (pathname) {
      case ROUTE.MAIN:
        new MainPage(this.$target);
        break;
      case ROUTE.ABOUT:
        new AboutPage(this.$target);
        break;
      default:
        new MainPage(this.$target);
        break;
    }
  }
}

export default App;
