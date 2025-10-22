<script lang="ts">
    export let data: {
        links: Record<string, { url: string; dsc: string }[]>;
    };

    // 判断是否为外链
    const isExternal = (url: string) =>
        url.startsWith("http://") || url.startsWith("https://");
</script>

{#each Object.entries(data.links) as [category, items]}
    <h2>{category}</h2>
    <div>
        {#each items as item}
            <div>
                {#if isExternal(item.url)}
                    <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {item.dsc}
                    </a>
                {:else}
                    <a href={item.url}>{item.dsc}</a>
                {/if}
            </div>
        {/each}
    </div>
{/each}
