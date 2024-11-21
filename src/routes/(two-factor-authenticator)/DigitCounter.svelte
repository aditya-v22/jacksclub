<script lang="ts">
	import { cn } from '$lib/utils/helper';
	import { twoFA_Store } from '../../stores/2FA_Store';

	const remainingDigits = $derived($twoFA_Store.remainingDigits);
	const isValidCode = $derived($twoFA_Store.isCodeValid);
	const isInvalidCode = $derived(!$twoFA_Store.isCodeValid && $twoFA_Store.remainingDigits === 0);
</script>

<div
	class={cn(
		'bg-secondary-200/20 relative mt-12 flex w-full items-center justify-center rounded-xl px-6 py-4 text-lg font-semibold text-gray-500 transition-all',
		{
			'text-secondary-100': remainingDigits === 0,
			'animate-bounce-once': isInvalidCode
		}
	)}
>
	<div
		class={cn(
			'absolute inset-0 z-0 origin-right scale-x-0 rounded-xl transition-all duration-500',
			{
				'scale-x-100 bg-blue-500': isValidCode,
				'scale-x-100 bg-red-500 transition-none': isInvalidCode
			}
		)}
	></div>

	<span
		class={cn('z-10 transition-all', { 'duration-500': isValidCode, 'duration-0': !isValidCode })}
	>
		{#if remainingDigits}
			{remainingDigits} digits left
		{:else if isValidCode}
			Let's go!
		{:else}
			Wrong code!
		{/if}
	</span>
</div>
