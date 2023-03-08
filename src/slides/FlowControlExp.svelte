<script>
    import ContentSlide from '../layout/ContentSlide.svelte';
</script>

<ContentSlide title="Contrôle de flux&nbsp;: expérience">
    <div class="r-stack">
        <img src="assets/flow_control_exp.png" class="d-shadow w-11/12 fragment fade-out"
             data-fragment-index="0" alt="Expérience de contrôle de flux" />
        <img src="assets/flow_control_exp_soft.png" class="d-shadow w-11/12 fragment fade-in-then-out"
             data-fragment-index="0" alt="Expérience de contrôle de flux" />
        <img src="assets/flow_control_exp_hard.png" class="d-shadow w-11/12 fragment fade-in"
             data-fragment-index="1" alt="Expérience de contrôle de flux" />
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>
