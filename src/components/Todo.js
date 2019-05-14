import React, {useState} from 'react'

const todo = (props) => {
	const [todoName,setTodoName]=useState('')
	const [todoList,setTodoList]=useState([])
	// const [todoState, setTodoState] = useState({userInput:'', todoList:[]})

	const inputChangedHandler = (event) => {
		// setTodoState({
		// 	userInput:event.target.value,
		// 	todoList: todoState.todoList
		// })
		setTodoName(event.target.value)
	}

	const todoAddHandler = () => {
		// setTodoState({
		// 	userInput:todoState.userInput,
		// 	todoList:todoState.todoList.concat(todoState.userInput)
		// })
		setTodoList(todoList.concat(todoName))
	}

	return <React.Fragment>
		<input 
			type="text" 
			placeholder="Todo" 
			onChange={inputChangedHandler} 
			value={todoName}/>
		<button 
			type="button"
			onClick={todoAddHandler}>Add</button>
		<ul>
			{todoList.map(todo=>(
				<li key={todo}>{todo}</li>
			))}
		</ul>
	</React.Fragment>
	
}

export default todo