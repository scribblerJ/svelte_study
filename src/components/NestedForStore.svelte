<script>
	import { getContext } from "svelte";
	let name = getContext("name2");
</script>

<main>
	<p>Nested component : {name}</p>
</main>
