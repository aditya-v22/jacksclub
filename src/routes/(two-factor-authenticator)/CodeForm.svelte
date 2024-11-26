<script lang="ts">
	import { cn } from '$lib';
	import { useOutsideClick } from '$lib/actions/useOutsideClick';
	import DigitInput from '../../modules/auth/components/DigitInput.svelte';
	import { twoFA_Store, setActiveFieldIndex } from '../../modules/auth/stores/2FA_Store';
	import { moveFocus } from '../../modules/auth/utils/2FA';
	import {
		handleCodePaste,
		handleInputChange,
		handleInputClick,
		handleKeydown
	} from './codeInputHandlers';

	const code = $derived($twoFA_Store.code);
	const activeFieldIndex = $derived($twoFA_Store.activeFieldIndex);
	const isInvalidCode = $derived($twoFA_Store.remainingDigits === 0 && !$twoFA_Store.isCodeValid);

	$effect(() => {
		window.alert(`Hello!\nPlease use the correct code "123456" to see the success UI.`);

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
	{#each code as _digit, index}
		<DigitInput
			invalid={isInvalidCode}
			focused={index === activeFieldIndex}
			bind:value={$twoFA_Store.code[index]}
			onClick={() => handleInputClick(code, index)}
			onInputChange={(event) => handleInputChange(event, code, index)}
			onKeyDown={(event) => handleKeydown(event, code, index)}
			onPaste={handleCodePaste}
		/>

		{#if index === 2}
			<div></div>
		{/if}
	{/each}
</div>
