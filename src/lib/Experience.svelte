<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView;
    let selectedJob = 'TNO';

    const jobs = [
        { name: 'TNO', title: 'Software/Quantum Engineer, Design Challenge @ TNO - Probestation Automation', period: 'November 2025 - April 2026', details: [
                'Built a python NiceGUI-based automation platform for wafer-level electrical characterization with an MPI probe station and Keysight B1500. Working with Josephon Junctions.',
                'Designed the operator flow for setup, SMU and contact configuration, image-based DUT targeting, and live data review with logs, retry handling, and clear run status.',
                'Implemented image-targeting and manual target management workflows to generate, edit, sort, and measure DUT sites reliably during automated runs.',
                'Structured the application around Model-View-Controller boundaries so hardware communication, application state, and UI behavior stayed maintainable and easier to extend.'
            ]},
        { name: 'ASML', title: 'Software Engineer, YieldStar Department @ ASML Dependency Injection visualizer', period: 'September 2024 - January 2025', details: [
                'Developed a real-time visualization tool to analyze object lifetimes and dependency graphs across 1,300+ Autofac-driven projects in YieldStar.',
                'Engineered a runtime data pipeline using gRPC between a custom modified Autofac client and a WPF-based DVTool to dynamically capture and visualize component registrations and resolutions.',
                'Designed interactive graph features using MSAGL with UML-inspired layouts, highlighting circular dependencies, singleton conflicts, and hierarchical scopes.',
                'Collaborated with architects and developers to translate system complexity into visual insights, improving debugging efficiency and architectural transparency.',
            ]},
        { name: 'CPMLive', title: 'Software Intern @ CPMLive - Feedback System', period: 'August 2022 - January 2023', details: [
                'Deliver high-quality, robust Feedback System production ready code for the internal CPMLive analytics and forecasting platform using Express.js, Vue.js, and TypeScript',
                'Work alongside stakeholders to lead the research, development, and architecture of technical solutions to fulfill business requirements',
                'Provide personal leadership within engineering department through being resourceful in field research, knowledge shares, and mentorship'
            ]},
        { name: 'Aniwave', title: 'Mod & Tool Developer @ Aniwave - Community', period: 'January 2021 - March 2024', details: [
                'Assist in the development of a custom moderation tool to streamline the moderation process that allows moderators to easily moderate with a dashboard using Disqus and Discord API with Python, HTML and CSS.',
                'Pair programming with the lead developer to ensure the tool is production ready and meets the requirements of the moderation team.',
                'Act as a community moderator, ensuring adherence to community guidelines and maintaining a positive user environment by managing and resolving user reports and disputes.'
            ]},
    ];
</script>

<section class="grid pb-20 gap-4"
         use:inview={{ unobserveOnEnter: true, rootMargin: '-5%' }}
         on:change={({ detail }) => {
             isInView = detail.inView;
         }}>
    <div class="min-h-[375px] py-24 sm:py-40">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="tracking-widest text-sm sm:text-base font-light text-touch uppercase px-6 sm:px-20">
                II. Experience
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-accent text-3xl sm:text-4xl font-medium tracking-wide py-4 px-6 sm:px-20 sm:max-w-none leading-tight">
                All ventures I have done so far
            </h2>
            <div in:fly={{delay: 260, x: 50, duration: 300}} class="flex flex-col sm:flex-row gap-6 pt-6 px-6 sm:px-20">
                <div class="grid grid-cols-2 gap-2 sm:flex sm:flex-col sm:border-r sm:border-ease sm:bg-bkg sm:mr-6 sm:pr-4">
                    {#each jobs as job}
                        <button
                            class="rounded-md p-3 sm:p-4 cursor-pointer text-left hover:bg-ease transition ease-in-out {job.name === selectedJob ? 'bg-ease border border-touch sm:border-r-2 sm:border-l-0 sm:border-t-0 sm:border-b-0 font-bold' : 'border border-ease sm:border-transparent'}"
                            on:click={() => selectedJob = job.name}
                        >
                            {job.name}
                        </button>
                    {/each}
                </div>
                <div in:fly={{delay: 260, x: -200, duration: 300}} class="min-w-0 mt-2 sm:mt-0 sm:ml-6">
                    {#each jobs as job}
                        {#if job.name === selectedJob}
                            <h3 class="text-2xl sm:text-xl font-bold text-touch leading-tight">{job.title}</h3>
                            <p class="text-muted">{job.period}</p>
                            <ul class="list-[disclosure-closed] pl-5 mt-4 space-y-2">
                                {#each job.details as detail}
                                    <li>{detail}</li>
                                {/each}
                            </ul>
                        {/if}
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</section>
