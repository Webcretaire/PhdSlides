<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="HPL&nbsp;: Ré-utilisation du squelette pour SMPI">
    <div class="r-stack">
        <h2 class="m-0 fragment fade-out" data-fragment-index="0">
            Application complète
        </h2>
        <h2 class="m-0 fragment fade-in-then-out" data-fragment-index="0">
            Squelette
        </h2>
    </div>
    <div class="r-stack">
        <img
            src="assets/HPL_4x4_no_vader_144_vanilla.png"
            alt="Résultats HPL (4 nœuds 4 processus par nœud)"
            class="w-full fragment fade-out"
            data-fragment-index="0"
        />
        <img
            src="assets/HPL_4x4_no_vader_144_optimized_tuned.png"
            alt="Résultats HPL (4 nœuds 4 processus par nœud)"
            class="w-full fragment fade-in-then-out"
            data-fragment-index="0"
        />
    </div>

    <p class="text-2xl">
        Benchmarks sur 16 processus (4 nœuds et 4 processus par nœud)
    </p>
</ContentSlide>
