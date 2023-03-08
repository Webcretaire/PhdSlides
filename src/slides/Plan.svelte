<script>
    import ContentSlide from "../layout/ContentSlide.svelte";

    export let highlight = null;
    export let image = "simu_objective_simple";
    export let visibility = "normal";

    const classList = (/** @type {string} */ name) =>
        (!highlight && !name.includes(":")) ||
        highlight == name ||
        name.startsWith(`${highlight}:`)
            ? "highlight"
            : name.includes(":")
            ? "hidden"
            : "";
</script>

<ContentSlide
    title="Plan"
    animate={!highlight || highlight == "context" ? true : null}
    {visibility}
>
    <div class="text-left w-7/12 ml-20 mr-auto">
        <ol class="grand-ol">
            <li class={classList("context")}>
                Contexte spécifique
                <ul class="petit-ol">
                    <li class={classList("context:bxi")}>L'interconnect BXI</li>
                    <li class={classList("context:simu")}>
                        Simulateurs existants
                    </li>
                </ul>
            </li>
            <li class={classList("low-level")}>
                S4BXI&nbsp;: simulation de Portals
                <ul class="petit-ol">
                    <li class={classList("low-level:model")}>Notre modèle</li>
                    <li class={classList("low-level:usage")}>
                        Utilisation pratique
                    </li>
                    <li class={classList("low-level:benchs")}>
                        Validation expérimentale
                    </li>
                </ul>
            </li>
            <li class={classList("high-level")}>
                Compatibilité avec les APIs haut niveau
                <ul class="petit-ol">
                    <li class={classList("high-level:bull-mpi")}>
                        MPI chez Atos
                    </li>
                    <li class={classList("high-level:pmix")}>
                        Adaptation d'MPI à S4BXI
                    </li>
                    <li class={classList("high-level:benchs")}>
                        Validation expérimentale
                    </li>
                </ul>
            </li>
            <li class={classList("model-change")}>
                Deux modèles réseau pour un simulateur plus flexible
            </li>
        </ol>
    </div>
    <slot />
    <div class="absolute right-20">
        <img
            src={`assets/${image}.png`}
            class="w-56 ml-auto d-shadow-xs"
            alt="Pile logicielle / matérielle"
        />
    </div>
</ContentSlide>

<style>
    ol.grand-ol li {
        font-size: 1.7rem;
        margin-top: 1rem;
    }
    ul.petit-ol li {
        font-size: 1.5rem;
        margin-top: 0.5rem;
    }
    ol li {
        filter: opacity(50%) grayscale(100%);
    }
    ol li.highlight {
        filter: none;
    }
    ol li::marker {
        color: var(--amgreen);
    }
</style>
