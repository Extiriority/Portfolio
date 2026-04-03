<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import popout from "../assets/popout.svg";

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
                I graduated cum laude with a Bachelor of Science in Software Engineering from Fontys University and I’m currently pursuing a Master in Applied Quantum Computing.
                Along the way, I completed my graduation internship at ASML, followed enterprise software engineering studies in cloud and microservices architecture, and joined an exchange abroad in Japan.
                I’m always open to connecting about future opportunities and interesting collaborations.
            </p>
            <div class="flex justify-center">
                <button in:fly="{{delay: 550, y: -20, duration: 400 }}"
                        class="flex items-center text-touch border rounded-sm border-touch px-5 py-3 hover:bg-ease hover:px-6 ease-in-out duration-200"
                        onclick="window.open('mailto:VHG.Trang@gmail.com')">
                    Mail me
                    <img src={popout} alt="popout icon" class="pl-2">
                </button>
            </div>
        {/if}
    </div>
</section>
