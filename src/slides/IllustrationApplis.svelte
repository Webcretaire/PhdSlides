<script>
    import ContentSlide from "../layout/ContentSlide.svelte";
</script>

<ContentSlide title="Validation expérimentale">
    <div class="flex flex-row w-8/12 justify-center">
        <div class="flex flex-col w-7/12 border-2 border-solid border-slate-700 rounded-lg p-4 m-3 bg-slate-100 d-shadow">
            <h2>Micro-benchmarks OSU</h2>
            <img
                src="assets/OSU_reduce_scatter_16.png"
                alt="OSU"
                class="d-shadow border-[1px] border-stone-500 m-auto w-[12rem] mb-2"
            />
        </div>
        <!-- <div class="flex flex-col w-5/12 border-2 border-solid border-slate-700 rounded-lg p-4 m-3">
            <h2>LULESH</h2>
            <img
                src="assets/LULESH.png"
                alt="LULESH"
                class="m-auto d-shadow w-7/12"
            />
        </div> -->
    </div>

    <div class="flex flex-row w-9/12 items-center">
        <div class="flex flex-col w-1/2 h-[15.5rem] ml-12 border-2 border-solid border-slate-700 rounded-lg p-4 m-3 bg-slate-100 d-shadow">
            <h2>Quicksilver</h2>
            <img
                src="assets/Quicksilver.png"
                alt="Quicksilver"
                class="m-auto d-shadow mb-2"
            />
        </div>
        <div class="border-2 border-solid border-slate-700 rounded-lg p-4 m-3 w-1/2 h-[15.5rem] bg-slate-100 d-shadow">
            <h2>HPL</h2>
            <img
                src="assets/HPL_Tom.png"
                alt="HPL"
                class="d-shadow border-[1px] border-stone-500 m-auto mb-2"
            />
        </div>
    </div>
</ContentSlide>

<style>
    img {
        object-fit: contain;
    }
</style>
