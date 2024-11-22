import { writable } from 'svelte/store';

interface CodeVerificationState {
	code: string[];
	activeFieldIndex: number;
	isCodeValid: boolean;
	remainingDigits: number;
}

const defaultState: CodeVerificationState = {
	code: Array(6).fill(''), // 6 empty code fields
	activeFieldIndex: 0,
	isCodeValid: false,
	remainingDigits: 6
};

export const twoFA_Store = writable<CodeVerificationState>(defaultState);

export const setCode = (value: string, index: number) => {
	twoFA_Store.update((state) => {
		const code = [...state.code.slice(0, index), value, ...state.code.slice(index + 1)];
		const isCodeValid = code.join('') === '123456';
		const remainingDigits = code.filter((digit) => digit === '').length;

		return {
			...state,
			code,
			isCodeValid,
			remainingDigits
		};
	});
};

export const setActiveFieldIndex = (index: number) => {
	twoFA_Store.update((state) => ({ ...state, activeFieldIndex: index }));
};
