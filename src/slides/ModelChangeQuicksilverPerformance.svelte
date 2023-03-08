<script>
    import ContentSlide from '../layout/ContentSlide.svelte';
</script>

<ContentSlide title="Changement de modèles&nbsp;: Performance Quicksilver"
              animate>
    <div class="flex flex-row w-full justify-center">
        <img src="assets/middleware_ompi.png"
             alt="Pile logicielle ompi"
             class="w-[12.5rem] m-0 -mt-20 z-10 d-shadow-xs" />
        <div class="r-stack w-7/12 pt-2 mx-10">
            <div class="fragment fade-out" data-fragment-index="0">
                <img src="assets/model_change_quicksilver/cycle_log_wallclock_10000particles_4tasks_1ppn_red.png"
                     alt="Résultats Quicksilver (4 nœuds 1 processus par nœud)"
                     class="w-full m-0" />
                <p class="text-xl m-0">
                    Benchmarks sur 4 nœuds et 1 processus par nœud
                </p>
            </div>

            <div class="fragment fade-in-then-out" data-fragment-index="0">
                <img src="assets/model_change_quicksilver/cycle_log_wallclock_10000particles_8tasks_1ppn_red.png"
                     alt="Résultats Quicksilver (8 nœuds 1 processus par nœud)"
                     class="w-full m-0" />
                <p class="text-xl m-0">
                    Benchmarks sur 8 nœuds et 1 processus par nœud
                </p>
            </div>

            <div class="r-stack">
                <div class="fragment fade-in" data-fragment-index="1">
                    <img src="assets/model_change_quicksilver/cycle_log_wallclock_10000particles_8tasks_1ppn.png"
                         alt="Résultats Quicksilver (8 nœuds 1 processus par nœud)"
                         class="w-full m-0" />
                    <p class="text-xl m-0">
                        Benchmarks sur 8 nœuds et 1 processus par nœud
                    </p>
                </div>
                <div class="fragment fade-in" data-fragment-index="2">
                    <img src="assets/model_change_quicksilver/model_change_line.png"
                         alt="Ligne changement de modèle"
                         class="w-full m-0 mb-[1.75rem] shadow-line" />
                </div>
            </div>
        </div>
        <img src="assets/middleware_smpi.png"
             alt="Pile logicielle smpi"
             class="w-[12.5rem] m-0 -mt-20 z-10 d-shadow-xs" />
    </div>
</ContentSlide>

<ContentSlide title="Changement de modèles&nbsp;: Performance Quicksilver"
              animate>
    <div class="flex flex-row w-full justify-start">
        <div class="w-7/12 pt-2 mx-10 r-stack" data-fragment-index="1">
            <div>
                <img src="assets/model_change_quicksilver/cycle_log_wallclock_10000particles_8tasks_1ppn.png"
                     alt="Résultats Quicksilver (8 nœuds 1 processus par nœud)"
                     class="w-full m-0" />
                <p class="text-xl m-0">
                    Benchmarks sur 8 nœuds et 1 processus par nœud
                </p>
            </div>
            <img src="assets/model_change_quicksilver/model_change_line.png"
                 alt="Ligne changement de modèle"
                 class="w-full m-0 mb-[1.75rem] shadow-line" />
        </div>
        <div class="w-4/12 flex flex-col pt-24">
            <h2 class="m-0">Modèle complexe</h2>
            <h2 class="m-0">=</h2>
            <h2>Plus difficile à analyser</h2>
            <img src="assets/long_divider.png"
                 class="ml-auto mr-auto"
                 alt="Divider" />
            <p><strong>&rarr;</strong> Coût de la flexibilité</p>
        </div>
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }

    img.shadow-line {
        filter: drop-shadow(0 0 0.2rem rgba(0, 0, 0, 0.6)) drop-shadow(0 0 0.15rem black);
    }
</style>
