import React from 'react';
import styles from './TasksCardSearchBox.module.css';

interface TasksCardSearchBoxProps {
	onSearchTasks: (title: string) => void;
}

const TasksCardSearchBox = ({ onSearchTasks }: TasksCardSearchBoxProps) => {
	const [query, setQuery] = React.useState('');

	return (
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
	);
};

export default TasksCardSearchBox;
