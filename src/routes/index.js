import Home from "./Home.svelte";
import About from "./About.svelte";
import BasicGrammar from "./BasicGrammar.svelte";
import DataBinding from "./DataBinding.svelte";
import ComponentLifecycle from "./ComponentLifecycle.svelte";
import store from "./store.svelte";

export default {
    "/": Home,
    "/About": About,
    "/BasicGrammar": BasicGrammar,
    "/DataBinding": DataBinding,
    "/ComponentLifecycle": ComponentLifecycle,
    "/store": store,
}