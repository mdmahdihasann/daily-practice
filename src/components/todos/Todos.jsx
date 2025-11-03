import Task from "./Task";
import AddTask from "./AddTask";
import TaskProvider from "../../contexts/TodosContext";

export default function Todos() {
  

  
  return (
    <>
      <div className="flex justify-center items-center text-center w-screen h-screen bg-gray-100 grid grid-cols-1 gap-4">
        <TaskProvider>
            <AddTask/>
            <Task/>
        </TaskProvider>
      </div>
    </>
  );
}
