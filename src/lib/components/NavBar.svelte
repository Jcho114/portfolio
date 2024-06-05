<script lang="ts">
	import { page } from "$app/stores";

    function handleAnchorClick (event: MouseEvent & { currentTarget: EventTarget & HTMLAnchorElement }) {
        if ($page.route.id !== "/") {
            return;
        }

        // To enable smooth scrolling
        event.preventDefault();

        const anchor = event.currentTarget;

        const id = anchor?.getAttribute('href')?.substring(2);

        console.log(id);
        
        if (id) {
            const target = document.getElementById(id);
            console.log(target);
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                });
            }
        }
	}
</script>

<nav class="flex flex-row gap-4 justify-center">
    <a href="/">Home</a>
    <a href="/#projects" on:click={handleAnchorClick}>Projects</a>
</nav>