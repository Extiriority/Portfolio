<script lang="ts">
    import { fly } from "svelte/transition";

    let links = [
        {Id: "I", delayTime: 100, text: "About"},
        {Id: "II", delayTime: 200, text: "Experience"},
        {Id: "III", delayTime: 300, text: "Work"},
        {Id: "IV", delayTime: 400, text: "Contact"}
    ]
</script>

<div class="flex justify-end absolute pr-16 w-full top-0 z-50 space-x-7 text-md text-muted">
    <div class="flex justify-center sm:my-10">
        <input type="checkbox" name="hamburger" id="hamburger" class="peer" hidden>
        <label for="hamburger" class="peer-checked:hamburger block relative z-20 p-6 pt-12 -mr-10 cursor-pointer md:hidden">
            <div aria-hidden="true" class="m-auto h-0.5 w-6 rounded bg-touch transition duration-300"></div>
            <div aria-hidden="true" class="m-auto mt-2 h-0.5 w-6 rounded bg-touch transition duration-300"></div>
        </label>
        <ol class="fixed ease-in-out left-0 right-0 min-h-screen bg-bkg space-y-4 p-4 transform translate-x-full md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-10 md:p-0 md:translate-x-0"
        >
            {#each links as link}
                <li>
                    <a in:fly="{{delay: link.delayTime, y: -20, duration: 400 }}"
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
    </div>
</div>