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
  ],
};

const rootReducer = (state = initState, action) => {};
