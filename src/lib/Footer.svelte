<script lang="ts">
    let thisYear = new Date()
    let currentYear = thisYear.getFullYear()
</script>

<div class="relative text-xs sm:text-base text-accent text-center w-full bg-bkg py-4 pt-28">
    <small>Designed & built by</small>
    <small class="text-touch">Vu Ha Giang Trang</small>
    <div class="py-1.5">
        <small>Powered by</small>
        <small class="text-touch">Svelte-TS + Vite + Tailwind CSS</small>
    </div>
    <small>All rights reserved, Giang. Copyright © 2022-{currentYear}</small>
</div>