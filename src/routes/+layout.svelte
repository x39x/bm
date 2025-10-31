<script lang="ts">
    import "../app.css";
    export let data: {
        slugs: string[];
    };
</script>

<nav class="navbar">
    <div class="nav-link">
        {#each data.slugs as slug}
            <a href={"/" + slug}>{slug}</a>
        {/each}
    </div>
</nav>

<main class="content">
    <slot />
</main>
