<script lang="ts">
    let today = new Date(), currentHour = today.getHours(), greeting

    if (currentHour < 12) {
        greeting = "Good morning"
    } else if (currentHour < 18) {
        greeting = "Good afternoon"
    } else {
        greeting = "Good evening"
    }
</script>

<div class="container w-3/5 w-full py-4">
    <div class="text-touch">
        {greeting}, my name is
    </div>
    <div class="font-bold text-accent text-4xl md:text-5xl lg:text-6xl pt-3">
        &#123 Giang Trang &#125
    </div>
    <div class="font-bold text-muted text-3xl md:text-5xl lg:text-6xl pt-5">
        I build things for the web.
    </div>
    <div class="text-muted pt-8 sm:w-3/4 lg:w-3/4 2xl:1/2">
        I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible portfolio to show of my work.
    </div>
</div>