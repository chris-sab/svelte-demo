<script lang="ts">
    import "../app.css";
    import "../font.css";
    import type { LayoutData } from "./$types";
    import Header from "$lib/components/Header/index.svelte";
    import FavouriteCard from "$lib/components/Card/FavouriteCard.svelte";

    export let data: LayoutData;

    let isFavourite = false;

    $: if (data.favorites) {
        isFavourite = data.favorites.size > 0;
    }
</script>

<Header />

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
        <div class="flex py-12">
            <div class={isFavourite ? 'w-9/12' : 'w-full'}>
                <slot />
            </div>

            {#if isFavourite}
                <div class="w-3/12 px-4 flex flex-col gap-y-2">
                    <h1 class="font-Glegoo font-bold text-lg">
                        Favourites
                    </h1>

                    {#each [...data.favorites] as [key, value]}
                        <FavouriteCard title={value.title} mal_id={key} image={value.image} />
                    {/each}
                </div>
            {/if}
        </div>
    </div>
  </div>
