<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Deux modèles, pour un simulateur plus flexible">
    <div class="r-stack">
        <img
            src="assets/model_change_stack_empty.png"
            alt="Changement de modèle"
            class="w-full fragment fade-out d-shadow-xs"
            data-fragment-index="0"
        />
        <img
            src="assets/model_change_stack_full.png"
            alt="Changement de modèle"
            class="w-full fragment fade-in-then-out d-shadow-xs"
            data-fragment-index="0"
        />
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>
