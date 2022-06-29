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
  /**
   {
    type: "todoList/addTodo",
    payload: {
      id: 3,
      name: "Learn JavaScript",
      completed: false,
      priorrity: "Low",
    }
   }
   */

  switch (action.type) {
  }
};
