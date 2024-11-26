import { SINGLE_NUMBER_REGEX } from '../../constants/regex';

/**
 * Checks if a given string is a valid number of length one.
 *
 * @param value - The value to validate.
 * @returns Whether the given string is a valid number.
 */
export const validateSingleNumber = (value: string) => {
	return SINGLE_NUMBER_REGEX.test(value);
};
