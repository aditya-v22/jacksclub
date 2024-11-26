import { validateSingleNumber } from '$lib/validations';
import { keyboardKeys } from '../../constants/keyboardKeys';
import { LAST_INDEX } from '../../modules/auth/constants/2FA';
import { SIX_DIGIT_CODE_REGEX } from '../../modules/auth/constants/regex';
import { setActiveFieldIndex, setCode, twoFA_Store } from '../../modules/auth/stores/2FA_Store';
import {
	calculateRemainingDigits,
	moveFocus,
	moveFocusToFirstEmptyField,
	validate2FA_Code,
	onBackspaceDown,
	onDeleteDown,
	onEscapeDown,
	onLeftArrowDown,
	onRightArrowDown,
	onTabDown
} from '../../modules/auth/utils/2FA';

export const handleInputChange = (event: Event, code: string[], index: number) => {
	const input = event.target as HTMLInputElement;
	const value = input.value;
	const hasValue = value.length === 1;

	if (!hasValue) {
		return;
	}

	if (!validateSingleNumber(value)) {
		// Clear the current input if it's not a digit
		setCode('', index);
		return;
	}

	setCode(value, index);

	if (hasValue && index < LAST_INDEX) {
		const emptyFieldIndex = moveFocusToFirstEmptyField(code);
		if (emptyFieldIndex === -1) {
			moveFocus(index + 1);
		}
	} else if (hasValue && index === LAST_INDEX) {
		setActiveFieldIndex(-1);
	}
};

export const handleCodePaste = (event: ClipboardEvent) => {
	event.preventDefault();

	const pastedData = (event.clipboardData?.getData('text') || '').trim();

	// Validate if the pasted data length matches the expected code length and numeric characters
	if (!SIX_DIGIT_CODE_REGEX.test(pastedData)) {
		alert('Please enter a valid 6-digit numeric code.\nPasted data: ' + pastedData);
		return;
	}

	// Update the store with each character from the pasted string
	twoFA_Store.update((state) => {
		const newCode = pastedData.split('');

		return {
			...state,
			code: newCode,
			isCodeValid: validate2FA_Code(newCode),
			remainingDigits: calculateRemainingDigits(newCode)
		};
	});

	moveFocus(LAST_INDEX);
	setActiveFieldIndex(-1);
};

export const handleKeydown = (event: KeyboardEvent, code: string[], index: number) => {
	const key = event.key;
	const { Arrow, Backspace, Tab, Delete, Esc } = keyboardKeys;

	switch (key) {
		case Backspace:
			onBackspaceDown(event, index);
			break;

		case Arrow.Left:
			onLeftArrowDown(index);
			break;

		case Arrow.Right:
			onRightArrowDown(code, index);
			break;

		case Tab:
			onTabDown(event, code, index);
			break;

		case Esc:
			onEscapeDown();
			break;

		case Delete:
			onDeleteDown(code, index);
			break;

		default:
			break;
	}
};

export const handleInputClick = (code: string[], index: number) => {
	// Focus clicked field if it's not empty
	if (code[index]) {
		moveFocus(index);
	} else {
		moveFocusToFirstEmptyField(code);
	}
};
