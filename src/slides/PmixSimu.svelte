<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Simulation d'MPI&nbsp;: méthodologie" animate>
    <div class="flex flex-row items-center w-full">
        <img
            data-id="fat_tree"
            src="assets/fat_tree_ethernet.png"
            alt="fat tree"
            class="max-h-[32rem] d-shadow"
        />
        <div class="flex flex-row justify-center fragment">
            <img src="assets/pmix.png" alt="PMIx" class="w-4/12 inline m-0 d-shadow" />
            <h1 class="w-2/12 block text-8xl m-0">&rarr;</h1>
            <img src="assets/s4bxi.png" alt="S4BXI" class="w-4/12 inline m-0 d-shadow" />
        </div>
    </div>

    <aside class="notes">
        <p>
            Parler beaucoup plus vite du réseau de management dont tout le monde se fout
        </p>
    </aside>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>
