import React from 'react';
import styles from './TasksCard.module.css';
import SearchBox from './TasksCardSearchBox';
import Tabs from './TasksCardTabs';
import TasksCardList from './TasksCardList';

interface TaskListProps {
	items: {
		id: number;
		title: string;
		isFinished: boolean;
	}[];
	onSearchTasks: (title: string) => void;
	onRemoveTask: (id: number) => void;
	onUpdateTaskTitle: (id: number, title: string) => void;
	onUpdateTaskStatus: (id: number) => void;
	currentTab: number;
	onUpdateSelectedTab: React.Dispatch<React.SetStateAction<number>>;
}

const TasksList = ({
	items,
	onSearchTasks,
	onRemoveTask,
	onUpdateTaskTitle,
	onUpdateTaskStatus,
	onUpdateSelectedTab,
	currentTab,
}: TaskListProps) => {
	const [query, setQuery] = React.useState('');

	return (
		<div className={styles.TasksCard}>
			<Tabs
				currentTab={currentTab}
				onUpdateSelectedTab={onUpdateSelectedTab}
				setQuery={setQuery}
			/>

			<SearchBox
				query={query}
				setQuery={setQuery}
				onSearchTasks={onSearchTasks}
			/>

			<TasksCardList
				items={items}
				onRemoveTask={onRemoveTask}
				onUpdateTaskTitle={onUpdateTaskTitle}
				onUpdateTaskStatus={onUpdateTaskStatus}
			/>
		</div>
	);
};

export default TasksList;
