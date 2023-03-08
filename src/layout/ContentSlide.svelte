<script>
    import Header from "../layout/Header.svelte";
    
    export let title;
    export let transition = 'slide';
    export let visibility = 'normal';
    export let animate = null;
</script>

<section data-transition={transition} data-visibility={visibility} data-auto-animate={animate}>
    <Header title={title} />
    <main class="pb-8 pt-3">
        <slot />
    </main>
</section>
