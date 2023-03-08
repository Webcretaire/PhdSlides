<script>
    import ContentSlide from '../layout/ContentSlide.svelte';
</script>

<ContentSlide title="Quicksilver&nbsp;: Comparaison sur différentes tailles de cluster">
    <h2 class="m-0">Précision&nbsp;: une simulation</h2>
    <div class="r-stack">
        <div class="fragment fade-out" data-fragment-index="0">
            <img src="assets/Quicksilver_1000000particles_16tasks_2ppn.png"
                 alt="Résultats Quicksilver (8 nœuds 2 processus par nœud)"
                 class="w-full" />
            <p class="m-0 text-2xl">
                Benchmarks sur 16 processus (8 nœuds et 2 processus par nœud)
            </p>
        </div>

        <div class="fragment fade-in-then-out" data-fragment-index="0">
            <img src="assets/Quicksilver_1000000particles_32tasks_2ppn.png"
                 alt="Résultats Quicksilver (16 nœuds 2 processus par nœud)"
                 class="w-full" />
            <p class="m-0 text-2xl">
                Benchmarks sur 32 processus (16 nœuds et 2 processus par nœud)
            </p>
        </div>
    </div>
</ContentSlide>
