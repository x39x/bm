<script lang="ts">
    import "../app.css";
    export let data: {
        slugs: string[];
    };
</script>

<!-- navbar -->
<nav class="navbar">
    <div>
        {#each data.slugs as slug}
            <a href={"/" + slug} class="nav-link">{slug}</a>
        {/each}
    </div>
</nav>

<!-- content -->
<slot />
