<script>
	import { onMount, onDestroy, beforeUpdate, afterUpdate } from "svelte";
	// onMount: Dom 렌더링 완료 후 호출
	// onDestroy: Component 빠져나갈 때 호출
	// berforeUpdate: Dom elemet 갱신 직전
	// afterUpdate: Dom elemet 갱신 직후

	onMount(() => {
		alert("onMount");
	});

	let seconds = 0;
	// let interval = window.setInterval(() => {
	// 	seconds = seconds + 1;
	// }, 1000);
	// onDestroy(() => {
	// 	window.clearInterval(interval); // 메모리 관리를 위해 클리어
	// });

	let count = 0;
	function addCount() {
		count = count + 1;
	}
	beforeUpdate(() => {
		console.log("beforeUpdate");
	});
	afterUpdate(() => {
		console.log("afterUpdate");
	});
</script>

<main>
	<h1>1. onMount</h1>
	<p>hello 개발자의 품격</p>
	<h1>2. onDestroy</h1>
	<p>페이지에 머문 시간: {seconds}초</p>

	<h1>3. berforeUpdate</h1>
	<button type="button" on:click={addCount}>Add Count: {count}</button>
	<h1>4. afterUpdate</h1>
</main>
