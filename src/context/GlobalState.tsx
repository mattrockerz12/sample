import axios from "axios";
import React, { createContext, Reducer, useReducer } from "react";
import { ITodo, TodoContextType } from "../@types/todo";
import reducer from "./AppReducer";
import { Actions, State } from "./AppReducer";

const initialState = {
  todos: [],
};

export const GlobalContext = createContext<TodoContextType | undefined>(
  undefined
);

type Props = {
  children: React.ReactNode;
};

export const GlobalProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<State, Actions>>(
    reducer,
    initialState
  );

  //actions
  const getTodos = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    );

    dispatch({
      type: "GET_TODOS",
      payload: data,
    });
  };

  const postTodo = async (todo: ITodo) => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/todos",
      todo
    );

    dispatch({
      type: "POST_TODO",
      payload: data,
    });
  };

  return (
    <GlobalContext.Provider value={{ todos: state.todos, getTodos, postTodo }}>
      {children}
    </GlobalContext.Provider>
  );
};
