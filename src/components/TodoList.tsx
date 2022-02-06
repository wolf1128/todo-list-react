import React from 'react';
import Input from './Input';
import styles from './TodoList.module.css';

interface TaskListProps {
	items: {
		id: number;
		title: string;
	}[];
	onRemoveTask: (id: number) => void;
	onUpdateTask: (id: number, title: string) => void;
}

const TodoList = (props: TaskListProps) => {
	const [updatedTask, setUpdatedTask] = React.useState('');
	const [showUpdateInput, setShowUpdateInput] = React.useState(false);
	const [selectedTaskId, setSelectedTaskId] = React.useState<number>();

	const updateTaskHandler = (
		taskId: number,
		task: string,
		updatedTask: string
	) => {
		setUpdatedTask(task);
		if (updatedTask.length === 0) return;

		props.onUpdateTask(taskId, updatedTask);
		setUpdatedTask('');
		setShowUpdateInput(false);
	};

	return (
		<div className={styles.TasksCard}>
			<ul className={styles.TasksList}>
				{props.items.map((item, index) => {
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
											Done
										</button>
									</>
								) : (
									<>
										<span>{item.title}</span>
										<span>
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
												onClick={() => props.onRemoveTask(item.id)}
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
