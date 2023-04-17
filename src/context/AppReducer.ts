import { ITodo } from "../@types/todo";

export type State = {
  todos: ITodo[];
};

export type Fetch = {
  readonly type: "GET_TODOS";
  readonly payload: ITodo[];
};

export type Post = {
  readonly type: "POST_TODO";
  readonly payload: ITodo;
};

export type Actions = Fetch | Post;

export default function reducer(state: State, action: Actions): State {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: action.payload,
      };
    case "POST_TODO":
      return {
        ...state,
        todos: [...state.todos, { ...action.payload }],
      };
    default:
      return state;
  }
}
