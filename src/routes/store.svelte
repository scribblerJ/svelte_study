<script>
	import { onDestroy, setContext } from "svelte";
	import Nested from "../components/NestedForStore.svelte";
	setContext("name2", "개발자의 품격");

	// writable store: 쓰기 가능
	// readable store: 읽기 가능
	// derieved store: 기존 sotre로 새로운 store 생성

	import { count, elapsed, time, name, greeting } from "../stores/stores";
	// function updateCount() {
	// 	count.update((n) => n + 1);
	// }
	// const unsubscribe = count.subscribe((value) => {
	// 	alert(value);
	// });
	// onDestroy(unsubscribe);

	const formater = new Intl.DateTimeFormat("en", {
		hour12: true,
		hour: "numeric",
		minute: "2-digit",
		second: "2-digit",
	});
</script>

<main>
	<h1>1. store 기초</h1>
	<Nested />
	<!-- <button type="button" on:click={updateCount}>update count</button> -->
	<h1>2. readable+derieved => 시계 만들기</h1>
	<p>The time is {formater.format($time)}</p>
	<p>This page has been opened for {$elapsed} seconds</p>
	<h1>3. writable+derieved => 인사말 만들기</h1>
	<p>{$greeting}</p>
	<input type="text" bind:value={$name} />
</main>
