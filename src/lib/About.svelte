<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import pfp from '../assets/giang.jpg';

    let isInView;
</script>

<section class="grid gap-4 text-left pb-20"
        use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
         on:change={({ detail }) => {
         isInView = detail.inView;
    }}>
    <div class="min-h-[300px] px-44 pt-24">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="flex tracking-widest text-base font-light uppercase">
                <div class="text-touch pr-2">I.</div>
                <div class="text-muted">About me</div>
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-accent text-4xl font-medium tracking-wide py-3">
                Who am I as a developer?
            </h2>
            <div class="flex pt-6">
                <div>
                    <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl text-left pr-6 pb-6">
                        Hey, my name is Giang. I'm a 22-year-old developer from The Netherlands that is currently studying Computer Science at
                        <a href="https://fontys.edu/Home.htm" target="_blank" class="text-touch hover:border-b border-touch">Fontys University of Applied Sciences</a>
                        in <a href="https://www.mind-labs.eu/en/" target="_blank" class="text-touch hover:border-b border-touch">Tilburg Mindlabs</a>
                        and <a href="https://brainporteindhoven.com/en/" target="_blank" class="text-touch hover:border-b border-touch">Brainport Eindhoven</a>.
                        My love for programming became prevalent when I entered high school and the tools I love needed some enhanced plugins or features.
                    </p>
                    <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl text-left pr-6 pb-6">
                        Right now I'm a full-stack developer, but I'm mostly interested in the backend + Architecture.
                        Although I also do love to create beautiful and responsive websites.
                    </p>
                    <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl text-left pr-6 pb-12">
                        My current work is maintaining and developing new features for
                        <a href="https://github.com/FontysIPost" class="text-touch hover:border-b border-touch">Fontys IPost</a>,
                        help on open-source projects like <a href="https://github.com/PreMiD/Presences" class="text-touch hover:border-b border-touch">PreMiD</a>,
                        and lead a project on Disqus moderation panel on the <a href="https://github.com/9anime-Disqus" class="text-touch hover:border-b border-touch">biggest streaming platform</a>.
                        <a href="#" class="hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-red-500 before:absolute before:left-0 before:bottom-0 ">
                            Hover me
                        </a>
                    </p>
                </div>
                <img in:fly={{delay: 300, y: 40, duration: 300}} src={pfp} alt="Profile picture" width="400" class="opacity-80">
            </div>
        {/if}
    </div>
</section>