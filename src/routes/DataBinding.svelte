<script>
	let name = "개발자의 품격";
	let yes = true;
	let options = [
		{ v: 1, t: "서울" },
		{ v: 2, t: "부산" },
		{ v: 3, t: "제주" },
	];
	let selectedOption = "";
</script>

<main>
	<h1>1. 데이터 바인딩 사용법</h1>
	<!-- 데이터 바인딩 기초 -->
	<input type="text" bind:value={name} />
	<p>Hello {name}</p>

	<!-- 데이터 바인딩 응용(조건문) -->
	<label><input type="checkbox" bind:checked={yes} /> 체크박스 테스트</label>
	{#if yes}
		<p>Yes</p>
	{:else}
		<p>No</p>
	{/if}

	<!-- 데이터 바인딩 응용(each문) -->
	<select bind:value={selectedOption}>
		{#each options as opt}
			<option value={opt.v}>{opt.t}</option>
		{/each}
	</select>
	{#if selectedOption != ""}
		<p>{options[selectedOption - 1].t}</p>
	{/if}
</main>
