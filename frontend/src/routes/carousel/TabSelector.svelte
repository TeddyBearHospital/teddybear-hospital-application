<script lang="ts">
	let { items, selectedValue = $bindable() } = $props();

	let box: HTMLDivElement;
	let tabs: HTMLLIElement[] = [];
	const handleClick = (idx: number, value: string) => () => {
		selectedValue = value;
		let item = tabs[idx];
		let offset = idx * item.offsetWidth;
		box.style.transform = `translateX(${offset}px)`;
	};
	const itemWidth = 10;
	const itemHeight = 10;
</script>

<ul>
	{#each items as item, i}
		<li
			bind:this={tabs[i]}
			class="w-{itemWidth} h-{itemHeight} box {selectedValue === item.value ? 'active' : ''}"
		>
			<span onclick={handleClick(i, item.value)}>{item.label}</span>
		</li>
	{/each}
	<div bind:this={box} class=" w-{itemWidth} h-{itemHeight} bg-blue-600"></div>
</ul>

<style>
	.box {
		margin-bottom: 10px;
		padding: 40px;
		border: 1px solid #dee2e6;
		border-radius: 0 0 0.5rem 0.5rem;
		border-top: 0;
	}
	ul {
		display: flex;
		flex-wrap: wrap;
		padding-left: 0;
		margin-bottom: 0;
		list-style: none;
		border-bottom: 1px solid #dee2e6;
	}
	li {
		margin-bottom: -1px;
	}

	span {
		border: 1px solid transparent;
		border-top-left-radius: 0.25rem;
		border-top-right-radius: 0.25rem;
		display: block;
		padding: 0.5rem 1rem;
		cursor: pointer;
	}

	span:hover {
		border-color: #e9ecef #e9ecef #dee2e6;
	}

	/* li.active > span {
		color: #01366b;
		background-color: #ce6161;
		border-color: #0861b9 #dee2e6 #fff;
	}
		*/
</style>
