<script>
    import ContentSlide from "../layout/ContentSlide.svelte";

    export let secondTime = false;

    const getPortalsClasses = () => {
        let c = "d-shadow-xs m-auto";

        if (!secondTime) c += " fragment";

        return c;
    };

    $: portalsClasses = getPortalsClasses();
</script>

<ContentSlide
    title="Interconnect BXI&nbsp;: solution réseau proposée par Atos"
    animate={secondTime ? true : null}
    visibility={secondTime ? "uncounted" : "normal"}
>
    <div class="flex flex-row items-center w-5/6 m-auto">
        <img
            data-id="fat_tree"
            src="assets/fat_tree_photos.png"
            alt="fat tree"
            class="max-w-[24rem] d-shadow"
        />
        <div class="w-3/6 m-auto">
            <img
                src="assets/portals_in_stack.png"
                alt="Portals"
                class={portalsClasses}
            />
        </div>
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>
