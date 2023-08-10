<script lang="ts">
    import { fly } from 'svelte/transition'
    import { menu } from './state/stores'
    import logo from '../assets/logo.png'
    import popout from '../assets/popout.svg'
    import resume from '../assets/resume.png'

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

    let prevPos = window.scrollY;

    window.onscroll = function() {
        const currentPos = window.scrollY;
        document.getElementById("navbar").style.top = prevPos > currentPos ? "0" : "-85px"

        prevPos = currentPos;
    }
</script>

<div class="md:fixed md:w-full z-50 bg-bkg md:bg-opacity-60 text-md text-muted duration-200 pt-1" id="navbar">
    <div class="flex justify-between mx-auto items-center pl-7 md:pl-10 pr-52 md:pr-7 pt-4">
        <img in:fly="{{delay: 50, y: -20, duration: 400 }}" src={logo} alt="Logo" width="60" height="60">
        <input type="checkbox" id="hamburger" class="peer" on:click={toggleNavBar} hidden>
        <label for="hamburger" class="fixed top-0 bottom-0 right-0 pt-10 w-28 h-20 peer-checked:hamburger z-50 md:hidden">
            <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-touch transition duration-300 {show ? '-rotate-45 translate-y-1.5' : null }"></div>
            <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-touch transition duration-300 {show ? 'rotate-45 -translate-y-1' : null }"></div>
        </label>
        <nav class="fixed flex justify-center items-center top-0 bottom-0 z-30 bg-ease md:bg-transparent p-8 w-full phone:w-9/12 text-2xl md:shadow-none ease-in-out duration-300 md:justify-end md:text-base md:wd-auto md:static {show ? 'right-0 shadow-xl shadow-ease' : '-right-full'}">
            <ol class="absolute flex items-center flex-col space-y-12 md:flex-row md:space-x-10 md:space-y-0">
                {#each links as link}
                    <li>
                        <a in:fly="{{delay: link.delayTime, y: -20, duration: 400 }}"
                           on:click={toggleNavBar}
                           class="flex hover:text-touch duration-200 border-touch hover:border-b ease-in-out "
                           href="#{link.text}">
                            <div class="md:flex text-center py-1">
                                <span class="text-touch md:pr-1.5">{link.Id}.</span>
                                <div>{link.text}</div>
                            </div>
                        </a>
                    </li>
                {/each}
                <li class="pr-6">
                    <a in:fly="{{delay: 550, y: -20, duration: 400 }}"
                            class="flex hover:text-touch py-1 rounded-md border-touch hover:border-b hover:border-t ease-in-out duration-200"
                            href="{resume}" target="_blank">
                        <div class="flex text-center pl-1 py-1">
                            <img src={popout} alt="popout icon" class="pr-2 center">
                            <div>Resume</div>
                        </div>
                    </a>
                </li>
            </ol>
        </nav>
    </div>
</div>