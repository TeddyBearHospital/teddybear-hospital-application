<script lang="ts">
	import Carousel from './Carousel.svelte';
	import Gallery from './Gallery.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { Tabs, TabItem } from 'flowbite-svelte';
	import { onMount, onDestroy } from 'svelte';

	let carouselUrls: string[] = $state([]);
	let originals: string[] = $state([]);
	let xrays: string[] = $state([]);
	let fetchInterval: NodeJS.Timeout;

	async function fetchCarouselUrls() {
		const res = await fetch(`${PUBLIC_BACKEND_URL}/carousel`);
		if (!res.ok) throw new Error('Failed to fetch carousel list');
		const json = await res.json();
		originals = json.originals;
		xrays = json.xrays;
	}
	onMount(() => {
		fetchCarouselUrls();
		fetchInterval = setInterval(fetchCarouselUrls, 10000);
	});
	onDestroy(() => {
		clearInterval(fetchInterval);
	});
</script>

<Tabs tabStyle="underline">
	<TabItem open title="Carousel">
		<Carousel originalImages={originals} xrayImages={xrays}></Carousel>
	</TabItem>
	<TabItem title="Gallery">
		<Gallery {originals} {xrays}></Gallery>
	</TabItem>
</Tabs>
