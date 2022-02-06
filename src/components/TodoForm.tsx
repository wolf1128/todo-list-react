import React from 'react';
import Input from './Input';
import './TodoForm.css';

type TodoFormProps = {
	onAddTask: (title: string) => void;
};

const TodoForm = ({ onAddTask }: TodoFormProps) => {
	const [newTask, setNewTask] = React.useState('');

	const addTaskHandler = (event: React.FormEvent) => {
		event.preventDefault();

		onAddTask(newTask);
		setNewTask('');
	};

	return (
		<form className="form" onSubmit={addTaskHandler}>
			<Input
				label={'New Task'}
				value={newTask.toLowerCase()}
				onChangeHandler={setNewTask}
			/>
			<button
				style={{ margin: '5px 0' }}
				type="submit"
				disabled={newTask.length === 0}
			>
				ADD
			</button>
		</form>
	);
};

export default TodoForm;
