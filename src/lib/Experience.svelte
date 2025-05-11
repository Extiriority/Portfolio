<script lang="ts">
    import { fly } from 'svelte/transition';
    import { inview } from 'svelte-inview';

    let isInView;
    let selectedJob = 'ASML';

    const jobs = [
        { name: 'ASML', title: 'Software Engineer, YieldStar Department @ ASML Dependency Injection visualizer', period: 'September 2024 – January 2025', details: [
                'Developed a real-time visualization tool to analyze object lifetimes and dependency graphs across 1,300+ Autofac-driven projects in YieldStar.',
                'Engineered a runtime data pipeline using gRPC between a custom modified Autofac client and a WPF-based DVTool to dynamically capture and visualize component registrations and resolutions.',
                'Designed interactive graph features using MSAGL with UML-inspired layouts, highlighting circular dependencies, singleton conflicts, and hierarchical scopes.',
                'Collaborated with architects and developers to translate system complexity into visual insights, improving debugging efficiency and architectural transparency.',
            ]},
        { name: 'CPMLive', title: 'Software Intern @ CPMLive - Feedback System', period: 'August 2022 – January 2023', details: [
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
    <div class="min-h-[375px] py-40">
        {#if isInView}
            <header in:fly={{delay: 200, y: 40, duration: 300}} class="tracking-widest text-base font-light text-touch uppercase px-20">
                II. Experience
            </header>
            <h2 in:fly={{delay: 250, y: 40, duration: 300}} class="text-accent text-4xl font-bold tracking-wide py-4 px-20">
                All ventures I have done so far
            </h2>
            <div in:fly={{delay: 260, x: 50, duration: 300}} class="flex flex-col sm:flex-row pt-6 px-20">
                <div class="flex flex-col border-r border-ease bg-bkg mr-6">
                    {#each jobs as job}
                        <div class="p-4 cursor-pointer hover:bg-ease {job.name === selectedJob ? 'bg-ease border-r-2 border-touch transition ease-in-out font-bold animate-pulse ' : ''}" on:click={() => selectedJob = job.name}>
                            {job.name}
                        </div>
                    {/each}
                </div>
                <div in:fly={{delay: 260, x: -200, duration: 300}} class="mt-4 sm:mt-0 sm:ml-6">
                    {#each jobs as job}
                        {#if job.name === selectedJob}
                            <h3 class="text-xl font-bold text-touch">{job.title}</h3>
                            <p class="text-muted">{job.period}</p>
                            <ul class="list-[disclosure-closed] pl-5 mt-4">
                                {#each job.details as detail}
                                    <li class="mb-2">{detail}</li>
                                {/each}
                            </ul>
                        {/if}
                    {/each}
                </div>
            </div>
        {/if}
    </div>
</section>