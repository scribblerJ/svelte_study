import Home from "./Home.svelte";
import About from "./About.svelte";
import BasicGrammar from "./BasicGrammar.svelte";
import DataBinding from "./DataBinding.svelte";
import ComponentLifecycle from "./ComponentLifecycle.svelte";

export default {
    "/": Home,
    "/About": About,
    "/BasicGrammar": BasicGrammar,
    "/DataBinding": DataBinding,
    "/ComponentLifecycle": ComponentLifecycle,
}