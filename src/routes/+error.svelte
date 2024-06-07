<script lang="ts">
  import { page } from '$app/stores';
</script>

<main class="flex flex-col justify-center items-center gap-2 h-full-with-navbar">
  <p class="text-8xl font-bold">{$page.status}</p>
  <p class="text-xl font-medium">{$page?.error?.message}</p>
</main>