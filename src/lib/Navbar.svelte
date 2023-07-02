<script lang="ts">
    import { fly } from "svelte/transition"
    import { menu } from "./state/stores";

    const logo = '/src/assets/Logo-1b30d987.png'

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

<div class="bg-bkg text-md text-muted pt-1">
    <div class="flex justify-between mx-auto items-center pl-7 md:pl-10 pr-52 md:pr-7 pt-4">
        <img in:fly="{{delay: 50, y: -20, duration: 400 }}" src={logo} alt="Logo" width="60" height="60">
        <input type="checkbox" id="hamburger" class="peer" on:click={toggleNavBar} hidden>
        <label for="hamburger" class="fixed top-0 bottom-0 right-0 pt-10 w-28 peer-checked:hamburger z-50 md:hidden">
            <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-touch transition duration-300 {show ? '-rotate-45 translate-y-1.5' : null }"></div>
            <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-touch transition duration-300 {show ? 'rotate-45 -translate-y-1' : null }"></div>
        </label>
        <nav class="fixed flex justify-center items-center top-0 bottom-0 z-30 bg-ease p-8 w-full phone:w-9/12 text-2xl md:shadow-none ease-in-out duration-300 md:justify-end md:bg-bkg md:text-base md:wd-auto md:static {show ? 'right-0 shadow-xl shadow-ease' : '-right-full'}">
            <ol class="absolute flex items-center flex-col space-y-12 md:flex-row md:space-x-10 md:space-y-0">
                {#each links as link}
                    <li>
                        <a in:fly="{{delay: link.delayTime, y: -20, duration: 400 }}"
                           on:click={toggleNavBar}
                           class="flex hover:text-touch duration-200 hover:pt-0.5 active:pt-0"
                           href="#{link.text}">
                            <div class="md:flex text-center">
                                <span class="text-touch md:pr-1.5">{link.Id}.</span>
                                <div>{link.text}</div>
                            </div>
                        </a>
                    </li>
                {/each}
                <li>
                    <button in:fly="{{delay: 550, y: -20, duration: 400 }}"
                            class="text-touch border rounded-md border-touch px-4 -my-8 py-1 hover:bg-ease hover:py-3 active:scale-90 ease-in-out duration-200"
                            onclick="window.open('/src/assets/Resume.pdf','blank')">
                        Resume
                    </button>
                </li>
            </ol>
        </nav>
    </div>
</div>