<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView;
</script>

<section class="grid gap-4 text-center pb-20"
        use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
         on:change={({ detail }) => {
         isInView = detail.inView;
    }}>
    <div class="min-h-[300px] pt-28">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="tracking-widest text-base font-light text-touch uppercase">
                I. About
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-accent text-4xl font-bold tracking-wide py-4">
                Lorem ipsum
            </h2>
            <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl:px-52 pb-12">
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum nunc aliquet bibendum enim facilisis gravida. Egestas integer eget aliquet nibh. Sed arcu non odio euismod lacinia at quis. Quam lacus suspendisse faucibus interdum posuere lorem. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Dui sapien eget mi proin sed libero. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Facilisi cras fermentum odio eu feugiat. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
            </p>
        {/if}
    </div>
</section>