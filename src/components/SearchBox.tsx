import React from 'react';
import styles from './SearchBox.module.css';

interface SearchBoxProps {
	onSearchTasks: (title: string) => void;
}

const SearchBox = ({ onSearchTasks }: SearchBoxProps) => {
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

export default SearchBox;
