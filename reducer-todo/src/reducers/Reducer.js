
export const initialState = {
    todos: [
        {
            item: "Learn about reducers",
            completed: false,
            id: 3892987589
        },
        {
            item: "Other",
            completed: false,
            id: Date.now()
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        //if our action.type is 'add_todo', we'll create a new todo
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                ...state,
                /*new todo is added to our todos (updating our state) and 
                we return a new state, which will re-render our app*/
                todos: [...state.todos, newTodo]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(item => {
                    //action.payload passed in instead of itemId (see App line 21)
                    if (action.payload === item.id) {
                        return {
                            ...state,
                            todos: state.todos.filter(item => !item.completed)
                        };
                    }
                    return item;
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                item: action.payload,
                todos: action.payload
            }
        default:
            return state;
    }
};

