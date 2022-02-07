import React, { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
	const [tasks, setTasks] = useState([
		// single source of truth
		{
			id: Number((new Date().getTime() * Math.random() * 10).toFixed(0)),
			title: 'Finish the javascript course',
			isFinished: false,
		},
		{
			id: Number((new Date().getTime() * Math.random() * 10).toFixed(0)),
			title: 'Finish the python course',
			isFinished: false,
		},
		{
			id: Number((new Date().getTime() * Math.random() * 10).toFixed(0)),
			title: 'Finish the React.js course',
			isFinished: false,
		},
		{
			id: Number((new Date().getTime() * Math.random() * 10).toFixed(0)),
			title: 'Finish the styled-components course',
			isFinished: false,
		},
	]);
	const [filteredTasks, setFilteredTasks] = useState<typeof tasks>([]);

	const addTaskHandler = (title: string) => {
		setTasks((prevTasks) => [
			...prevTasks,
			{
				id: Number((new Date().getTime() + Math.random() * 10).toFixed(0)),
				title,
				isFinished: false,
			},
		]);
	};

	const removeTaskHandler = (todoId: number) => {
		setTasks((prevTasks) =>
			// prevTasks.filter((todo) => todo !== prevTasks[itemIndex])
			prevTasks.filter((todo) => todo.id !== todoId)
		);
	};

	const updateTasTitlekHandler = (todoId: number, updatedTitle: string) => {
		setTasks((prevTasks) =>
			prevTasks.map((todo) =>
				todo.id === todoId
					? { id: todo.id, title: updatedTitle, isFinished: false }
					: { id: todo.id, title: todo.title, isFinished: false }
			)
		);
	};

	const updateTaskStatusHandler = (todoId: number) => {
		setTasks((prevTasks) =>
			prevTasks.map((todo) => {
				if (todo.id === todoId) {
					return {
						id: todo.id,
						title: todo.title,
						isFinished: !todo.isFinished,
					};
				}

				return todo;
			})
		);
	};

	React.useEffect(() => {
		// NOTE: We always want fresh data for filtered ones.
		setFilteredTasks(tasks);
	}, [tasks]);

	const searchTasksHandler = (title: string) => {
		setFilteredTasks(
			tasks.filter((task) => {
				if (title.length > 0) return task.title.toLowerCase().match(title);

				return task;
			})
		);
	};

	return (
		<div className="container">
			<TodoForm onAddTask={addTaskHandler} />
			<TodoList
				items={filteredTasks}
				onUpdateTaskTitle={updateTasTitlekHandler}
				onUpdateTaskStatus={updateTaskStatusHandler}
				onRemoveTask={removeTaskHandler}
				onSearchTasks={searchTasksHandler}
			/>
		</div>
	);
}

export default App;
