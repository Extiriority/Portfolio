<script lang="ts">
    import { fly } from "svelte/transition"
    import { menu } from "./state/stores";

    const logo = '/src/assets/Logo.png'

    let links = [
        {Id: "I", delayTime: 100, text: "About"},
        {Id: "II", delayTime: 200, text: "Experience"},
        {Id: "III", delayTime: 300, text: "Work"},
        {Id: "IV", delayTime: 400, text: "Contact"}
    ]

    let show = false

    function toggleNavBar() {
        show = !show
        menu.set(show)
    }
</script>

<div class="bg-bkg text-md text-muted">
    <div class="flex justify-between mx-auto items-center px-7 md:pr-96 ">
        <img in:fly="{{delay: 50, y: -20, duration: 400 }}" src={logo} alt="Logo" width="80" height="80">
        <input type="checkbox" id="hamburger" class="peer" on:click={toggleNavBar} hidden>
        <label for="hamburger" class="peer-checked:hamburger md:hidden">
            <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-touch transition duration-300 {show ? '-rotate-45 translate-y-1.5' : null }"></div>
            <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-touch transition duration-300 {show ? 'rotate-45 -translate-y-1' : null }"></div>
        </label>
        <nav class="fixed top-24 bottom-0 z-50 bg-bkg p-8 w-80 text-2xl ease-in-out duration-300 md:text-sm md:w-56 md:wd-auto md:static {show ? 'right-0' : '-right-full'}">
            <ol class="absolute md:flex md:space-x-10 space-y-9 md:space-y-0">
                {#each links as link}
                    <li>
                        <a in:fly="{{delay: link.delayTime, y: -20, duration: 400 }}"
                           on:click={toggleNavBar}
                           class="flex hover:text-touch duration-200 hover:pt-0.5 active:pt-0"
                           href="#{link.text}">
                            <span class="text-touch pr-1">{link.Id}.</span>
                            {link.text}
                        </a>
                    </li>
                {/each}
                <li>
                    <button in:fly="{{delay: 550, y: -20, duration: 400 }}"
                            class="text-touch border rounded-sm border-touch px-4 -my-8 py-1 hover:bg-ease hover:py-3 active:scale-90 ease-in-out duration-200"
                            onclick="window.open('/src/assets/Resume.pdf','blank')">
                        Resume
                    </button>
                </li>
            </ol>
        </nav>
    </div>
</div>