<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import giang from "../assets/giang.jpg";
    import CM from "../assets/cm.png";
    import CMbanner from "../assets/CMbanner.png";

    let isInView;
    let projects = [
        {
            id: 1,
            title: "CM.com Multi-Channel Messaging",
            body: "Developed a multi-channel messaging platform that allows businesses to communicate with their customers with multi-media and markdown through various channels such as Meta, Instagram, WhatsApp, and X.",
            techStack: "Next.js, TypeScript, Node.js, Docker",
            banner: CMbanner,
            logo: CM,
            link: "https://example.com/project",
            repo: "https://github.com/example/repo"
        },
        {
            id: 2,
            title: "CM.com Multi-Channel Messaging",
            body: "Developed a multi-channel messaging platform that allows businesses to communicate with their customers through various channels such as SMS, WhatsApp, and Viber.",
            techStack: "Next.js, TypeScript, Node.js, Docker",
            banner: giang,
            link: "https://example.com/project",
            repo: "https://github.com/example/repo"
        },
    ];
</script>

<section class="grid gap-4 text-center"
         use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
         on:change={({ detail }) => {
         isInView = detail.inView;
    }}>
    <div class="min-h-[375px] pt-28 container">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="flex tracking-widest text-base font-light text-touch uppercase">
                II. Experience
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="flex text-accent text-4xl font-bold tracking-wide py-3">
                Skills I have acquired
            </h2>
            <div class="pt-6"></div>
            {#each projects as project (project.id)}
                <div in:fly={{delay: 250, y: 40, duration: 300}} class="flex bg-gray-700 mb-10 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                    <img class="opacity-60 hover:opacity-100 transition ease-in-out w-full h-72 object-cover " src={project.banner} alt={project.title}>
                    <div class="p-6">
                        <h3 class="text-lg font-semibold text-touch mb-2">{project.title}</h3>
                        <p class="text-sm text-muted mb-4">{project.body}</p>
                        <div class="flex justify-between mt-auto pt-4">
                            <a href={project.link}>
                                <img class="w-12 h-12" src={project.logo} alt="Company redirect link">
                            </a>
                            <p class="text-xs font-mono pt-3 text-touch">{project.techStack}</p>
                            <a href={project.repo} class="text-teal-400 hover:text-teal-300 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.261.82-.58 0-.29-.01-1.25-.015-2.27-3.338.72-4.042-1.562-4.042-1.562-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.086 1.838 1.236 1.838 1.236 1.07 1.83 2.806 1.303 3.49.998.108-.776.42-1.305.764-1.605-2.67-.3-5.48-1.336-5.48-5.93 0-1.31.465-2.38 1.235-3.22-.125-.303-.54-1.523.12-3.17 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.66 1.647.245 2.867.12 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.815 5.625-5.49 5.92.43.365.815 1.1.815 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.215.7.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</section>
