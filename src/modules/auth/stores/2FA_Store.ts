import { writable } from 'svelte/store';
import { calculateRemainingDigits, validate2FA_Code } from '../utils/2FA/helpers';

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
		const newCode = [...state.code];
		newCode[index] = value;

		return {
			...state,
			code: newCode,
			isCodeValid: validate2FA_Code(newCode),
			remainingDigits: calculateRemainingDigits(newCode)
		};
	});
};

export const setActiveFieldIndex = (index: number) => {
	twoFA_Store.update((state) => ({ ...state, activeFieldIndex: index }));
};

export const clearCode = () => {
	twoFA_Store.update((state) => ({
		...state,
		code: Array(6).fill(''),
		activeFieldIndex: 0,
		isCodeValid: false,
		remainingDigits: 6
	}));
};
