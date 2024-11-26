<script lang="ts">
  import CodeForm from './CodeForm.svelte';
  import DigitCounter from './DigitCounter.svelte';
  import Lock from './Lock.svelte';
</script>

<div class="min-w-screen flex min-h-screen items-center justify-center bg-transparent">
  <div class="box-s m-8 min-w-[550px] rounded-3xl bg-white p-12 shadow-card">
    <Lock />

    <div class="mb-14 mt-4 text-center">
      <h1 class="text-4xl font-semibold text-dark">Easy peasy</h1>
      <p class="mt-5 font-medium text-secondary-200">
        Enter 6-digit code from your two factor authenticator APP.
      </p>
    </div>

    <CodeForm />
    <DigitCounter />
  </div>
</div>
