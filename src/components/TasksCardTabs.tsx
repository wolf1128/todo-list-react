import React from 'react';
import styles from './TasksCardTabs.module.css';

interface TasksCardTabsProps {
	onUpdateSelectedTab: React.Dispatch<React.SetStateAction<number>>;
	currentTab: number;
	setQuery: React.Dispatch<React.SetStateAction<string>>;
}

const TasksCardTabs = ({
	onUpdateSelectedTab,
	currentTab,
	setQuery,
}: TasksCardTabsProps) => {
	return (
		<div className={styles.Tabs}>
			<button
				style={currentTab === 0 ? { backgroundColor: '#ccc' } : {}}
				onClick={() => {
					onUpdateSelectedTab(0);
					setQuery('');
				}}
			>
				ALL
			</button>
			<button
				style={currentTab === 1 ? { backgroundColor: '#ccc' } : {}}
				onClick={() => {
					onUpdateSelectedTab(1);
					setQuery('');
				}}
			>
				COMPLETED
			</button>
			<button
				style={currentTab === 2 ? { backgroundColor: '#ccc' } : {}}
				onClick={() => {
					onUpdateSelectedTab(2);
					setQuery('');
				}}
			>
				TODO
			</button>
		</div>
	);
};

export default TasksCardTabs;
