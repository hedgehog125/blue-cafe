<script>
    import linkPage from "$util/LinkPage.js";

    import menuIcon from "$lib/imgs/menu.svg";
    
    import { page } from "$app/stores";
    
    let showDropdown = false;
    const dropdownItems = {
        "Home": "/",
        "Where to Find us": "where",
        "About Us": "about",
        "Menu": "menu"
    };
    
    const toggleShow = _ => {
        showDropdown = ! showDropdown;
    };
</script>

<main>
    <div class="main">
        <button on:click={toggleShow}>
            <img src={menuIcon} alt="Menu" width=24 height=24>
        </button>
        {#if showDropdown}
            <div class="dropdownContainer">
                {#each Object.entries(dropdownItems) as [title, url], index}
                    <div class="dropdownItem" style="--itemID: {index}">
                        <a href={linkPage(url)}>{title}</a>
                    </div>
                {/each}
            </div>
        {/if}
        <h1>
            Blue Cafe
        </h1>
    </div>
    <div class="space"></div> <!---- Same size as the other div but effects document flow -->
    <br>
</main>

<style>
    .main {
        position: absolute;
        left: 0px;
        right: 0px;
        top: 0px;
        z-index: 99;
        min-height: 50px;

        background-color: rgb(50, 80, 210);
    }
    .space {
        margin-bottom: 50px;
    }

    button {
        position: absolute;
        left: 0px;
        
        border: none;
		background: none;
		padding: 0px;
    }
    .dropdownItem {
        position: absolute;
        left: 0px;
        right: 0px;
        top: calc((var(--itemID) * 50px) + 50px);

        min-height: 50px;
        background-color: rgb(35, 65, 195);
        border-top: 2px dotted #DDD;
        border-bottom: 2px dotted #DDD;
    }
    .dropdownItem > a {
        font-size: 25px;
        color: #EFEFEF;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    h1 {
        display: inline;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);

        padding: 5px;
        margin: 0px;
        margin-left: auto;

        color: white;
    }

    img {
        width: auto;
        height: 50px;

        display: block;
    }
</style>