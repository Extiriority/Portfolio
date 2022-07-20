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
    <div class="min-h-[500px] pt-28">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="tracking-widest text-base font-light text-touch uppercase">
                IV. Interested what you see?
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-accent text-4xl font-bold tracking-wide py-4">
                Contact me
            </h2>
            <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl:px-52 pb-12">
                So far I have reached the third year of my Fontys university of applied sciences for ICT bachelor in the field of software engineering.
                So at this moment I am doing an internship at CPMFactory in my fifth semester but you can always contact me for future endeavors!
            </p>
            <a in:fly="{{delay: 550, y: -20, duration: 400 }}"
                    class=" text-touch border rounded-sm border-touch px-5 py-3 hover:bg-ease hover:py-5 ease-in-out duration-200"
                    onclick="window.open('mailto:VHG.Trang@gmail.com')">
                Mail me
            </a>
        {/if}
    </div>
</section>