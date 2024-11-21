<script lang="ts">
	import DigitInput from '$lib/components/DigitInput.svelte';
	import { cn } from '$lib/utils/helper';
	import { useOutsideClick } from '$lib/utils/useOutsideClick';
	import { validateNumber } from '$lib/validations/common';
	import { twoFA_Store, setActiveFieldIndex, setCode, TOTAL_DIGITS } from '../../stores/2FA_Store';

	const isInvalidCode = $derived($twoFA_Store.remainingDigits === 0 && !$twoFA_Store.isCodeValid);
	const secondLastIndex = TOTAL_DIGITS - 1;

	// Move focus to next input
	const moveFocus = (index: number) => {
		const inputs = document.querySelectorAll<HTMLInputElement>('#code-form input');

		if (inputs[index]) {
			inputs[index].focus();
			setActiveFieldIndex(index);
		}
	};

	// Handle backspace (move focus to previous field)
	const handleBackspace = (event: KeyboardEvent, index: number) => {
		if (event.key === 'Backspace' && index > 0) {
			const currentIndex =
				index === secondLastIndex && $twoFA_Store.code[secondLastIndex] !== ''
					? secondLastIndex
					: index - 1;

			setCode('', index);
			moveFocus(currentIndex);
		}
	};

	// Handle input change
	const handleInputChange = (event: Event, index: number) => {
		const input = event.target as HTMLInputElement;
		const value = input.value;
		const hasValue = value.length === 1;

		if (!validateNumber(value)) {
			// Clear the current input if it's not a digit
			setCode('', index);
			return;
		}

		setCode(value, index);

		if (hasValue && index < secondLastIndex) {
			moveFocus(index + 1);
		} else if (hasValue && index === secondLastIndex) {
			setActiveFieldIndex(-1);
		}
	};

	$effect(() => {
		window.alert(`Hello!
Please use the correct code "123456" to show the success UI.`);

		moveFocus(0);
	});
</script>

<div
	id="code-form"
	use:useOutsideClick={() => setActiveFieldIndex(-1)}
	class={cn('flex justify-between gap-2', {
		'animate-bounce-once': isInvalidCode
	})}
>
	{#each $twoFA_Store.code as _digit, index}
		<DigitInput
			invalid={isInvalidCode}
			focused={index === $twoFA_Store.activeFieldIndex}
			bind:value={$twoFA_Store.code[index]}
			onClick={() => moveFocus(index)}
			onInputChange={(event) => handleInputChange(event, index)}
			onKeyDown={(event) => handleBackspace(event, index)}
		/>

		{#if index === 2}
			<div></div>
		{/if}
	{/each}
</div>
