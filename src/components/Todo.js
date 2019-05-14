import React, {useState, useEffect} from 'react'
import axios from 'axios'

const todo = (props) => {
	const [todoName,setTodoName]=useState('')
	const [todoList,setTodoList]=useState([])
	// const [todoState, setTodoState] = useState({userInput:'', todoList:[]})

	useEffect(()=>{
		axios.get('https://reactjs-hooks.firebaseio.com/todos.json')
			.then(result => {
				console.log(result)
				const todosData = result.data
				const todos = []
				for(const key in todosData){
					todos.push({id:key, name:todosData[key].name})
				}
				setTodoList(todos)
		})

		return () => {
			console.log('Cleanup')
		}
	}, [])


	const mouseMoveHandler = event => {
		console.log(event.clientX, event.clientY)
	}

	useEffect(()=>{
		document.addEventListener('mousemove', mouseMoveHandler )
		return () => {
			document.removeEventListener('mousemove', mouseMoveHandler)
		}
	}, [])

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
		axios.post('https://reactjs-hooks.firebaseio.com/todos.json', {name:todoName})
			.then(res=>{
				console.log(res)
			})
			.catch(err =>{
				console.log(err)
			})
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
				<li key={todo.id}>{todo.name}</li>
			))}
		</ul>
	</React.Fragment>
	
}

export default todo