<script>
	import Nested from "../components/Nested.svelte";

	let name = "개발자의 품격";
	let src = "data:image/png;base64,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";
	let htmlName = "<span style='color:red;'>개발자의 품격</span>";

	let count = 0;
	function increaseCOunt() {
		count = count + 1;
	}
	$: doubledCount = count * 2;
	$: if (count > 5) {
		alert("Count는 5보다 클 수 없습니다.");
		count = 5;
	}

	let arrData = [
		{ username: "홍길동", city: "서울" },
		{ username: "철수", city: "부산" },
		{ username: "영희", city: "제주" },
	];
</script>

<main>
	<h1>1. 변수 사용법</h1>
	<!-- 변수 기본 사용 -->
	<p>Hello {name}</p>
	<!-- 동명 변수는 바로 attrbute로 적용해줌 -->
	<img {src} alt="로고" />
	<!-- @html 붙이면 변수 내용을 html로 인식 -->
	<p>Hello {@html htmlName}</p>

	<h1>2. 함수 사용법</h1>
	<!-- 함수 기본 사용 -->
	<button type="button" on:click={increaseCOunt}>Count</button>
	<div>Count: {count}</div>
	<!-- $: 자동으로 watching?해서 해당시 바로 적용해줌 -->
	<div>Doubled count: {doubledCount}</div>

	<h1>3. 본문내 script사용법</h1>
	<!-- 본문에서 조건문 사용 -->
	{#if count > 3}
		<div>count는 3보다 크다</div>
	{:else if count == 3}
		<div>count는 3이다</div>
	{:else}
		<div>count는 3보다 작다</div>
	{/if}
	<!-- 본문에서 반복문 사용 -->
	<table>
		{#each arrData as { username, city }, i}
			<tr>
				<td>{i}</td>
				<td>{username}</td>
				<td>{city}</td>
			</tr>
		{/each}
	</table>

	<h1>4. 외부 객체 사용</h1>
	<!-- import 기본 사용 -->
	<Nested />
	<!-- export 기본 사용 -->
	<Nested {name} />
</main>
