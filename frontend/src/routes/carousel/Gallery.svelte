<script lang="ts">
	import { Modal } from 'flowbite-svelte';
	let { originals, xrays }: { originals: string[]; xrays: string[] } = $props();
	let showOriginals = $state(true);
	let modalOpen = $state(false);
	let selected: number = $state(0);
</script>

<div class="mb-4">
	<label class="mr-4">
		Show Originals
		<input type="checkbox" bind:checked={showOriginals} />
	</label>
</div>

{#snippet imagePair(i: number)}
	<button
		class="flex-rows flex cursor-pointer gap-2 overflow-hidden rounded-lg border"
		onclick={() => {
			selected = i;
			modalOpen = true;
		}}
	>
		<img src={xrays[i]} alt="X-Ray {i}" class="h-100 w-1/2 object-contain" />
		{#if showOriginals}
			<img src={originals[i]} alt="Original {i}" class="h-100 w-1/2 object-contain" />
		{/if}
	</button>
{/snippet}
<div class="grid grid-cols-3 gap-4">
	{#each xrays as url, i}
		{@render imagePair(i)}
	{/each}
</div>
<Modal bind:open={modalOpen}>
	<div class="flex-rows flex cursor-pointer gap-4 rounded-lg border p-2">
		<img src={xrays[selected]} alt="X-Ray {selected}" class="h-1/1 w-1/2 object-contain p-2" />
		{#if showOriginals}
			<img
				src={originals[selected]}
				alt="Original {selected}"
				class="h-1/1 w-1/2 object-contain p-2"
			/>
		{/if}
	</div>
</Modal>
