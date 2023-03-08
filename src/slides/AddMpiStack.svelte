<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Pile logicielle&nbsp;: Ajout d'une couche supplémentaire">
    <div class="flex flex-row w-5/6 items-center">
        <img
            src="assets/add_mpi_stack.png"
            alt="Add MPI to our stack"
            class="ml-0 pr-24 d-shadow-xs max-h-[400px]"
        />
        <img
            src="assets/smpi_stack.png"
            alt="SMPI stack"
            class="fragment mr-0 pl-24 d-shadow-xs max-h-[400px] border-dashed border-l-2 border-stone-400"
        />
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>