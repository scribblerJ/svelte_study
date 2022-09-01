<!--
라우팅 시작 방법
1. cmd 창을 연다
2. cd C:\Users\yjg95\Desktop\코딩 통합 폴더\personal_projects\svelte-app
3. npm run dev

-->
<script>
	import { Router, Link, Route } from "svelte-routing";
	import Home from "./routes/Home.svelte";
	import About from "./routes/About.svelte";
	export let url = "";
</script>

<Router {url}>
	<nav>
		<Link to="/">Home</Link>
		<Link to="about">About</Link>
	</nav>
	<div>
		<Route path="/"><Home /></Route>
		<Route path="about" component={About} />
	</div>
</Router>

<style>
</style>
