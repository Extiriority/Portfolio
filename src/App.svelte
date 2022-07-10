<script lang="ts">
   import { onMount } from "svelte";
　　import Navbar from "./lib/Navbar.svelte";
　　import Intro from "./lib/Intro.svelte";
   import About from "./lib/About.svelte";
   import Footer from "./lib/Footer.svelte";

   let isPageLoaded = false;

   onMount(() => {
       setTimeout(() => {
           isPageLoaded = true;
       }, 800)
   });
</script>


<main class="bg-bkg selection:bg-accent selection:text-bkg ">
    {#if !isPageLoaded}
        <div class="min-h-screen flex flex-col justify-evenly items-center relative">
            <img src="/src/assets/Loader.svg" alt="spinner">
        </div>
    {:else }
        <div id="parallax">
            <Navbar/>
            <header class="min-h-screen flex flex-col justify-evenly items-center relative">
                <Intro/>
            </header>
            <main class="relative mt-16 sm:mt-24 lg:mt-20 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">
                <About id="about"/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    {/if}
</main>


