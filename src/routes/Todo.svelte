<script>
	let todos = [
		{ id: 1, name: "임시", done: false },
		{ id: 2, name: "임시", done: false },
		{ id: 3, name: "임시", done: false },
		{ id: 4, name: "임시", done: false },
	];
	let lastId = todos.length;
	let inputValue = "";

	function addTodo() {
		lastId = lastId + 1;
		todos = [...todos, { id: lastId, name: inputValue, done: false }];
		inputValue = "";
	}

	function changeTodoState(todoId) {
		todos = todos.map((t) => {
			if (t.id === todoId) {
				if (t.done) {
					t.done = false;
				} else {
					t.done = true;
				}
			}

			return t;
		});
	}
</script>

<main>
	<h1>Forget Todo Application</h1>
	<div class="container">
		<input bind:value={inputValue} placeholder="뭐할까?" />
		<button on:click={addTodo}>추가</button>
		<ul>
			{#each todos as t}
				<li class:done={t.done}>
					{t.name}
					{t.done}
					<button on:click={() => changeTodoState(t.id)}>완료</button>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	h1 {
		margin-top: 4rem;
	}

	main {
		font-family: sans-serif;
		text-align: center;
		width: 40rem;
		margin: 0px auto;
	}

	.container {
		margin: 0px auto;
	}

	ul {
		padding: 0px auto;
		text-align: center;
	}

	li > button {
		margin-left: 1rem;
		font-size: 0.9rem;
	}

	input {
		width: 25rem;
		padding: 0 4rem;
		margin-bottom: 1rem;
	}

	button {
		height: 2rem;
	}

	.done {
		text-decoration: line-through;
	}
</style>
