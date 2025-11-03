import React, { useState } from "react";
import getNextId from "../../utils/GetNextId";
import { TodosDispatchContext, TodosTaskContext, useDispatch, useTask } from "../../contexts/TodosContext";

export default function AddTask() {
  const [addtask, setAddTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useTask();
  return (
    <div className="todoAdd">
      <input
        value={addtask}
        onChange={(e) => setAddTask(e.target.value)}
        type="text"
        placeholder="Enter something..."
        className="border border-gray-400 py-2 px-3 rounded-lg focus:outline-none"
      />
      <button
        className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={() => {
          dispatch({
            type: "add",
            task: addtask,
            id: getNextId(tasks),
          }), setAddTask("");
        }}
      >
        Add
      </button>
    </div>
  );
}
