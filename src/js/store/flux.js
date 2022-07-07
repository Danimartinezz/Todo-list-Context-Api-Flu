const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: [
				"Go to MDC",
				"Make the project",
				"Eat Dinner"
			]
		},
		actions: {
			//This is an object and the keys are action we can 
			//trigger from COMPONENTS inside the PROVIDER
			todoList: (todo) => {
				const store = getStore();
				setStore({ list: [...store.list, todo]})
				return store.list
			},
			deleteTask: (id) => {
				const store = getStore();
				//Create a new array without the task corresponding to id
				setStore({ list: store.list.filter((item, index)=>{
					return index != id
				})
			})
				return store.list
			}
			
		}
	};
};

export default getState;





// addTask: (index, todo) => {
// 	//get the store
// 	const store = getStore();

// 	//we add the new todo
// 	store.list.push(todo)
	
// 	//print the list to see the change
// 	console.log(store.list)

// 	return (
// 		store.list
// 	)
// },
// removeTask: (todo) => {
// 	//get the store
// 	const store = getStore();

// 	// print the todo we are getting from home.js
// 	console.log("removeTask todo", todo)

// 	// logic to delete the todo 
// 	// task is every element in store.list and todo is the one printed 2 lines up
// 	function removeTodo(task) {
// 		return task != todo
// 	}

// 	//now we use the removeTodo function inside the filter method
// 	const filteredList = store.list.filter(removeTodo)

// 	// print the filteredList
// 	console.log("filteredList",filteredList)

// 	// print the store.list no changes yet
// 	console.log("store.list no changes yet",store.list)

// 	// we update the store list
// 	store.list = filteredList
	
// 	// print the store.list updated
// 	console.log("store.list",store.list)

// 	return (filteredList)
// }