<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Micro-benchmarks OSU&nbsp;: Résultats">
    <div class="r-stack">
        <h2 class="fragment fade-out m-0" data-fragment-index="0">Précision</h2>
        <h2 class="fragment fade-in-then-out m-0" data-fragment-index="0">
            Performance
        </h2>
    </div>
    <div class="r-stack">
        <img
            src="assets/OSU_16nodes1ppn_sync.png"
            alt="Précision OSU (16 nœuds 1 processus par nœud)"
            class="w-full fragment fade-out"
            data-fragment-index="0"
        />
        <img
            src="assets/OSU_16nodes1ppn_sync_perf.png"
            alt="Performance OSU (16 nœuds 1 processus par nœud)"
            class="w-full fragment fade-in-then-out"
            data-fragment-index="0"
        />
    </div>
    <p class="m-0 text-2xl">
        Opérations synchrones&nbsp;:<br />
        benchmarks point-à-point sur 2 nœuds et benchmarks collectifs sur 16 nœuds
        (1 processus par nœud)
    </p>
</ContentSlide>
