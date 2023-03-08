<script>
    import "reveal.js/dist/reveal.css";

    import Reveal from "reveal.js";
    import Notes from "reveal.js/plugin/notes/notes.esm.js";
    import Zoom from "reveal.js/plugin/zoom/zoom.esm.js";
    import { onMount, tick } from "svelte";
    import Presentation from "./Presentation.svelte";

    export let app;
    export let reveal;

    onMount(async () => {
        await tick();
        const deck = new Reveal(reveal);
        deck.initialize({
            width: 1244,
            height: 700,
            slideNumber: "c/t",
            progress: true,
            plugins: [Notes, Zoom],
        });
    });
</script>

<svelte:head>
    <title>{app.name}</title>
</svelte:head>

<div class="reveal">
    <div class="slides">
        <Presentation />
    </div>
</div>
