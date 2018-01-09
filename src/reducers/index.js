import { ADD_REMINDER } from '../constants';

const reminder = (action) => {
	return {
		text: action.text,
		id: Math.random()
	}
}

const reminders = ( state=[], action ) => {
	let reminder = null;
	switch(action.type) {
		case ADD_REMINDER:
			reminder = [...state, reminder(action)];
			return reminder;
		default:
			return state;
	}
}

export default reminders;