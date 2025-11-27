<script lang="ts">
	import PaintableImage from './PaintableImage.svelte';
	import TabSelector from '../carousel/TabSelector.svelte';
	import { Tabs, TabItem } from 'flowbite-svelte';

	let selectedValue: string = 'Image View';
	const options = [
		{ label: 'Image View', value: 2 },
		{ label: 'List View', value: 1 }
	];
</script>

<div class="h-100 w-100 bg-gray-200">
	<Tabs tabStyle="underline">
		<TabItem open title="Image View">
			<PaintableImage imageSrc="result_placeholder.png" />
		</TabItem>
		<TabItem title="List View">
			<p class="m-4">List View.</p>
		</TabItem>
	</Tabs>
</div>
