<script lang="ts">
	let { originals, xrays }: { originals: string[]; xrays: string[] } = $props();
	let showOriginals = $state(true);
</script>

<div class="mb-4">
	<label class="mr-4">
		Show Originals
		<input type="checkbox" bind:checked={showOriginals} />
	</label>
</div>
<div class="grid grid-cols-3 gap-4">
	{#each xrays as url, i}
		<div class="wrap-content flex-rows flex border p-2">
			<img src={url} alt="Gallery Image" class="h-auto w-full" />
			{#if showOriginals}
				<img src={originals[i]} alt="Original Image" class="mt-2 h-auto w-full" />
			{/if}
		</div>
	{/each}
</div>
