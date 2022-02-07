import React from 'react';
import Input from './Input';
import styles from './TodoList.module.css';

interface TaskListProps {
	items: {
		id: number;
		title: string;
		isFinished: boolean;
	}[];
	onRemoveTask: (id: number) => void;
	onUpdateTaskTitle: (id: number, title: string) => void;
	onUpdateTaskStatus: (id: number) => void;
	onSearchTasks: (title: string) => void;
}

const TodoList = ({
	items,
	onRemoveTask,
	onUpdateTaskTitle,
	onUpdateTaskStatus,
	onSearchTasks,
}: TaskListProps) => {
	const [updatedTask, setUpdatedTask] = React.useState('');
	const [showUpdateInput, setShowUpdateInput] = React.useState(false);
	const [selectedTaskId, setSelectedTaskId] = React.useState<number>();
	const [query, setQuery] = React.useState('');

	const updateTaskHandler = (
		taskId: number,
		task: string,
		updatedTask: string
	) => {
		setUpdatedTask(task);
		if (updatedTask.length === 0) return;

		onUpdateTaskTitle(taskId, updatedTask);
		setUpdatedTask('');
		setShowUpdateInput(false);
	};

	return (
		<div className={styles.TasksCard}>
			<div className={styles.SearchBox}>
				<input
					type="text"
					value={query}
					placeholder="Search Tasks"
					onChange={(e) => {
						setQuery(e.target.value);
						onSearchTasks(e.target.value.toLowerCase());
					}}
				/>
			</div>

			<ul className={styles.TasksList}>
				{items.map((item, index) => {
					return (
						<div key={index}>
							{/* React tracks the elements in the list in the child element. */}
							<li className={styles.TaskItem}>
								{showUpdateInput && selectedTaskId === item.id ? (
									<>
										<Input
											placeholder={item.title}
											value={updatedTask}
											onChangeHandler={setUpdatedTask}
										/>

										<button
											className={styles.TaskItemButton}
											onClick={() =>
												updateTaskHandler(item.id, item.title, updatedTask)
											}
										>
											Apply
										</button>
									</>
								) : (
									<>
										<div>
											<input
												id={'taskTitle-' + item.id}
												type="checkbox"
												onChange={() => onUpdateTaskStatus(item.id)}
											/>
											<label
												htmlFor={'taskTitle-' + item.id}
												style={
													item.isFinished
														? { textDecoration: 'line-through' }
														: {}
												}
											>
												{item.title}
											</label>
										</div>
										<span className={styles.TaskItemButtons}>
											<button
												className={styles.TaskItemButton}
												onClick={() => {
													setShowUpdateInput((prevValue) => !prevValue);
													setSelectedTaskId(item.id);
												}}
											>
												UPDATE
											</button>
											<button
												className={styles.TaskItemButton}
												onClick={() => onRemoveTask(item.id)}
											>
												DELETE
											</button>
										</span>
									</>
								)}
							</li>
						</div>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;
