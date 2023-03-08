<script>
    import ContentSlide from '../layout/ContentSlide.svelte';
</script>

<ContentSlide title="Contrôle de flux&nbsp;: résultats" animate>
    <div data-id="portals"
         class="flex flex-col justify-center w-5/12 absolute left-auto right-auto top-20 bottom-auto z-10">
        <img src="assets/flowctrl_results/1M_full_portals_8ppn_1floodPair.png"
             alt="Résultats Portals pour le contrôle de flux"
             class="w-11/12 m-auto" />
        <p class="text-xl m-0">
            Taille de message&nbsp;: 1MB<br />
            contrôle de flux hardware
        </p>
    </div>
    <div data-id="mpi_machine"
         class="flex flex-col justify-center w-4/12 absolute -left-[30rem] -bottom-[20rem] z-20">
        <img src="assets/flowctrl_results/16M_compare_node_level_real.png"
             alt="Résultats MPI pour le contrôle de flux (niveau machine)"
             class="w-12/12 mr-auto" />
        <p class="text-xl m-0">
            Taille de message&nbsp;: 16MB,<br />
            contrôle de flux MPI au niveau des machines
        </p>
    </div>
    <div data-id="mpi_process"
         class="flex flex-col justify-center w-4/12 absolute -right-[30rem] -bottom-[20rem] z-0">
        <img src="assets/flowctrl_results/16M_compare_process_level_real.png"
             alt="Résultats MPI pour le contrôle de flux (niveau processus)"
             class="w-12/12 ml-auto"
             data-fragment-index="0" />
        <p class="text-xl m-0">
            Taille de message&nbsp;: 16MB,<br />
            contrôle de flux MPI au niveau des processus
        </p>
    </div>
</ContentSlide>

<ContentSlide title="Contrôle de flux&nbsp;: résultats" animate>
    <div data-id="portals"
         class="flex flex-col justify-center w-5/12 absolute left-auto right-auto top-20 bottom-auto z-10">
        <img src="assets/flowctrl_results/1M_full_portals_8ppn_1floodPair.png"
             alt="Résultats Portals pour le contrôle de flux"
             class="w-11/12 m-auto" />
        <p class="text-xl m-0">
            Taille de message&nbsp;: 1MB<br />
            contrôle de flux hardware
        </p>
    </div>
    <div data-id="mpi_machine"
         class="flex flex-col justify-center w-4/12 absolute left-0 bottom-10 z-20">
        <img src="assets/flowctrl_results/16M_compare_node_level_real.png"
             alt="Résultats MPI pour le contrôle de flux (niveau machine)"
             class="w-12/12 mr-auto" />
        <p class="text-xl m-0">
            Taille de message&nbsp;: 16MB,<br />
            contrôle de flux MPI au niveau des machines
        </p>
    </div>
    <div data-id="mpi_process"
         class="flex flex-col justify-center w-4/12 absolute right-0 bottom-10 z-0">
        <img src="assets/flowctrl_results/16M_compare_process_level_real.png"
             alt="Résultats MPI pour le contrôle de flux (niveau processus)"
             class="w-12/12 ml-auto"
             data-fragment-index="0" />
        <p class="text-xl m-0">
            Taille de message&nbsp;: 16MB,<br />
            contrôle de flux MPI au niveau des processus
        </p>
    </div>
</ContentSlide>
