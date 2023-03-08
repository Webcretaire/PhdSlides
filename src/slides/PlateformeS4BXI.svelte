<script>
    import ContentSlide from "../layout/ContentSlide.svelte";

    export let onlyLast = false;
</script>

<ContentSlide title="S4BXI&nbsp;: modèle d'une machine et un switch" animate>
    <div class="w-1/5 left-4 absolute top-24">
        <img
            data-id="fat_tree"
            src="assets/fat_tree_zoom.png"
            alt="Fat tree, focus on one machine and switch"
            class="w-full"
        />
        <img
            src="assets/loupe.png"
            alt="Loupe"
            class="absolute -scale-x-100 top-0 w-16 right-6"
        />
    </div>
    <div class="ml-[22rem]">
        <div class="r-stack w-10/12 -ml-10">
            {#if !onlyLast}
                <img
                    src="assets/plateforme_s4bxi_empty.png"
                    alt="Modèle d'S4BXI"
                    class="d-shadow-sm fragment fade-out"
                    data-fragment-index="0"
                />
                <img
                    src="assets/plateforme_s4bxi_cpu_only.png"
                    alt="Modèle d'S4BXI"
                    class="d-shadow-sm fragment fade-in-then-out"
                    data-fragment-index="0"
                />
                <img
                    src="assets/plateforme_s4bxi_NIC.png"
                    alt="Modèle d'S4BXI"
                    class="d-shadow-sm fragment fade-in-then-out"
                    data-fragment-index="1"
                />
                <img
                    src="assets/plateforme_s4bxi_PCI.png"
                    alt="Modèle d'S4BXI"
                    class="d-shadow-sm fragment fade-in-then-out"
                    data-fragment-index="2"
                />
                <img
                    src="assets/plateforme_s4bxi_switch.png"
                    alt="Modèle d'S4BXI"
                    class="d-shadow-sm fragment fade-in-then-out"
                    data-fragment-index="3"
                />
                <img
                    src="assets/plateforme_s4bxi.png"
                    alt="Modèle d'S4BXI"
                    class="d-shadow-sm fragment fade-in-then-out"
                    data-fragment-index="4"
                />
            {:else}
                <img
                    src="assets/plateforme_s4bxi.png"
                    alt="Modèle d'S4BXI"
                    class="d-shadow-sm"
                />
            {/if}
        </div>
        <img
            src="assets/simgrid.png"
            alt="SimGrid"
            class="w-1/6 top-[5rem] right-32 absolute d-shadow"
        />
    </div>
</ContentSlide>
