<script lang="ts">
    import { fly } from "svelte/transition";
    import { onMount } from "svelte";

    const updateDate: [number, number, number] = [2025, 5, 11];
    const currentDate: [number, number, number] = [new Date().getFullYear(), new Date().getMonth() + 1, new Date().getDate(),];
    const sameYear = updateDate[0] == currentDate[0];
    const sameMonth = updateDate[1] == currentDate[1];
    let formattedDate = "";

    if (sameYear) {
        if (sameMonth) {
            const numberOfDays = currentDate[2] - updateDate[2];
            const numberOfWeeks = Math.floor(numberOfDays / 7);
            if (numberOfWeeks == 0) switch (numberOfDays) {
                case 0:
                    formattedDate = "Today";
                    break;
                case 1:
                    formattedDate = "Yesterday";
                    break;
                default:
                    formattedDate = `${numberOfDays} days ago`;
            } else if (numberOfWeeks == 1) {
                formattedDate = "Last week";
            } else {
                formattedDate = `${numberOfWeeks} weeks ago`;
            }
        } else {
            const numberOfMonths = currentDate[1] - updateDate[1];
            formattedDate = numberOfMonths == 1 ? "Last month" : `${numberOfMonths} months ago`;
        }
    } else {
        const numberOfYears = currentDate[0] - updateDate[0];
        formattedDate = numberOfYears == 1 ? "Last year" : `${numberOfYears} years ago`;
    }

    let date = formattedDate;


    let currentHour = new Date().getHours()
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
        I build things for the future.
    </div>
    <div in:fly={{delay: 1200, x: -40, duration: 250}} class="font-thin md:text-lg text-muted pt-8 w-10/12 sm:w-3/4 lg:w-3/4 2xl:1/2 italic">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital and robust experiences.
        My work blends architecture, visualization, and usability to solve real-world problems. Right now, I'm building an accessible portfolio to showcase my projects and prepare for a pre-master trajectory.
    </div>
    <div in:fly={{delay: 1300, x: -40, duration: 250}} class="font-thin md:text-xs text-gray-300 pt-3 w-10/12 sm:w-3/4 lg:w-3/4 2xl:1/2 italic">
        Updated since: {date}
    </div>
</div>

<style>
    .font-bold, .font-thin {
        transition: opacity 0.5s ease-in-out; /* Add smooth transition effect */
    }
</style>