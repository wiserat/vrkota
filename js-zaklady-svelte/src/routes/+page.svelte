<script lang="ts">
    interface Item {
        name: string;
        isActive: boolean;
    }
    
    let itemList: Item[] = [
        { name: "uklidit", isActive: true },
        { name: "uklidit", isActive: true },
        { name: "uklidit", isActive: true },
        { name: "uklidit", isActive: true },
        { name: "uklidit", isActive: true }
    ];
    let addTask:string = "";

    let i:number = 0;

    let name:string = '';
    let submited:boolean = false;

    let number1:string = ""
    let number2:string = "";
</script>

<div class="flex flex-col">
    {#each itemList as item, index}
        <div class="flex items-center space-x-2">
            <button on:click={() => { item.isActive = !item.isActive }} class="{item.isActive ? '' : 'line-through'}">
                {item.name}
            </button>
            <button on:click={() => { itemList = itemList.filter((_, i) => i !== index) }}>delete</button>
        </div>
    {/each}

    <label for="nameInput">Task:</label>
    <input
            type="text"
            id="nameInput"
            bind:value={addTask}
            placeholder="Enter your task"
            required
    >
    <button type="submit" on:click={() => {itemList = [...itemList, { name: addTask, isActive: true }]; addTask = ""}}>Add</button>
</div>

<button class="p-10 bg-red-500" on:click={() => {i++}}>{i}</button>

    <label for="nameInput">Name:</label>
    <input
            type="text"
            id="nameInput"
            bind:value={name}
    placeholder="Enter your name"
    required
    >
    <button type="submit" on:click={() => {submited = true;}}>Submit</button>
{#if submited}
    {name}
    {/if}

<div class="mt-32">
    <label for="nameInput">Number 1</label>
    <input
            type="text"
            id="nameInput"
            bind:value={number1}
            placeholder="Enter your name"
            required
    >
    +
    <label for="nameInput">Number 2</label>
    <input
            type="text"
            id="nameInput"
            bind:value={number2}
            placeholder="Enter your name"
            required
    >
</div>
{parseInt(number1) + parseInt(number2)}