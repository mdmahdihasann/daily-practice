import { useImmerReducer } from "use-immer";
import { createContext, useContext } from "react";
import { initialTasks } from "../data/todosData";
import TaskReducer from "../reduces/TaskReducer";


export const TodosDispatchContext = createContext(null);
export const TodosTaskContext = createContext(null);


export default function TaskProvider({children}) {
  const [tasks, dispatch] = useImmerReducer(TaskReducer, initialTasks);
  return(
    <TodosTaskContext.Provider value={tasks}>
    <TodosDispatchContext.Provider value={dispatch}>
      {children}
    </TodosDispatchContext.Provider>
  </TodosTaskContext.Provider>
  )
}
export function useDispatch(){
  return useContext(TodosDispatchContext);
}
export function useTask(){
  return useContext(TodosTaskContext);
}