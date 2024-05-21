<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView;
</script>

<section class="grid gap-4 text-center"
         use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
         on:change={({ detail }) => {
         isInView = detail.inView;
    }}>
    <div class="min-h-[375px] pt-28 container">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="tracking-widest text-base font-light text-touch uppercase">
                II. Experience
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-accent text-4xl font-bold tracking-wide py-4">
                Skills I have acquired
            </h2>
            <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl:px-52 pb-12">
                So far I have reached the third year of my Fontys university of applied sciences for ICT bachelor in the field of software engineering.
                So at this moment I am doing an internship at CPMFactory in my fifth semester but you can always contact me for future endeavors!
            </p>
        {/if}
    </div>
</section>