<script lang="ts">
    import { fly } from "svelte/transition";

    let links = [
        {Id: "I", delayTime: 100, text: "About"},
        {Id: "II", delayTime: 200, text: "Experience"},
        {Id: "III", delayTime: 300, text: "Work"},
        {Id: "IV", delayTime: 400, text: "Contact"}
    ]
</script>

<div class="flex justify-end absolute pr-12 w-full top-0 z-50 space-x-7 text-md text-muted">
    <div class="flex justify-center py-10">
        <ol class="flex space-x-10 hover:text-accent marker:text-touch ease-in-out">
            {#each links as link}
                <li>
                    <a in:fly="{{delay: link.delayTime, y: -20, duration: 400 }}"
                       class="flex hover:text-touch ease-in-out duration-200"
                       href="#{link.text}">
                        <span class="text-touch pr-1">{link.Id}.</span>
                        {link.text}
                    </a>
                </li>
            {/each}
        </ol>
    </div>
    <button in:fly="{{delay: 550, y: -20, duration: 400 }}"
            class="text-touch border rounded-sm border-touch px-3 my-8 hover:bg-ease ease-in-out duration-200"
            onclick="window.open('/src/assets/Resume.pdf','blank')">
        Resume
    </button>
</div>