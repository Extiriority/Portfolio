<script lang="ts">
　　import Navbar from "./lib/Navbar.svelte";
　　import About from "./lib/About.svelte";
</script>

<main class="bg-bkg selection:bg-accent selection:text-bkg ">
　　<div id="parallax">
　　<Navbar/>
　　　　<header class="min-h-screen flex flex-col justify-evenly items-center relative">
　　　　<About/>
      
　　　　</header>
　　</div>
</main>


