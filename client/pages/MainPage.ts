import Component from "../core/Component";

class MainPage extends Component {
  protected setEvent(): void {
    const aboutButton = document.getElementById("go-to-about");
    aboutButton.addEventListener("click", () => {
      window.history.pushState(undefined, "", "/about");
      const locationChange = new CustomEvent("locationchange", {
        composed: true,
      });
      window.dispatchEvent(locationChange);
    });
  }
  template() {
    return `
      <header id="top-bar">
        Todo
      </header>
      <main>
        <input type="text" placeholder="할 일을 입력하세요."/>
        
      </main>
      <button type="button" id="go-to-about">about</button>
    `;
  }
}

export default MainPage;
