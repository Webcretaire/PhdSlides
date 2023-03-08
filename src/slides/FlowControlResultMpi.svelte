<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Contrôle de flux&nbsp;: résultats MPI (contrôle logiciel)">
    <div class="r-stack">
        <div class="fragment fade-out" data-fragment-index="0">
            <h2>Contrôle de flux au niveau des machines</h2>
            <img
                src="assets/flowctrl_results/16M_compare_node_level_real.png"
                alt="Résultats MPI pour le contrôle de flux (niveau machine)"
                class="w-7/12 ml-auto mr-auto"
            />
            <p class="text-2xl">
                Taille de message&nbsp;: 16MB
            </p>
        </div>
        <div class="fragment fade-in-then-out" data-fragment-index="0">
            <h2>Contrôle de flux au niveau des processus</h2>
            <img
                src="assets/flowctrl_results/16M_compare_process_level_real.png"
                alt="Résultats MPI pour le contrôle de flux (niveau processus)"
                class="w-7/12 ml-auto mr-auto"
                data-fragment-index="0"
            />
            <p class="text-2xl">
                Taille de message&nbsp;: 16MB
            </p>
        </div>
    </div>
</ContentSlide>
