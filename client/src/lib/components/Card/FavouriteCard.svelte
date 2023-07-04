<script lang="ts">
    export let title: string;
    export let mal_id: number;
    export let image: string;
</script>

<a href="/{mal_id}" class="hover:opacity-50 hover:cursor-pointer">
    <div class="text-base truncate text-primaryPurple font-medium">
        {title}
    </div>
    <img
        class="object-cover h-24 w-full rounded-md hover:transition-all"
        src={image}
        alt={title}
    />
</a>