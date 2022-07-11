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
    <div class="min-h-[300px]">


        {#if isInView}
            <p in:fly={{delay: 200, y: 40, duration: 300}} class="tracking-widest text-xs font-light text-accent uppercase">
                The standard Lorem Ipsum passage, used since the 1500s
            </p>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-3xl font-bold tracking-wide">
                Lorem ipsum
            </h2>
            <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted">
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum nunc aliquet bibendum enim facilisis gravida. Egestas integer eget aliquet nibh. Sed arcu non odio euismod lacinia at quis. Quam lacus suspendisse faucibus interdum posuere lorem. Mi quis hendrerit dolor magna eget est lorem ipsum dolor. Urna condimentum mattis pellentesque id nibh tortor id aliquet. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Dui sapien eget mi proin sed libero. Proin libero nunc consequat interdum varius sit amet mattis vulputate. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum est. Facilisi cras fermentum odio eu feugiat. Velit aliquet sagittis id consectetur purus ut faucibus pulvinar.
            </p>
        {/if}
    </div>
</section>