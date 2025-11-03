
import TaskEdit from "./TaskEdit";
import { TodosTaskContext, useTask } from "../../contexts/TodosContext";

export default function Task() {
  const tasks = useTask();
  return (
    <div className="todoList">
        {
            tasks.map(task=>(
                <TaskEdit task={task}/>
            ))
        }
        
    </div>
  );
}
