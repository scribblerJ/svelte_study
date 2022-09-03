<script>
	import { fade, blur, fly, slide, scale, draw, crossfade } from "svelte/transition";

	let fadeVisible = true;
	let flyVisible = true;
	let slideVisible = true;

	let flyStatus = "wating...";
	let arr = [...Array(10).keys()];
</script>

<main>
	<h1>Trasition 종류</h1>
	<h1>1. fade</h1>
	<input type="checkbox" bind:checked={fadeVisible} /> visible
	{#if fadeVisible}
		<p transition:fade>Fades in and out</p>
	{/if}
	<h1>2. fly</h1>
	<input type="checkbox" bind:checked={flyVisible} /> visible
	<p>flyStatus: {flyStatus}</p>
	{#if flyVisible}
		<p transition:fly={{ y: 20, duration: 1000 }} on:introstart={() => (flyStatus = "intro started")} on:introend={() => (flyStatus = "intro ended")} on:outrostart={() => (flyStatus = "outro started")} on:outroend={() => (flyStatus = "outro ended")}>fly in and out</p>
	{/if}

	<h1>3. slide</h1>
	<input type="checkbox" bind:checked={slideVisible} /> visible
	{#if slideVisible}
		{#each arr as a}
			<li transition:slide={{ duration: 1000 }}>{a}</li>
		{/each}
	{/if}

	<!-- <h1>4. blur</h1>
	<p transition:blur={{ delay: 100, duration: 1000, opacity: 20 }}>blur</p>
    <h1>4. scale</h1>
    <p transition:scale={{ delay: 100, duration: 1000 }}>scale</p>
    <h1>4. crossfade</h1>
    <p transition:draw={{ delay: 100, duration: 1000, speed: 20 }}>draw</p>
    <h1>4. draw</h1>
	<p transition:crossfade>crossfade</p> -->
</main>
