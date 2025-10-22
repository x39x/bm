<script lang="ts">
    export let data: {
        links: Record<string, { url: string; dsc: string }[]>;
    };
</script>

{#each Object.entries(data.links) as [category, items]}
    <h2>{category}</h2>
    <div>
        {#each items as item}
            <div>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.dsc}
                </a>
            </div>
        {/each}
    </div>
{/each}
