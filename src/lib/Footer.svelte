<script lang="ts">
    let thisYear = new Date()
    let currentYear = thisYear.getFullYear()
</script>

<div class="relative text-xs sm:text-base text-accent text-center w-full bg-bkg py-4 pt-28 pb-8">
    <small>Designed & built by</small>
    <small class="text-touch hover:border-b border-touch">
        <a href="https://github.com/Extiriority/Portfolio" target="_blank" class="text-touch hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-1 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-touch before:absolute before:left-0 before:bottom-0">Vu Ha Giang Trang</a>
    </small>
    <div class="py-1.5">
        <small>Powered by</small>
        <small class="text-touch">Svelte-TS + Vite + Tailwind CSS</small>
    </div>
    <small>All rights reserved, Giang. Copyright © 2022-{currentYear}</small>
</div>