<script lang="ts">
	import CodeForm from './CodeForm.svelte';
	import DigitCounter from './DigitCounter.svelte';
	import Lock from './Lock.svelte';
</script>

<div class="min-w-screen flex min-h-screen items-center justify-center bg-transparent">
	<div class="box-s shadow-card m-8 min-w-[550px] rounded-3xl bg-white p-12">
		<Lock />

		<div class="mb-14 mt-4 text-center">
			<h1 class="text-dark text-4xl font-semibold">Easy peasy</h1>
			<p class="text-secondary-200 mt-5 font-medium">
				Enter 6-digit code from your two factor authenticator APP.
			</p>
		</div>

		<CodeForm />
		<DigitCounter />
	</div>
</div>
