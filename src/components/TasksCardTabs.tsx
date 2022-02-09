import React from 'react';
import styles from './TasksCardTabs.module.css';

interface TasksCardTabsProps {
	onUpdateSelectedTab: React.Dispatch<React.SetStateAction<number>>;
	currentTab: number;
}

const TasksCardTabs = ({ onUpdateSelectedTab, currentTab }: TasksCardTabsProps) => {
	return (
		<div className={styles.Tabs}>
			<button
				style={currentTab === 0 ? { backgroundColor: '#ccc' } : {}}
				onClick={() => onUpdateSelectedTab(0)}
			>
				ALL
			</button>
			<button
				style={currentTab === 1 ? { backgroundColor: '#ccc' } : {}}
				onClick={() => onUpdateSelectedTab(1)}
			>
				COMPLETED
			</button>
			<button
				style={currentTab === 2 ? { backgroundColor: '#ccc' } : {}}
				onClick={() => onUpdateSelectedTab(2)}
			>
				TODO
			</button>
		</div>
	);
};

export default TasksCardTabs;
