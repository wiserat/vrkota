<script>
    let imagePromise;

    async function fetchImage() {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        return await response.json();
    }

    imagePromise = fetchImage();

    function loadNewDoggo() {
        imagePromise = fetchImage();
    }
</script>

<div class="flex flex-col items-center p-4 space-y-4">
    {#await imagePromise}
        <p>loading</p>
    {:then data}
        <img src={data.message} />
    {:catch error}
        <p>error</p>
    {/await}

    <button on:click={loadNewDoggo} class="bg-red-500 p-4">
        another doggo
    </button>
</div>