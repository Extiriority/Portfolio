<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';
    import ASML from "../assets/asml.svg";
    import ASMLBanner from "../assets/ASMLBanner.mp4";
    import CM from "../assets/cm.png";
    import CMBanner from "../assets/CMBanner.png";
    import iPost from  "../assets/ipost.png";
    import iPostBanner from "../assets/iPostBanner.mp4";
    import premid from "../assets/premid.png";
    import premidBanner from "../assets/premidBanner.png";
    import TNO from "../assets/tno.jpeg";
    import TNOBanner from "../assets/TNOBanner.mp4";
    import popout from "../assets/popout.svg";

    let isInView = false;
    let projects = [
        {
            id: 0,
            title: "ASML Dependency Injection Visualizer",
            body: "Developed a real-time visualization tool by simplifying complexity by deconstruction and visualization of Dependency Hypergraphs and object lifetimes across 1,300+ Autofac-driven projects in YieldStar.",
            stack: "C#, .NET8, Autofac, Microsoft Automation Graph Layout (MSAGL), Windows Presentation Foundation (WPF) and Remote Procedure Calls (gRPC)",
            banner: ASMLBanner,
            isVideo: true,
            logo: ASML,
            link: "https://www.asml.com/en/products/metrology-and-inspection-systems/yieldstar-500",
            repo: "https://github.com/Extiriority/AutofacgRPC"
        },
        {
            id: 1,
            title: "TNO automated probe station for quantum JJs",
            body: "Built a NiceGUI application for automated wafer-level electrical characterization with an MPI probe station and Keysight B1500, combining image-based DUT targeting, contact-check workflows, retry logic, live status, and measurement data review in one operator-friendly flow.",
            stack: "Python, NiceGUI, hardware automation, image targeting, data visualization, MPI probe station, Keysight B1500A",
            banner: TNOBanner,
            isVideo: true,
            logo: TNO,
            link: "https://www.tno.nl/en/",
            repo: "https://www.tno.nl/en/"
        },
        {
            id: 2,
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
            id: 3,
            title: "Fontys Internal Post Platform (FIPost)",
            body: "An open-source project that aims to modernise the internal post system of Fontys tracking and scanning packages. This is a multi year long term project with me as the head maintainer.",
            stack: "C#, .NET6, PostgreSQL, Vue.js, TypeScript, SCSS, Azure, K8s, rabbitMQ, Cypress, SonarCloud",
            banner: iPostBanner,
            isVideo: true,
            logo: iPost,
            link: "https://github.com/FontysIPost/FIPost/wiki",
            repo: "https://github.com/FontysIPost"
        },
        {
            id: 4,
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
         on:change={(event) => {
         isInView = (event as unknown as CustomEvent<{ inView: boolean }>).detail.inView;
    }}>
    <div class="min-h-[375px] pt-28 w-full max-w-[333px] sm:max-w-sm md:max-w-[500px] lg:max-w-[820px] xl:max-w-[960px] 2xl:max-w-none 2xl:w-[1260px]">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="flex tracking-widest text-base font-light text-touch uppercase">
                III. Work
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="flex text-accent text-4xl font-medium tracking-wide py-3">
                Notable Skills I've acquired
            </h2>
            <div class="grid grid-cols-1 2xl:grid-cols-2 gap-10 2xl:gap-12 pt-6">
                {#each projects as project (project.id)}
                    <div class="flex flex-col">
                        <div in:fly={{delay: 250, y: 40, duration: 300}} class="relative flex bg-bkg shadow-lg rounded-t-3xl overflow-hidden transform transition duration-300 2xl:hover:scale-105 hover:rounded-3xl hover:shadow-xl h-[300px] md:h-[350px] lg:h-[310px] 2xl:h-[255px]">
                            {#if project.isVideo}
                                <video class="absolute opacity-20 hover:opacity-100 transition ease-in-out object-cover w-full h-[300px] md:h-[350px] lg:h-[310px] 2xl:h-[255px]" src={project.banner} playsinline loop autoplay muted></video>
                            {:else}
                                <img class="absolute opacity-20 hover:opacity-100 transition ease-in-out object-cover w-full h-[300px] md:h-[350px] lg:h-[310px] 2xl:h-[255px]" src={project.banner} alt={project.title}>
                            {/if}
                            <div class="px-5 py-5 md:p-6 md:py-12 lg:px-10 lg:py-8 overflow-hidden">
                                <h3 class="text-lg font-bold text-touch mb-2">{project.title}</h3>
                                <p class="font-semibold mb-4">{project.body}</p>
                            </div>
                        </div>
                        <div class="flex justify-between px-6 pt-3 pb-2 bg-ease rounded-b-3xl">
                            <a href={project.link} target="_blank" >
                                <img class="w-12 h-12 hover:scale-110 active:scale-95 transition ease-in-out" src={project.logo} alt="Company redirect link">
                            </a>
                            <p class="text-xs text-center font-mono md:pt-2 text-touch w-40 md:w-96 lg:w-64 xl:w-72">{project.stack}</p>
                            <a href={project.repo} target="_blank" aria-label={`Open repository for ${project.title}`} class="text-teal-400 hover:text-teal-300 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 hover:scale-110 active:scale-95 transition ease-in-out" viewBox="0 0 24 24" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.11.82-.261.82-.58 0-.29-.01-1.25-.015-2.27-3.338.72-4.042-1.562-4.042-1.562-.546-1.386-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.086 1.838 1.236 1.838 1.236 1.07 1.83 2.806 1.303 3.49.998.108-.776.42-1.305.764-1.605-2.67-.3-5.48-1.336-5.48-5.93 0-1.31.465-2.38 1.235-3.22-.125-.303-.54-1.523.12-3.17 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.66 1.647.245 2.867.12 3.17.77.84 1.235 1.91 1.235 3.22 0 4.61-2.815 5.625-5.49 5.92.43.365.815 1.1.815 2.22 0 1.606-.015 2.896-.015 3.286 0 .32.215.7.825.58C20.565 21.795 24 17.3 24 12c0-6.63-5.37-12-12-12" clip-rule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                {/each}
            </div>
            <div class="flex justify-center pt-10">
                <button in:fly="{{delay: 300, y: -20, duration: 400 }}"
                        class="flex items-center text-touch border rounded-sm border-touch px-5 py-3 hover:bg-ease hover:px-6 ease-in-out duration-200"
                        on:click={() => window.open('https://github.com/Extiriority')}>
                    Other work
                    <img src={popout} alt="popout icon" class="pl-2">
                </button>
            </div>
        {/if}
    </div>
</section>
