<script lang="ts">
    import { fly } from "svelte/transition";

</script>

<div class="flex justify-end absolute pr-9 w-full top-0 z-50 space-x-7 text-md text-muted">
    <div class="flex justify-center space-x-5 py-7">
        <a in:fly="{{delay: 100, y: -20, duration: 400 }}"
           class="flex hover:text-touch"
           href="#about">
            <div class="text-touch px-2">
                0.
            </div>
            About
        </a>
        <a in:fly="{{delay: 200, y: -20, duration: 400 }}"
            class="flex hover:text-touch"
            href="#experience">
            <div class="text-touch px-2">
                1.
            </div>
            Experience
        </a>
        <a in:fly="{{delay: 300, y: -20, duration: 400 }}"
           class="flex hover:text-touch"
            href="#work">
            <div class="text-touch px-2">
                2.
            </div>
            Work
        </a>
        <a in:fly="{{delay: 400, y: -20, duration: 400 }}"
           class="flex hover:text-touch"
            href="#contact">
            <div class="text-touch px-2">
                3.
            </div>
            Contact
        </a>
    </div>
    <button in:fly="{{delay: 550, y: -20, duration: 400 }}"
            class="text-touch border rounded-sm border-touch px-3 my-5 hover:bg-ease">
        Resume
    </button>
</div>