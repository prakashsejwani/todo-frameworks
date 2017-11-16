
// constants
export const ADD_TODO = 'ADD_TODO'

// actions

export const addTodo = todo => {
	return {
		type: ADD_TODO,
		todo
	}
}