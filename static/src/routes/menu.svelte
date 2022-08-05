<script>
    import TopBar from "$lib/TopBar.svelte";
    
    const menuItems = {
        "Flapjack": "20p",
        "Brownies": "50p",
        "Scones": "40p",
        "Lemonade": "20p",
        "Tea <br> (normal, mint, fruit)": "£1",
        "Coffee <br> (expresso, americano)": "£1",
        "Peach cake": "50p",
        "Cupcakes": "20p"
    };
    $: lastIndex = Object.keys(menuItems).length - 1;
</script>

<main>
    <TopBar></TopBar>
    <div class="menu">
        <div>
            {#each Object.entries(menuItems) as [item, price], index}
                <div class="item">
                    <span class="itemName">
                        {@html item}
                    </span>
                    <span class="price">
                        {price}
                    </span>
                </div>
                {#if index != lastIndex}
                    <br>
                {/if}
            {/each}
        </div>
    </div>
    <div class="bottomContent">
        <div>
            <p>
                Bring your own cup please
            </p>
            <span class="noteLabel">Note</span>: <br>
            <span>
                The menu might change so this could be innaccurate. You might want to check at the cafe.
            </span>
        </div>
    </div>
</main>

<style>
    .menu {
        position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
        margin: 50px;
		margin-top: 100px;
		margin-bottom: 137.5px;
		
		border: 2px dashed #3BADDB;
		border-radius: 10px;
		font-size: 20px;
		line-height: 1.375;
        
        display: flex;
		align-items: center;
		padding-left: 12.5px;
		padding-right: 12.5px;
    }
    .menu > div {
        min-width: 100%;
    }
    
    .item {
        border-bottom: dotted;
    }
    .itemName {
        text-align: left;
    }
    .price {
        float: right;
        text-align: right;
    }
    
    .bottomContent {
        position: absolute;
        bottom: 25px;
        left: 0px;
        right: 0px;
        
        text-align: center;
        font-size: 17.5px;
        padding-left: 12.5px;
        padding-right: 12.5px;
    }
    .noteLabel {
        font-weight: bold;
    }
</style>