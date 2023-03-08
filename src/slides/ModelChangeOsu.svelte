<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Changement de modèles&nbsp;: Résultats OSU" animate>
    <div class="r-stack">
        <h2 class="fragment fade-out m-0" data-fragment-index="0">Précision</h2>
        <h2 class="fragment fade-in-then-out m-0" data-fragment-index="0">
            Performance
        </h2>
    </div>
    <div class="flex flex-row">
        <img src="assets/middleware_ompi.png" alt="Pile logicielle ompi" class="w-[12.5rem] m-0 d-shadow-xs" />
        <div class="r-stack w-4/6 m-auto">
            <img
                src="assets/OSU_modelChangeError_16nodes_1ppn_sync.png"
                alt="Précision OSU (16 nœuds 1 processus par nœud)"
                class="w-full fragment fade-out"
                data-fragment-index="0"
            />
            <img
                src="assets/OSU_modelChangeTime_16nodes_1ppn_sync.png"
                alt="Performance OSU (16 nœuds 1 processus par nœud)"
                class="w-full fragment fade-in-then-out"
                data-fragment-index="0"
            />
        </div>
        <img src="assets/middleware_smpi.png" alt="Pile logicielle smpi" class="w-[12.5rem] m-0 d-shadow-xs" />
    </div>
    <p class="text-xl m-0">
        Opérations synchrones&nbsp;: benchmarks point-à-point sur 2 nœuds et
        benchmarks collectifs sur 16 nœuds (1 processus par nœud)
    </p>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>