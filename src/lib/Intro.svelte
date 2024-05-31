<script lang="ts">
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    let today = new Date()
    let currentHour = today.getHours()
    let greeting

    if (currentHour < 12) {
        greeting = "morning"
    } else if (currentHour < 18) {
        greeting = "afternoon"
    } else {
        greeting = "evening"
    }

    let text: string = "Giang Trang";
    let displayedText: string = "";
    let index: number = 0;
    let cursorVisible: boolean = false;

    const toggleCursor = () => cursorVisible = !cursorVisible;


    onMount(() => {
        setTimeout(() => {
            const interval = setInterval(() => {
                if (index < text.length) {
                    displayedText += text[index];
                    index++;
                }
            }, 100);
            return () => clearInterval(interval);
        }, 1200);

        setInterval(toggleCursor, 500);
    });
</script>

<div class="container py-4">
    <div in:fly={{delay: 600, x: -40, duration: 250}} class="text-touch">
        Good {greeting}, my name is
    </div>
    <div in:fly={{delay: 800, x: -40, duration: 250}} class="flex pt-3 text-5xl md:text-5xl lg:text-6xl">
        <div class="text-touch sm:font-thin animate-pulse">&#123</div>
        <div class="font-bold text-accent px-1 sm:px-2 md:px-3 lg:px-3">
            {displayedText}
            {#if cursorVisible}
                <span class="cursor text-touch">_</span>
            {:else}
                <span class="text-blue-900/0">_</span>
            {/if}
        </div>
        <div class="text-touch sm:font-thin animate-pulse">&#125</div>
    </div>
    <div in:fly={{delay: 1000, x: -40, duration: 250}} class="font-bold text-muted text-4xl md:text-5xl lg:text-5xl pt-5">
        I build things for the web.
    </div>
    <div in:fly={{delay: 1200, x: -40, duration: 250}} class="font-thin md:text-lg text-muted pt-8 w-10/12 sm:w-3/4 lg:w-3/4 2xl:1/2 italic">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        Currently, I’m focused on building an accessible portfolio to show off my work and seeking my final graduation internship FALL 2024.
    </div>
</div>

<style>
    .font-bold, .font-thin {
        transition: opacity 0.5s ease-in-out; /* Add smooth transition effect */
    }
</style>