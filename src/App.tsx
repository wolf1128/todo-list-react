import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
	const [tasks, setTasks] = useState([
		// single source of truth
		{ id: Number((new Date().getTime() + Math.random() * 10).toFixed(0)), title: 'Finish the javascript course' },
		{ id: Number((new Date().getTime() + Math.random() * 10).toFixed(0)), title: 'Finish the python course' },
		{ id: Number((new Date().getTime() + Math.random() * 10).toFixed(0)), title: 'Finish the React.js course' },
		{ id: Number((new Date().getTime() + Math.random() * 10).toFixed(0)), title: 'Finish the styled-components course' },
	]);

	const addTaskHandler = (title: string) => {
		setTasks((prevTasks) => [...prevTasks, { id: Number((new Date().getTime() + Math.random() * 10).toFixed(0)), title }]);
	};

	const removeTaskHandler = (todoId: number) => {
		setTasks((prevTasks) =>
			// prevTasks.filter((todo) => todo !== prevTasks[itemIndex])
			prevTasks.filter((todo) => todo.id !== todoId)
		);
	};

	const updateTaskHandler = (todoId: number, updatedTitle: string) => {
		setTasks((prevTasks) =>
			prevTasks.map((todo) =>
				todo.id === todoId
					? { id: todo.id, title: updatedTitle }
					: { id: todo.id, title: todo.title }
			)
		);
	};

	React.useEffect(() => {
		console.log(tasks);
	}, [tasks]);

	return (
		<div className="container">
			<TodoForm onAddTask={addTaskHandler} />
			<TodoList
				items={tasks}
				onUpdateTask={updateTaskHandler}
				onRemoveTask={removeTaskHandler}
			/>
		</div>
	);
}

export default App;
