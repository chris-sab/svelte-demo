<script lang="ts">
    export let title: string;
    export let mal_id: number;
    export let image: string;
</script>

<a class="hover:opacity-50 hover:cursor-pointer" href="/{mal_id}">
    <h1 class="text-2xl font-medium truncate font-Poppins text-primaryPurple">
        {title}
    </h1>

    <img
        class="w-full h-auto rounded-md"
        src={image}
        alt={title}
    />
</a>
