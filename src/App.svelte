<script lang="ts">
   import { onMount } from "svelte"
   import { menu } from "./lib/state/stores";
　　import Navbar from "./lib/Navbar.svelte"
　　import Intro from "./lib/Intro.svelte"
   import About from "./lib/About.svelte"
   import Experience from "./lib/Experience.svelte"
   import Work from "./lib/Work.svelte"
   import Contact from "./lib/Contact.svelte"
   import Footer from "./lib/Footer.svelte"

   let isPageLoaded = false;

   onMount(() => {
           isPageLoaded = true
   });

   history.scrollRestoration = "manual";

   window.onbeforeunload = function () {
       isPageLoaded = false
       window.scrollTo(0,0);
   };

   /*https://svelte.dev/repl/a461eb2587e64d73b6328f230ea1b3a1?version=3.49.0*/
</script>


<main class="bg-bkg selection:bg-accent selection:text-bkg">
    {#if !isPageLoaded}
        <div class="min-h-screen flex flex-col justify-evenly items-center relative ">
            <img src="/src/assets/Loader.svg" alt="spinner">
        </div>
    {:else }
        <div id="parallax">
            <Navbar/>
            <div class="{$menu ? 'ease-in-out duration-100 blur-sm md:blur-0' : null}">
                <header class="min-h-screen flex flex-col justify-evenly items-center relative bottom-14">
                    <Intro/>
                </header>
                <main class="relative container w-full md:w-4/5 lg:w-3/5 mt-16 sm:mt-24 lg:mt-20 pb-16 -mb-16 grid gap-16 sm:gap-24 lg:gap-40 overflow-hidden">
                    <div id="About">
                        <About/>
                    </div>
                    <div id="Experience">
                        <Experience/>
                    </div>
                    <div id="Work">
                        <Work/>
                    </div>
                    <div id="Contact">
                        <Contact/>
                    </div>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </div>
    {/if}
</main>


