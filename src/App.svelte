<script lang="ts">
  import BG from './assets/CodeBG.jpg'
  import Navbar from "./lib/Navbar.svelte";
  import About from "./lib/About.svelte";
</script>

<main class="bg-gray-700 selection:bg-accent selection:text-bkg ">
      <div id="parallax">
            <Navbar/>
            <img class="absolute h-full w-full object-cover object-center mix-blend-soft-light"
                 src={BG}
                 alt="One page cool background"/>



            <header class="min-h-screen flex flex-col justify-evenly items-center relative">
                  <About/>
                  <h1 class="text-2xl">The quick brown fox jumps over the lazy dog.</h1>
                  <h1 class="font-extrabold text-9xl"
                      id="about">
                    About
                  </h1>
                  <h1 class="font-extrabold text-9xl">Experience</h1>
                  <h1 class="font-extrabold text-9xl">Work</h1>
                  <h1 class="font-extrabold text-9xl">Contact</h1>
            </header>
      </div>
</main>



