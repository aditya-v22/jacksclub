<script lang="ts">
	import { Lock, Unlock } from 'lucide-svelte';
	import { twoFA_Store } from '../../modules/auth/stores/2FA_Store';
	import { cn } from '$lib';

	const isValidCode = $derived($twoFA_Store.isCodeValid);
	const isInvalidCode = $derived(!$twoFA_Store.isCodeValid && $twoFA_Store.remainingDigits === 0);
</script>

<div class="flex w-full justify-center">
	<div
		class={cn(
			'relative flex h-28 w-28 items-center justify-center rounded-full bg-primary-100/40 transition-all duration-1000',
			{
				'bg-green-100': isValidCode,
				'animate-scale-and-reset bg-red-100': isInvalidCode
			}
		)}
	>
		<div
			class={cn('absolute inset-0 z-0 h-full w-full rounded-full bg-transparent transition-all', {
				'animate-ping-once-success': isValidCode,
				'animate-ping-once-error': isInvalidCode
			})}
		></div>

		<span class="z-10">
			{#if isValidCode}
				<Unlock size={40} class="text-green-500" />
			{:else}
				<Lock size={40} class={cn('text-sky-500', { 'text-red-500': isInvalidCode })} />
			{/if}
		</span>
	</div>
</div>
