<script lang="ts">
	import PaintableImage from './PaintableImage.svelte';
	import TabSelector from '../carousel/TabSelector.svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { Modal } from 'flowbite-svelte';

	let selectedValue: string = 'Image View';
	const options = [
		{ label: 'Image View', value: 2 },
		{ label: 'List View', value: 1 }
	];
	let openModal = $state(false);
</script>

<div class="h-100 w-100 bg-gray-200">
	<Tabs tabStyle="underline">
		<TabItem open title="Image View">
			<PaintableImage imageSrc="result_placeholder.png" enabled={true} />
		</TabItem>
		<TabItem title="List View">
			<p class="m-4">List View.</p>
		</TabItem>
	</Tabs>
</div>
<div onclick={() => (openModal = true)} class="h-100 w-100 mt-4 flex gap-4">
	<img class="h-100 w-100" src="result_placeholder.png" alt="hello" />
	<img class="h-100 w-100" src="result_placeholder.png" alt="hello" />
</div>
<Modal bind:open={openModal}><img src="result_placeholder.png" alt="hello" /></Modal>
