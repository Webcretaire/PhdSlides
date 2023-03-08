<script>
    import ContentSlide from '../layout/ContentSlide.svelte';
</script>

<ContentSlide title="Simulation&nbsp;: de nombreux outils" animate>
    <div class="flex items-center">
        <img src="assets/systemc.png"
             alt="SystemC"
             class="inline-block d-shadow h-20 m-5" />
        <img src="assets/ns-3.png"
             alt="NS-3"
             class="inline-block d-shadow w-40 h-auto m-5" />
        <img src="assets/sst.png" alt="SST/macro" class="d-shadow h-16 m-5" />
        <img src="assets/simgrid.png" alt="SimGrid" class="d-shadow h-28 m-5" />
    </div>

    <img src="assets/long_divider.png"
         class="ml-auto mr-auto mt-6 mb-8 w-10/12"
         alt="Divider" />

    <div class="r-stack w-9/12 m-auto">
        <h1 class="fragment fade-in-then-out pb-20" data-fragment-index="0">
            Objectif&nbsp;: <span class="font-light">estimer le temps d'exécution de l'application simulée</span>
        </h1>
        <img src="assets/performance_accuracy_tradeoff.png"
             alt="Performance accuracy tradeoff"
             class="fragment fade-in d-shadow"
             data-fragment-index="1"
             data-id="move_img" />
    </div>


    <img src="assets/temps_simule_carbon.png" alt="temps_simule"
         class="absolute top-[14.4rem] -left-[2rem] w-[17rem] -z-10 fragment fade-in d-shadow"
         data-fragment-index="2" data-id="temps_simule" />
    <img src="assets/clock.png" alt="wallclock time"
         class="absolute top-[27rem] left-[66rem] w-[5rem] -z-10 fragment fade-in d-shadow"
         data-fragment-index="3" data-id="wallclock" />
    <img src="assets/fleche_precision_short.png" alt="precision"
         class="absolute top-[19.48rem] left-[13.64rem] w-[50.35rem] -z-10 d-shadow-xs fragment fade-in"
         data-fragment-index="1" data-id="fleche_precision" />
    <img src="assets/fleche_perf_short.png" alt="performance"
         class="absolute top-[28.66rem] left-[13.64rem] w-[50.35rem] -z-10 d-shadow-xs fragment fade-in"
         data-id="fleche_perf"
         data-fragment-index="1" />
</ContentSlide>

<ContentSlide title="Simulation&nbsp;: de nombreux outils" animate>
    <img src="assets/long_divider.png"
         class="ml-auto mr-auto mt-6 mb-8 w-10/12"
         alt="Divider" />

    <div class="r-stack w-9/12 m-auto">
        <img src="assets/performance_accuracy_tradeoff_packet.png"
             alt="Performance accuracy tradeoff"
             class="fragment fade-out d-shadow"
             data-fragment-index="0"
             data-id="move_img" />
        <img src="assets/performance_accuracy_tradeoff_analytic.png"
             alt="Performance accuracy tradeoff"
             class="fragment fade-in-then-out d-shadow"
             data-fragment-index="0" />
        <img src="assets/performance_accuracy_tradeoff_fluid.png"
             alt="Performance accuracy tradeoff"
             class="fragment fade-in-then-out d-shadow"
             data-fragment-index="1" />
        <img src="assets/performance_accuracy_tradeoff_s4bxi.png"
             alt="Performance accuracy tradeoff"
             class="fragment fade-in-then-out d-shadow"
             data-fragment-index="2" />
    </div>

    <img src="assets/temps_simule_carbon.png" alt="temps_simule"
         class="absolute top-[14.4rem] -left-[20rem] w-[17rem] -z-10 d-shadow" data-id="temps_simule" />
    <img src="assets/clock.png" alt="wallclock time"
         class="absolute top-[27rem] left-[86rem] w-[5rem] -z-10 d-shadow" data-id="wallclock" />
    <img src="assets/fleche_precision_short.png" alt="precision"
         class="absolute top-[14.72rem] left-[13.64rem] w-[50.35rem] -z-10 d-shadow-xs" data-id="fleche_precision" />
    <img src="assets/fleche_perf_short.png" alt="performance"
         class="absolute top-[23.9rem] left-[13.64rem] w-[50.35rem] -z-10 d-shadow-xs" data-id="fleche_perf" />
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>