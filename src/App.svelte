<!--
라우팅 시작 방법
1. cmd 창을 연다
2. cd C:\Users\yjg95\Desktop\코딩 통합 폴더\personal_projects\svelte-app
3. npm run dev

-->
<script>
	import Header from "./components/Header.svelte";
	import Footer from "./components/Footer.svelte";
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<main>
	<Header />
	<Router {routes} />
	<Footer />
</main>

<style>
</style>
