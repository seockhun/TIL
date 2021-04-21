import { combineReducers } from "redux";
import TodoList from "../../components/TodoList";
import { TodoState, todoReducer as todo } from "./todos";

export interface StoreState {
    todo: TodoState;
}

export default combineReducers<StoreState>({
    todo
});