
export const initialState = {
    todos: [
        {
            item: "Learn about reducers",
            completed: false,
            id: 3892987589
        },
        {
            item: "Finish today's project",
            completed: false,
            id: Date.now()
        }
    ]
}

export const reducer = (state, action) => {
    switch (action.type) {
        //if our action.type is 'add_todo'; it creates a new todo)
        case 'ADD_TODO':
            const newTodo = {
                item: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                ...state,
                // /*new todo is added to our todos (updating our state) and 
                // we return a new state, which will re-render our app*/
                todos: [...state.todos, newTodo]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(todo => {
                    //action.payload passed in instead of itemId 
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        };
                    } else {
                        return todo;
                    }
                })
            }
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
            }
        default:
            return state;
    }
};


// /*HENRY'S SOLUTION:

// export const initialState = {
//     todoArray: [
//         {
//             item: "Learn about reducers",
//             completed: false,
//             id: 3892987589
//         },
//         {
//             item: "Other",
//             completed: false,
//             id: Date.now()
//         }
//     ]
// };

// //reducer takes 2 parameters. it tracks shared state of our app w/in a
// //single structure and updates state as user interacts w/ our browser.
// export function reducer(state, action) {
//     //switch acts as an if/else tree
//     console.log('action', action);
//     switch (action.type) {
//         case "ADD_TODO":
//             return {
//                 ...state,
//                 todoArray: [...state.todos, {
//                     item: action.payload,
//                     completed: false,
//                     id: Date.now()
//                 }]
//             };
//         case "TOGGLE_TODO":
//             return {
//                 ...state,
//                 todoArray: state.todoArray.map(todo => {
//                     if(todo.id === action.payload) {
//                         return {
//                             ...todo,
//                             completed: !todo.completed
//                         };
//                     } else {
//                         return todo;
//                     }
//                 })
//             };
//         case 'CLEAR_COMPLETED':
//             return {
//                 ...state,
//                 item: action.payload,
//                 todoArray: state.todoArray.filter(todo => !todo.completed)
//             }
//         default:
//             return state;
//     }
// }

// * /