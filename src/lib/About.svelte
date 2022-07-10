<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView;
</script>

<section class="container grid gap-4 text-center w-full w-3/5"
        use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
         on:change={({ detail }) => {
         isInView = detail.inView;
}}>
    {#if isInView}
        <small in:fly={{delay: 200, y: 40, duration: 300}} class="tracking-widest text-accent uppercase">
            The standard Lorem Ipsum passage, used since the 1500s
        </small>
        <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-3xl font-bold tracking-wide">
            Lorem ipsum
        </h2>
        <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted">
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    {/if}
</section>