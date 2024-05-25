<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import CM from "../assets/cm.png";
    import CMBanner from "../assets/CMBanner.png";
    import iPost from  "../assets/ipost.png";
    import iPostBanner from "../assets/iPostBanner.mp4";
    import premid from "../assets/premid.png";
    import premidBanner from "../assets/premidBanner.png";
    import popout from "../assets/popout.svg";

    let isInView;
    let projects = [
        {
            id: 1,
            title: "CM.com Validation of MO/MT Messages Workflow",
            body: "Developed a multi-channel API messaging platform that allows businesses to communicate with their customers with multi-media and markdown through various channels such as Meta, Instagram, WhatsApp, and X.",
            stack: "Kotlin, PostgresSQL Next.js, TypeScript, TailwindCSS, Docker, CM Business API and AURORA design sheet",
            banner: CMBanner,
            isVideo: false,
            logo: CM,
            link: "https://cm.com/",
            repo: "https://github.com/WinteryFox/CMNuntiusfrontend"
        },
        {
            id: 2,
            title: "Fontys Internal Post Platform (FIPost)",
            body: "An opensource project that aims to modernise the internal post system of Fontys tracking and scanning packages. This is a multi year long term project with me as the head maintainer.",
            stack: "C#, .NET6, postgre  SQL, Vue.js, TypeScript, SCSS, Azure, K8s, rabbitMQ, Cypress, SonarCloud",
            banner: iPostBanner,
            isVideo: true,
            logo: iPost,
            link: "https://github.com/FontysIPost/FIPost/wiki",
            repo: "https://github.com/FontysIPost"
        },
        {
            id: 3,
            title: "PreMiD Discord Presence Extension",
            body: "Contributed to the PreMiD project by adding new features and fixing bugs. PreMiD is a Discord Rich Presence extension that allows you to show what you are watching, reading and listening on various platforms.",
            stack: "TypeScript, Eslint, Prettier",
            banner: premidBanner,
            isVideo: false,
            logo: premid,
            link: "https://github.com/FontysIPost/FIPost/wiki",
            repo: "https://github.com/FontysIPost"
        },
    ];
</script>

<section class="grid gap-4 pb-20 justify-center"
         use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
         on:change={({ detail }) => {
         isInView = detail.inView;
    }}>
    <div class="min-h-[375px] pt-28 w-[333px] sm:w-96 md:w-[500px] lg:w-[625px] xl:w-[700px]">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="flex tracking-widest text-base font-light text-touch uppercase">
                III. Work
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="flex text-accent text-4xl font-medium tracking-wide py-3">
                Notable Skills I've acquired
            </h2>
            {#each projects as project (project.id)}
                <div class="pb-28"></div>
                <div in:fly={{delay: 250, y: 40, duration: 300}} class="relative flex bg-bkg shadow-lg rounded-t-3xl overflow-hidden transform transition duration-300 hover:scale-110 hover:rounded-3xl hover:shadow-xl">
                    {#if project.isVideo}
                        <video class="absolute opacity-20 hover:opacity-100 transition ease-in-out object-cover h-[300px] md:h-[350px] lg:h-[450px]" src={project.banner} playsinline loop autoplay muted></video>
                    {:else}
                        <img class="absolute opacity-20 hover:opacity-100 transition ease-in-out object-cover h-[300px] md:h-[300px] lg:h-[350px] xl:h-[400px]" src={project.banner} alt={project.title}>
                    {/if}
                    <div class="px-5 py-5 md:p-6 md:py-16 lg:px-16">
                        <h3 class="text-lg font-bold text-touch mb-2">{project.title}</h3>
                        <p class="font-semibold  mb-4">{project.body}</p>
                    </div>
                </div>
                <div class="flex justify-between px-6 pt-3 pb-2 bg-ease rounded-b-3xl">
                    <a href={project.link} target="_blank" >
                        <img class="w-12 h-12 hover:scale-110 active:scale-95 transition ease-in-out" src={project.logo} alt="Company redirect link">
                    </a>
                    <p class="text-xs text-center font-mono md:pt-2 text-touch w-40 md:w-96">{project.stack}</p>
                    <a href={project.repo} target="_blank" class="text-teal-400 hover:text-teal-300 transition duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 hover:scale-110 active:scale-95 transition ease-in-out" viewBox="0 0 24 24" fill="currentColor">
                            <path fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.261.82-.58 0-.29-.01-1.25-.015-2.27-3.338.72-4.042-1.562-4.042-1.562-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.086 1.838 1.236 1.838 1.236 1.07 1.83 2.806 1.303 3.49.998.108-.776.42-1.305.764-1.605-2.67-.3-5.48-1.336-5.48-5.93 0-1.31.465-2.38 1.235-3.22-.125-.303-.54-1.523.12-3.17 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.66 1.647.245 2.867.12 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.815 5.625-5.49 5.92.43.365.815 1.1.815 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.215.7.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd" />
                        </svg>
                    </a>
                </div>
            {/each}
            <div class="flex justify-center pt-10">
                <button in:fly="{{delay: 300, y: -20, duration: 400 }}"
                        class="flex items-center text-touch border rounded-sm border-touch px-5 py-3 hover:bg-ease hover:px-6 ease-in-out duration-200"
                        onclick="window.open('https://github.com/Extiriority')">
                    Other work
                    <img src={popout} alt="popout icon" class="pl-2">
                </button>
            </div>
        {/if}
    </div>
</section>
