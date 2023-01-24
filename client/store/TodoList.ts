import Store from "../core/Store";

export const todoStore = new Store([]);
export const setTodoList = todoStore.setState.bind(todoStore);
export const getTodoList = todoStore.getState.bind(todoStore);
