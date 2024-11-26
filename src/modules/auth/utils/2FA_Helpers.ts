export const validate2FA_Code = (code: string[]) => {
	return code.join('') === '123456';
};

export const calculateRemainingDigits = (code: string[]) => {
	return code.filter((digit) => digit === '').length;
};
