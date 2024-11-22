<script lang="ts" module>
	export interface DigitInputProps {
		value: string;
		focused: boolean;
		invalid?: boolean;
		onClick: (e: Event) => void;
		onInputChange: (e: Event) => void;
		onKeyDown: (e: KeyboardEvent) => void;
	}
</script>

<script lang="ts">
	import { cn } from '$lib';

	let {
		onClick,
		onInputChange,
		onKeyDown,
		focused,
		invalid,
		value = $bindable('')
	}: DigitInputProps = $props();

	const isEmpty = $derived(value === '');
</script>

<div
	role="presentation"
	onclick={onClick}
	class={cn(
		'relative h-[72px] w-14 cursor-text overflow-hidden rounded-lg border-2 border-gray-300 bg-white px-3.5 py-3.5',
		{
			'border-sky-500': focused || !isEmpty,
			'border-red-400 bg-red-50': invalid
		}
	)}
>
	<input
		type="text"
		maxlength="1"
		bind:value
		oninput={onInputChange}
		onkeydown={onKeyDown}
		class={cn(
			'absolute h-10 w-6 bg-inherit text-center text-4xl text-sky-500 caret-transparent outline-none transition-all duration-300',
			{
				'-top-14': isEmpty,
				'top-4': !isEmpty,
				'text-red-400': invalid
			}
		)}
	/>

	<hr
		class={cn('absolute left-3 right-3 h-[3px] bg-sky-500 transition-all duration-300', {
			'bottom-3': focused,
			'-bottom-1': !focused,
			'bg-red-400': invalid
		})}
	/>
</div>
