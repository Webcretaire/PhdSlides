<script>
    import ContentSlide from '../layout/ContentSlide.svelte';
</script>

<ContentSlide title="Changement de modèles&nbsp;: Précision Quicksilver"
              animate>
    <h2 class="m-2">Changement de modèle entre les cycles 4 et 5</h2>
    <div class="r-stack">
        <div class="absolute h-[25rem] border-r-2 z-10 border-slate-700 border-dashed top-[9.2rem] left-[38.9rem]"></div>
        <img alt="Middleware SMPI"
             src="assets/middleware_smpi.png"
             class="absolute w-[6rem] z-10 top-[20.2rem] left-[25rem] d-shadow-xs" />
        <img alt="Middleware OMPI"
             src="assets/middleware_ompi.png"
             class="absolute w-[6rem] z-10 top-[20.2rem] right-[25rem] d-shadow-xs" />

        <div class="fragment fade-out" data-fragment-index="0">
            <img src="assets/model_change_quicksilver/s4bxi_10000particles_modelChange5_4tasks_1ppn.png"
                 alt="Résultats Quicksilver (8 nœuds 2 processus par nœud)"
                 class="w-full" />
            <p class="text-xl m-0">
                Benchmarks sur 4 nœuds et 1 processus par nœud
            </p>
        </div>

        <div class="fragment fade-in-then-out" data-fragment-index="0">
            <img src="assets/model_change_quicksilver/s4bxi_10000particles_modelChange5_8tasks_1ppn.png"
                 alt="Résultats Quicksilver (16 nœuds 2 processus par nœud)"
                 class="w-full" />
            <p class="text-xl m-0">
                Benchmarks sur 8 nœuds et 1 processus par nœud
            </p>
        </div>
    </div>
</ContentSlide>
