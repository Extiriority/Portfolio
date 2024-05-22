<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import pfp from '../assets/giang.jpg';

    let isInView;
</script>

<section class="grid gap-4 text-left pb-20 justify-center"
        use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
         on:change={({ detail }) => {
         isInView = detail.inView;
    }}>
    <div class="min-h-[300px] pb-28 pt-24 ">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="flex tracking-widest text-base font-light uppercase">
                <div class="text-touch pr-2">I.</div>
                <div class="text-touch">About me</div>
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-accent text-4xl font-medium tracking-wide py-3 lg:w-[600px]">
                Who am I as a developer?
            </h2>
            <div class="sm:flex pt-6 xl:w-[700px] lg:w-[550px]">
                <div>
                    <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl text-left md:pr-6 pr-0 pb-6">
                        Dear  viewer, my name is Giang. I'm a 23-year-old developer from The Netherlands that is currently studying Computer Science at
                        <a href="https://fontys.edu/Home.htm" target="_blank" class="text-touch hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-touch before:absolute before:left-0 before:bottom-0">Fontys University of Applied Sciences</a>
                        in <a href="https://www.mind-labs.eu/en/" target="_blank" class="text-touch hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-touch before:absolute before:left-0 before:bottom-0">Tilburg Mindlabs</a>
                        and <a href="https://brainporteindhoven.com/en/" target="_blank" class="text-touch hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-touch before:absolute before:left-0 before:bottom-0">Brainport Eindhoven</a>.
                        My love for programming became prevalent when I entered high school and the tools I love needed some enhanced plugins or features.
                    </p>
                    <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl text-left md:pr-6 pr-0 pb-6">
                        Right now I'm a full-stack developer, but I'm mostly interested in the backend + Architecture.
                        Although I also do love to create beautiful and responsive websites.
                    </p>
                    <p in:fly={{delay: 300, y: 40, duration: 300}} class="text-muted 2xl text-left md:pr-6 pr-0 pb-12">
                        My current work is maintaining and developing new features for
                        <a href="https://github.com/FontysIPost" class="text-touch hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-touch before:absolute before:left-0 before:bottom-0">Fontys IPost</a>,
                        help on open-source projects like <a href="https://github.com/PreMiD/Presences" class="text-touch hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-touch before:absolute before:left-0 before:bottom-0">PreMiD</a>,
                        and lead a project on Disqus moderation panel on the <a href="https://github.com/9anime-Disqus" class="text-touch hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-touch before:absolute before:left-0 before:bottom-0">biggest streaming platform</a>.
                        <a href="#" class="">
                            Hover me
                        </a>
                    </p>
                </div>
            <img in:fly={{delay: 300, y: 40, duration: 300}} src={pfp} alt="Profile picture" class="transition-all duration-300 rounded-3xl cursor-pointer filter xl:grayscale hover:grayscale-0 opacity-80 object-contain h-96 w-96">
            </div>
        {/if}
    </div>
</section>