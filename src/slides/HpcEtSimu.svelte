<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Calcul Haute Performance et simulation" animate>
    <div class="text-left w-9/12 m-auto flex flex-row">
        <div>
            <h3>Problèmes des supercalculateurs&nbsp;:</h3>
            <ul class="mt-3 mb-10">
                <li>Coût énergétique et financier</li>
                <li>Matériel et pile logicielle complexes</li>
            </ul>
            <h3>Simuler le supercalculateur aide à&nbsp;:</h3>
            <ul class="mt-3 mb-10">
                <li>Comprendre ses performances</li>
                <li>Mieux le paramétrer</li>
                <li>Dimensionner</li>
            </ul>
        </div>
        <img src="assets/simu_objective_simple.png" class="fragment w-56 ml-auto d-shadow-xs" alt="Objectif de la simulation"/>
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>
