<script lang="ts">
    export let title: string;
    export let mal_id: number;
    export let image: string;
</script>

<a class="hover:opacity-50 hover:cursor-pointer" href="/{mal_id}">
    <h1 class="truncate font-medium text-primaryPurple">
        {title}
    </h1>

    <img
        class="w-full h-36 object-cover rounded-md"
        src={image}
        alt={title}
    />
</a>
