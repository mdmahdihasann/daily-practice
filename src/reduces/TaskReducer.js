export default function TaskReducer(draft, action) {
  switch (action.type) {
    case "add": {
      draft.push({
          id: action.id,
          text: action.task,
          done: false,
        })
        break;
    }

    case "changed": {
      const index = draft.findIndex(i=> i.id === action.task.id);
      draft[index] = action.task;

      break;
    }

    case "delete": {
      return draft.filter((item) => item.id !== action.id);
    }

    default: {
      return draft;
    }
  }
}
