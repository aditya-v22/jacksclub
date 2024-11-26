import { setActiveFieldIndex } from '../../stores/2FA_Store';

export const moveFocus = (index: number) => {
	const inputs = document.querySelectorAll<HTMLInputElement>('#code-form input');
	if (inputs[index]) {
		inputs[index].focus();
		setActiveFieldIndex(index);
	}
};

export const moveFocusToFirstEmptyField = (code: string[]): number => {
	const firstEmptyIndex = code.findIndex((digit) => digit === '');

	if (firstEmptyIndex !== -1) {
		moveFocus(firstEmptyIndex);
		return firstEmptyIndex;
	}

	return -1;
};
