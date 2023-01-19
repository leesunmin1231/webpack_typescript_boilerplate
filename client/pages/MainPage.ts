import Component from "../core/Component";
import router from "../lib/Router";

class MainPage extends Component {
  protected setup(): void {
    this.state = { todoList: [] };
  }
  protected setEvent(): void {
    const aboutButton = document.getElementById("go-to-about");
    aboutButton.addEventListener("click", () => {
      router.push("/about");
    });
    const todoInputBox = <HTMLInputElement>(
      document.getElementById("todo-input")
    );
    todoInputBox.addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.isComposing) return;
      const { key } = e;
      if (key === "Enter") {
        this.setState({
          todoList: [...this.state.todoList, todoInputBox.value],
        });
      }
    });
    todoInputBox.focus();
  }
  template() {
    return `
      <header id="top-bar">
        Todo
      </header>
      <main>
        <input type="text" id="todo-input" placeholder="할 일을 입력하세요."/>
        ${this.state.todoList
          .map((item: string) => `<li>${item}</li>`)
          .join("")}
      </main>
      <button type="button" id="go-to-about">about</button>
    `;
  }
}

export default MainPage;
