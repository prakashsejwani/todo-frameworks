
// constants
export const ADD_TODO = 'ADD_TODO'
export const MODIFY_TODO = 'MODIFY_TODO'

// actions
export const addTodo = todo => {
	return {
		type: ADD_TODO,
		todo
	}
}

export const modifyTodo = todo => {
	return {
		type: MODIFY_TODO,
		todo
	}
}