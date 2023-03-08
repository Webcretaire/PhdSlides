<script>
    import ContentSlide              from '../layout/ContentSlide.svelte';
    import FlechesPrecisionPerfLarge from '../components/FlechesPrecisionPerfLarge.svelte';

    const title = 'Pile logicielle et matérielle';
</script>

<ContentSlide {title} animate>
    <img data-id="image"
         src="assets/piles_logicielles.png"
         alt="piles logicielles"
         class="w-[97%] d-shadow-xs"
    />

    <FlechesPrecisionPerfLarge/>
</ContentSlide>
<ContentSlide {title} visibility="uncounted" animate>
    <img data-id="image"
         src="assets/piles_logicielles_focus_real.png"
         alt="piles logicielles"
         class="w-[97%] d-shadow-xs" />

    <div data-id="highlight"
         class="border-2 border-red-600 border-solid rounded-md w-[14.15rem] h-[25rem] absolute left-[1.3rem] z-40 top-[10.8rem]"></div>

    <FlechesPrecisionPerfLarge/>
</ContentSlide>
<ContentSlide {title} visibility="uncounted" animate>
    <img data-id="image"
         src="assets/piles_logicielles_focus_emu.png"
         alt="piles logicielles"
         class="w-[97%] d-shadow-xs" />

    <div data-id="highlight"
         class="border-2 border-red-600 border-solid rounded-md w-[14.15rem] h-[25rem] absolute left-[17.39rem] z-40 top-[10.8rem]"></div>

    <FlechesPrecisionPerfLarge/>
</ContentSlide>
<ContentSlide {title} visibility="uncounted" animate>
    <img data-id="image"
         src="assets/piles_logicielles_focus_log.png"
         alt="piles logicielles"
         class="w-[97%] d-shadow-xs" />

    <div data-id="highlight"
         class="border-2 border-red-600 border-solid rounded-md w-[14.15rem] h-[14rem] absolute left-[60.65rem] z-40 top-[10.8rem]"></div>

    <FlechesPrecisionPerfLarge/>
</ContentSlide>
<ContentSlide {title} visibility="uncounted" animate>
    <img data-id="image"
         src="assets/piles_logicielles_focus_smpi.png"
         alt="piles logicielles"
         class="w-[97%] d-shadow-xs" />

    <div data-id="highlight"
         class="border-2 border-red-600 border-solid rounded-md w-[14.15rem] h-[14rem] absolute left-[46.22rem] z-40 top-[10.8rem]"></div>

    <FlechesPrecisionPerfLarge/>
</ContentSlide>
<ContentSlide {title} visibility="uncounted" animate>
    <img data-id="image"
         src="assets/piles_logicielles.png"
         alt="piles logicielles"
         class="w-[97%] d-shadow-xs" />

    <div data-id="highlight"
         class="border-8 border-red-600 border-solid rounded-md w-[14.35rem] h-[25.5rem] absolute left-[31.7rem] z-40 top-[10.6rem]"></div>

    <FlechesPrecisionPerfLarge/>
</ContentSlide>
