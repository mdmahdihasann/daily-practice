import React, { useState } from "react";
import { TodosDispatchContext, useDispatch } from "../../contexts/TodosContext";

export default function TaskEdit({ task }) {
  const [editTask, setEditTask] = useState(false);
  const dispatch = useDispatch();
  let textContent;
  if (editTask) {
    textContent = (
      <>
        <input
          type="text"
          value={task.text}
          className="border border-gray-400 py-2 px-3 rounded-lg focus:outline-none"
          onChange={(e) =>
            dispatch({
              type: "changed",
              task: {
                ...task,
                text: e.target.value,
              },
            })
          }
        />
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setEditTask(false)}
        >
          Save
        </button>
      </>
    );
  } else {
    textContent = (
      <>
        {task.text}
        <button
          className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          onClick={() => setEditTask(true)}
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <div className="items mb-2">
      <input
        type="checkbox"
        checked={task.done}
        onChange={(e) =>
          dispatch({
            type: "changed",
            task: {
              ...task,
              done: e.target.checked,
            },
          })
        }
        className="mr-2 mt-2 w-6 h-6 accent-green-600 rounded border-gray-400"
      />
      {textContent}
      <button
        className="ml-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
        onClick={() =>
          dispatch({
            type: "delete",
            id: task.id,
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
