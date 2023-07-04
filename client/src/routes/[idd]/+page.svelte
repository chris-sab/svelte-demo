<script lang="ts">
    import { enhance } from "$app/forms";
    import DetailCard from "$lib/components/Card/DetailCard.svelte";
    import type { PageData } from "./$types";

    export let data: PageData;
</script>

<DetailCard
    title={data.anime.title}
    mal_id={data.anime.mal_id}
    image={data.anime.images.webp.image_url}
/>

<form action="?/addToFavorites" method="post" use:enhance>
    <input type="hidden" name="mal_id" value={data.anime.mal_id} />
    <input type="hidden" name="title" value={data.anime.title} />
    <input
        type="hidden"
        name="image"
        value={data.anime.images.webp.image_url}
    />

    <div class="flex gap-x-4">
        <button
            class="w-40 truncate rounded px-4 py-2 mt-4 font-Poppins bg-primaryPurple text-white"
            type="submit"
        >
            Add favorite
        </button>

        <button
            class="w-40 truncate rounded px-4 py-2 mt-4 font-Poppins bg-primaryRed text-white"
            type="submit"
        >
            Delete favorite
        </button>
    </div>
</form>

<div class="mt-8">
    <a class="w-40 truncate rounded px-4 py-2 font-Poppins bg-primaryPurple text-white" href="/">
        Go back to list
    </a>
</div>
