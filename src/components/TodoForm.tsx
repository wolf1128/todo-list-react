import React from 'react';
import Input from './Input';
import styles from './TodoForm.module.css';

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
		<form className={styles.Form} onSubmit={addTaskHandler}>
			<Input
				label={'New Task'}
				value={newTask.toLowerCase()}
				onChangeHandler={setNewTask}
			/>
			<button
				className={styles.Button}
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
