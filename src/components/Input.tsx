import React, { useState } from 'react';
import './Input.css';

interface InputProps {
	label: string;
	value: string;
	placeholder: string;
	onChangeHandler: React.Dispatch<React.SetStateAction<string>>;
}

const Input = (props: InputProps) => {
	const [invalid, setInvalid] = useState(false);

	const inputBluredHandler = () => {
		setInvalid(props.value.length === 0 ? true : false);
	};

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		props.onChangeHandler(event.target.value);
		setInvalid(false);
	};

	return (
		<div className="inputArea">
			<label htmlFor="task">{props.label}</label>
			<input
				style={invalid ? { borderColor: 'red' } : {}}
				type="text"
				id="task"
				value={props.value}
				placeholder={props.placeholder}
				onChange={changeHandler}
				onBlur={inputBluredHandler}
			/>
			{/* two way data binding */}
			{invalid ? (
				<small style={{ color: 'red', margin: '0 3px' }}>
					Please fill the input!
				</small>
			) : (
				''
			)}
		</div>
	);
};

Input.defaultProps = {
	label: '',
	placeholder: '',
}

export default Input;
