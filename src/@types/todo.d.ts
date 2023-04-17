export interface ITodo {
  title: string;
}

export type TodoContextType = {
  todos: ITodo[];
  getTodos: () => void;
  postTodo: (todo: ITodo) => void;
};
