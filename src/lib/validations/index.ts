import { NUMBER_REGEX } from '../../constants/regex';

/**
 * Checks if a given string is a valid number.
 *
 * @param value - The value to validate.
 * @returns Whether the given string is a valid number.
 */
export const validateNumber = (value: string) => {
	return NUMBER_REGEX.test(value);
};
