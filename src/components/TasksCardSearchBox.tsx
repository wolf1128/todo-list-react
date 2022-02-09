import React from 'react';
import styles from './TasksCardSearchBox.module.css';

interface TasksCardSearchBoxProps {
	query: string;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
	onSearchTasks: (title: string) => void;
}

const TasksCardSearchBox = ({
	query,
	setQuery,
	onSearchTasks,
}: TasksCardSearchBoxProps) => {
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
