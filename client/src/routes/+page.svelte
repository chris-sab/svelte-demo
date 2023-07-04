<script lang="ts">
    import type { PageData } from "./$types";
    import AnimeCard from "$lib/components/Card/AnimeCard.svelte";

    export let data: PageData;
</script>

{#each data.recommended.data as recommand}
    <div class="grid grid-cols-2 border border-gray-300 rounded-md mb-4 font-Poppins">
        <h1 class="col-span-2 px-4 py-2 border-b border-gray-100 truncate text-primaryBlack font-bold text-lg tracking-wide font-Glegoo uppercase">
            {recommand.content}
        </h1>
        {#each recommand.entry as subRecommand}
            <div class="p-4 text-xl font-bold mb-2">
                <AnimeCard
                    title={subRecommand.title}
                    mal_id={subRecommand.mal_id}
                    image={subRecommand.images.webp.image_url}
                />
            </div>
        {/each}
    </div>
{/each}
