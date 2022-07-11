<script lang="ts">
    import { fly } from "svelte/transition";

    let today = new Date()
    let currentHour = today.getHours()
    let greeting

    if (currentHour < 12) {
        greeting = "Good morning"
    } else if (currentHour < 18) {
        greeting = "Good afternoon"
    } else {
        greeting = "Good evening"
    }
</script>

<div class="container w-4/5 sm:w-3/5 md:w-3/5 lg:w-3/5 w-full py-4">
    <div in:fly={{delay: 600, x: -40, duration: 250}} class="text-touch">
        {greeting}, my name is
    </div>
    <div in:fly={{delay: 800, x: -40, duration: 250}} class="flex pt-3 text-4xl md:text-5xl lg:text-6xl">
        <div class="text-touch font-thin animate-pulse">&#123</div>
        <div class="font-bold text-accent px-3">Giang Trang</div>
        <div class="text-touch font-thin animate-pulse">&#125</div>
    </div>
    <div in:fly={{delay: 1000, x: -40, duration: 250}} class="font-bold text-muted text-3xl md:text-5xl lg:text-6xl pt-5">
        I build things for the web.
    </div>
    <div in:fly={{delay: 1200, x: -40, duration: 250}} class="font-thin md:text-lg text-muted pt-8 sm:w-3/4 lg:w-1/2 2xl:1/2 italic">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        Currently, I’m focused on building accessible portfolio to show of my work.
    </div>
</div>