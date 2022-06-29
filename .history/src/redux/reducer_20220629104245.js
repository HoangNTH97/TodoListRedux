const initState = {
  filters: {
    search: "",
    status: "All",
    priorrity: [],
  },
  todoList: [
    {
      id: 1,
      name: "Learn React",
      completed: false,
      priorrity: "Medium",
    },
    {
      id: 2,
      name: "Learn Redux",
      completed: true,
      priorrity: "High",
    },
    {
      id: 3,
      name: "Learn JavaScript",
      completed: false,
      priorrity: "Low",
    },
  ],
};

const rootReducer = (state = initState, action) => {
  console.log(state, action);

  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    default:
      return state;
  }
};

export default rootReducer;
