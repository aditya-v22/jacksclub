import { LAST_INDEX } from '../../constants/2FA';
import { clearCode, setActiveFieldIndex, setCode } from '../../stores/2FA_Store';
import { moveFocus, moveFocusToFirstEmptyField } from './focusHandlers';

export const onBackspaceDown = (event: KeyboardEvent, index: number) => {
	event.preventDefault();
	setCode('', index);

	if (index > 0) {
		moveFocus(index - 1);
	}
};

export const onLeftArrowDown = (index: number) => {
	if (index > 0) {
		const currentIndex = index - 1;
		setActiveFieldIndex(currentIndex);
		moveFocus(currentIndex);
	}
};

export const onRightArrowDown = (code: string[], index: number) => {
	if (code[index]) {
		if (index < LAST_INDEX) {
			moveFocus(index + 1);
			return;
		}

		if (index === LAST_INDEX) {
			setActiveFieldIndex(LAST_INDEX);
			return;
		}
	}
};

export const onTabDown = (event: KeyboardEvent, code: string[], index: number) => {
	event.preventDefault();

	if (event.shiftKey) {
		if (index === 0) {
			const emptyFieldIndex = moveFocusToFirstEmptyField(code);

			if (emptyFieldIndex === -1) {
				moveFocus(LAST_INDEX);
			}
			return;
		}

		moveFocus(index - 1);
		return;
	}

	if (code[index]) {
		if (index === LAST_INDEX) {
			moveFocus(0);
			return;
		}

		moveFocus(index + 1);
	}
};

export const onEscapeDown = () => {
	const confirm = window.confirm('Are you sure you want to clear the code?');

	if (confirm) {
		clearCode();
		moveFocus(0);
	}
};

export const onDeleteDown = (code: string[], index: number) => {
	if (code[index]) {
		setCode('', index);

		if (index === LAST_INDEX) {
			setActiveFieldIndex(LAST_INDEX);
		}
	}
};
