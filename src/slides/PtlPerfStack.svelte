<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Première validation&nbsp;: PtlPerf">
    <div class="flex flex-row w-5/6 items-center">
        <h3 class="text-2xl w-1/2 mb-10 mt-10 pr-5">
            Objectif final&nbsp;: exécution réelle et simulation
        </h3>
        <h3
            class="text-2xl w-1/2 fragment mb-10 mt-10 pl-5"
            data-fragment-index="0"
        >
            Première validation (avant support d'MPI)
        </h3>
    </div>
    <div class="flex flex-row w-5/6 items-center">
        <img
            src="assets/stack_s4bxi_vs_real.png"
            alt="S4BXI vs real-world stack"
            class="ml-0 mt-0 w-1/2 pr-5 d-shadow-xs border-dashed border-r-2 border-stone-400"
        />
        <img
            src="assets/stack_ptlperf.png"
            alt="PtlPerf stack"
            class="fragment mr-0 pl-5 mt-0 mb-auto w-1/2 d-shadow-xs"
            data-fragment-index="0"
        />
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>
