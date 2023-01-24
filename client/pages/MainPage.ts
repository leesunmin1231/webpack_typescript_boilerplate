import Component from "../core/Component";
import router from "../lib/Router";
import { setTodoList, getTodoList, todoStore } from "../store/TodoList";

const keyDownHandler = (e: KeyboardEvent, newTodo: string) => {
  if (e.isComposing) return;
  const { key } = e;
  if (key === "Enter") {
    setTodoList([...getTodoList(), newTodo]);
  }
};

const clickHandler = () => {
  router.push("/about");
};

class MainPage extends Component {
  protected setup(): void {
    todoStore.subscribe(this.update.bind(this));
  }
  protected setEvent(): void {
    const aboutButton = document.getElementById("go-to-about");
    aboutButton.addEventListener("click", clickHandler);

    const todoInputBox = <HTMLInputElement>(
      document.getElementById("todo-input")
    );
    todoInputBox.addEventListener("keydown", (e) =>
      keyDownHandler(e, todoInputBox.value)
    );
    todoInputBox.focus();
  }
  render() {
    return `
      <header id="top-bar">
        Todo
      </header>
      <main id="content">
        <section id="todo-list">
          <input type="text" id="todo-input" placeholder="할 일을 입력하세요."/>
          ${getTodoList()
            .map((item: string) => `<li>${item}</li>`)
            .join("")}
        </section>
        <button type="button" id="go-to-about">about</button>
      </main>
    `;
  }
}

export default MainPage;
