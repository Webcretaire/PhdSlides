<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="S4BXI&nbsp;: modèle du NIC BXI">
    <div class="absolute top-24 left-0 w-[14.5rem] text-xl rounded border-2 border-slate-400 bg-slate-100 d-shadow-sm p-5 pl-0">
        <dl>
            <dt class="text-2xl">E2E</dt>
            <dd class="ml-5 mb-3">Fiabilité de bout-en-bout</dd>

            <dt class="text-2xl">TX</dt>
            <dd class="ml-5 mb-3">Transmission des messages</dd>

            <dt class="text-2xl">RX</dt>
            <dd class="ml-5">Réception des messages</dd>
        </dl>
    </div>
    <div class="r-stack">
        <img
            src="assets/modele_s4bxi.png"
            alt="Modèle d'S4BXI"
            class="w-9/12 d-shadow-sm ml-auto mr-12 fragment fade-out"
            data-fragment-index="0"
        />
        <img
            src="assets/modele_s4bxi_pci.png"
            alt="Modèle d'S4BXI"
            class="w-9/12 d-shadow-sm ml-auto mr-12 fragment fade-in-then-out"
            data-fragment-index="0"
        />
        <img
            src="assets/modele_s4bxi_vn.png"
            alt="Modèle d'S4BXI"
            class="w-9/12 d-shadow-sm ml-auto mr-12 fragment fade-in-then-out"
            data-fragment-index="1"
        />
        <img
            src="assets/modele_s4bxi_e2e.png"
            alt="Modèle d'S4BXI"
            class="w-9/12 d-shadow-sm ml-auto mr-12 fragment fade-in-then-out"
            data-fragment-index="2"
        />
        <img
            src="assets/modele_s4bxi.png"
            alt="Modèle d'S4BXI"
            class="w-9/12 d-shadow-sm ml-auto mr-12 fragment fade-in-then-out"
            data-fragment-index="3"
        />
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>